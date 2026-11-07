const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const js = fs.readFileSync(path.join(root, 'assets/js/main.js'), 'utf8');
const dictionaries = vm.runInNewContext(js.slice(0, js.indexOf('/* Recipe-tool preview')) + '; I18N');
const decode = value => value.replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
const pages = ['index', 'materials', 'about', 'contact'];
const canonicalURLs = [];
for (const lang of ['en', 'tr']) {
  for (const page of pages) {
    const file = (lang === 'tr' ? 'tr/' : '') + page + '.html';
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    const route = (lang === 'tr' ? '/tr' : '') + (page === 'index' ? (lang === 'tr' ? '' : '/') : '/' + page);
    const canonical = 'https://www.akmin.info' + route;
    canonicalURLs.push(canonical);
    assert(html.includes(`<html lang="${lang}">`), file + ': HTML language');
    assert.equal((html.match(/<h1\b/g) || []).length, 1, file + ': one main heading');
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, file + ': one canonical');
    assert(html.includes(`rel="canonical" href="${canonical}"`), file + ': canonical URL');
    for (const alternate of ['en', 'tr', 'x-default']) assert(html.includes(`hreflang="${alternate}"`), file + ': alternate language');
    assert(!html.includes('akmin-minerals.vercel.app'), file + ': no old domain');
    assert(!html.includes('noindex'), file + ': indexable');
    for (const m of html.matchAll(/<(\w+)\b[^>]*data-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g)) {
      assert.equal(decode(m[3]), dictionaries[lang][m[2]], file + ': translated HTML ' + m[2]);
    }
    for (const m of html.matchAll(/(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      const url = m[1];
      let target = url === '/' ? 'index.html' : url === '/tr' ? 'tr/index.html' : url.slice(1);
      if (!path.extname(target)) target += '.html';
      assert(fs.existsSync(path.join(root, target)), file + ': existing internal resource ' + url);
    }
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(schema['@graph'][1].url, canonical, file + ': structured page URL');
    assert.equal(schema['@graph'][1].inLanguage, lang, file + ': structured language');
    assert(html.includes('<noscript>'), file + ': visible content without JS');
  }
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const listed = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.deepEqual(listed.sort(), canonicalURLs.sort(), 'Sitemap matches all canonical pages');
assert(fs.readFileSync(path.join(root, 'robots.txt'), 'utf8').includes('https://www.akmin.info/sitemap.xml'));
assert(!js.includes('localStorage.getItem("akmin-lang")'), 'Saved language cannot override URL language');
assert(js.includes('img: null'), 'Targets & limits has no screenshot');
assert(!/tool-(sheet|report|settings)\.png/.test(js), 'No confidential screenshots');
assert(fs.readFileSync(path.join(root, 'assets/css/style.css'), 'utf8').includes('.main-nav a, .nav-cta { white-space: nowrap; }'), 'Preserve Turkish header fix');
console.log('PASS: 8 localized pages, approved translations, internal links, metadata, sitemap and confidentiality safeguards.');
