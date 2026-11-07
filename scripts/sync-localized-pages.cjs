// Maintenance only: run after copy changes. Vercel serves the saved HTML without a build.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const js = fs.readFileSync(path.join(root, 'assets/js/main.js'), 'utf8');
const dictionaries = vm.runInNewContext(js.slice(0, js.indexOf('/* Recipe-tool preview')) + '; I18N');
const origin = 'https://www.akmin.info';
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pages = {
  index: {
    en: ['Feldspar & Quartz Supplier in Türkiye | Akmin Minerals', 'Feldspar and quartz supply from Çine, Aydın, with technical expertise in mineral processing, formulation development and industrial applications.'],
    tr: ['Feldspat ve Kuvars Tedariki | Akmin Endüstriyel Mineraller', 'Çine, Aydın’dan feldspat ve kuvars tedariki. Akmin, mineral işleme, reçete geliştirme ve endüstriyel uygulamalarda teknik bilgi ve deneyim sunar.'],
  },
  materials: {
    en: ['Feldspar & Quartz Supply and Development | Akmin', 'Explore Akmin’s feldspar and quartz expertise, raw material solutions and latest mineral resource development project in Çine, Türkiye.'],
    tr: ['Hammaddeler ve Proje Geliştirme | Akmin', 'Akmin’in feldspat ve kuvars alanındaki uzmanlığını, hammadde çözümlerini ve Çine’deki en yeni kaynak geliştirme projesini inceleyin.'],
  },
  about: {
    en: ['About Akmin | Turkish Feldspar & Quartz Expertise', 'Discover Akmin’s four decades of experience in Turkish feldspar, mineral processing, export and long-term feldspar and quartz resource development.'],
    tr: ['Hakkımızda | Akmin Endüstriyel Mineraller', 'Akmin’in Türkiye feldspat sektöründeki kırk yıllık deneyimini, mineral işleme, ihracat ve uzun vadeli kaynak geliştirme çalışmalarını tanıyın.'],
  },
  contact: {
    en: ['Contact Akmin | Feldspar & Quartz Supply Enquiries', 'Contact Akmin in Çine, Aydın about feldspar and quartz supply, formulation development and technical consultancy. Call +90 (256) 711 07 21.'],
    tr: ['İletişim | Akmin Feldspat ve Kuvars', 'Feldspat ve kuvars tedariki, reçete geliştirme ve teknik danışmanlık için Çine, Aydın’daki Akmin ile iletişime geçin. Telefon: +90 (256) 711 07 21.'],
  },
};
const route = (page, lang) => (lang === 'tr' ? '/tr' : '') + (page === 'index' ? (lang === 'tr' ? '' : '/') : '/' + page);
function render(source, page, lang) {
  let html = source.replace(/<html lang="[^"]+">/, `<html lang="${lang}">`);
  html = html.replace(/<(\w+)\b([^>]*\bdata-i18n="([^"]+)"[^>]*)>[\s\S]*?<\/\1>/g, (_, tag, attrs, key) => {
    if (!(key in dictionaries[lang])) throw new Error('Missing translation: ' + lang + ':' + key);
    return `<${tag}${attrs}>${escape(dictionaries[lang][key])}</${tag}>`;
  });
  html = html.replace(/\b(src|href)="(?:\/?assets\/)([^"]+)"/g, '$1="/assets/$2"').replace(/url\('\/?assets\//g, "url('/assets/");
  // Root HTML is the source; normalize either the original file links or clean URLs.
  html = html.replace(/href="(?:\/?)(index|materials|about|contact)\.html([?#][^"]*)?"/g, (_, p, suffix = '') => `href="${route(p, lang)}${suffix}"`);
  if (lang === 'tr') html = html.replace(/href="(\/|\/materials|\/about|\/contact)([?#][^"]*)?"/g, (_, p, suffix = '') => `href="/tr${p === '/' ? '' : p}${suffix}"`);
  html = html.replace(/<div class="lang-toggle"[^>]*>[\s\S]*?<\/div>/, `<div class="lang-toggle" role="group" aria-label="${lang === 'tr' ? 'Dil' : 'Language'}">
          <a href="${route(page, 'en')}" data-lang="en" lang="en" hreflang="en"${lang === 'en' ? ' class="active" aria-current="page"' : ''}>EN</a>
          <a href="${route(page, 'tr')}" data-lang="tr" lang="tr" hreflang="tr"${lang === 'tr' ? ' class="active" aria-current="page"' : ''}>TR</a>
        </div>`);
  const [title, description] = pages[page][lang];
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${escape(description)}" />`);
  html = html.replace(/^\s*<meta property="og:[^\n]+\n/gm, '\n');
  html = html.replace(/\n  <!-- SEO metadata -->[\s\S]*?<!-- End SEO metadata -->\n/, '\n');
  const url = origin + route(page, lang);
  const org = { '@type': 'Organization', '@id': origin + '/#organization', name: 'Akmin Industrial Minerals', url: origin + '/', sameAs: ['https://www.linkedin.com/company/akmin-industrial-minerals/'], email: 'akmin@akminmaden.com', telephone: '+90-256-711-07-21', address: { '@type': 'PostalAddress', streetAddress: 'Adnan Menderes Bulvarı 161/2, Şevketiye Mah.', addressLocality: 'Çine', addressRegion: 'Aydın', postalCode: '09500', addressCountry: 'TR' } };
  const graph = [org, { '@type': 'WebPage', '@id': url + '#webpage', url, name: title, description, inLanguage: lang, about: { '@id': org['@id'] } }];
  const metadata = `
  <!-- SEO metadata -->
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${origin + route(page, 'en')}" />
  <link rel="alternate" hreflang="tr" href="${origin + route(page, 'tr')}" />
  <link rel="alternate" hreflang="x-default" href="${origin + route(page, 'en')}" />
  <meta property="og:title" content="${escape(title)}" />
  <meta property="og:description" content="${escape(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${origin}/assets/img/hero-stockpile.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="${lang === 'tr' ? 'tr_TR' : 'en_US'}" />
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>
  <!-- End SEO metadata -->
`;
  html = html.replace('</head>', metadata + '</head>');
  // Reveal animations must not hide the content when JavaScript is unavailable.
  html = html.replace(/\n  <noscript>[\s\S]*?<\/noscript>\n/, '\n');
  html = html.replace('</head>', '  <noscript><style>.reveal { opacity: 1; transform: none; }</style></noscript>\n</head>');
  return html.replace(/\n{3,}/g, '\n\n');
}
fs.mkdirSync(path.join(root, 'tr'), { recursive: true });
for (const page of Object.keys(pages)) {
  const source = fs.readFileSync(path.join(root, page + '.html'), 'utf8');
  fs.writeFileSync(path.join(root, page + '.html'), render(source, page, 'en'));
  fs.writeFileSync(path.join(root, 'tr', page + '.html'), render(source, page, 'tr'));
}
const urls = Object.keys(pages).flatMap(page => ['en', 'tr'].map(lang => origin + route(page, lang)));
fs.writeFileSync(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log('Updated EN/TR HTML, canonical URLs, hreflang, structured data, sitemap and robots.txt.');
