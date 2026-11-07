/* Akmin Industrial Minerals — main.js
   Language toggle (EN/TR), mobile nav, scroll reveal, contact form. */

const I18N = {
  en: {
    "nav.home": "Home",
    "nav.materials": "Materials",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    // Home
    "home.hero.kicker": "Industrial minerals · Çine, Aydın, Türkiye",
    "home.hero.title": "Feldspar and Quartz Supply for Industrial Manufacturers",
    "home.hero.sub": "Akmin combines mineral supply with applied technical know-how, supporting ceramic, glass and industrial manufacturers in formulation development, material performance and new applications.",
    "home.hero.cta1": "Discuss your requirements",
    "home.hero.cta2": "Explore materials",

    "home.materials.kicker": "Materials",
    "home.materials.title": "Consistent Quality, Reliable Supply.",
    "home.materials.sub": "Akmin focuses on the minerals it knows best: feldspar and quartz for ceramics, glass and industrial applications. Alongside supply, we continue to explore new uses through technical research, enrichment know-how and applied R&D.",
    "home.feldspar.title": "Feldspar",
    "home.feldspar.text": "A core flux for ceramic bodies and glazes, valued for its firing performance and alkali contribution.",
    "home.quartz.title": "Quartz",
    "home.quartz.text": "Reliable silica for ceramic, glass and industrial formulations where purity, sizing and controlled behavior are essential.",
    "home.learnmore": "Learn more →",

    "home.services.kicker": "What we do",
    "home.services.title": "From the quarry to your formulation.",
    "home.services.sub": "Four ways we support ceramic, glass and industrial manufacturers.",
    "svc.1.title": "Raw material supply",
    "svc.1.text": "Consistent feldspar and quartz, prepared for ceramic, glass and industrial requirements.",
    "svc.2.title": "Recipe & formulation support",
    "svc.2.text": "Practical guidance on ceramic and glass formulations, grounded in mineral behavior.",
    "svc.3.title": "Processing & enrichment",
    "svc.3.text": "Deep experience in beneficiation and flotation of Turkish feldspar ores.",
    "svc.4.title": "Applied R&D",
    "svc.4.text": "We test, develop and explore: pursuing new applications for feldspar and quartz beyond their traditional markets.",

    "home.about.kicker": "About Akmin",
    "home.about.title": "From market leadership to technical depth.",
    "home.about.p1": "Between 2001 and 2006, Akmin was Turkey's largest feldspar producer and exporter, in both volume and value. Today that operational experience is focused on what matters most to our clients: material consistency, enrichment expertise and formulation logic.",
    "home.about.btn": "Our story",

    "cta.title": "Let's talk about your next formulation.",
    "cta.sub": "You can contact us about raw material supply, formulation development and technical consultancy.",
    "cta.btn": "Contact us",

    // Materials page
    "mat.project.title": "Our latest project",
    "mat.project.text": "Akmin is now focused on its latest feldspar and quartz project: a large-scale deposit developed over more than ten years of geological, technical and enrichment work. The project aims to turn lower-grade feldspar resources into economically viable reserves, anticipating the long-term decline of high-quality feldspar deposits worldwide.",

    "mat.hero.kicker": "Materials",
    "mat.hero.title": "Feldspar and quartz, understood in depth.",
    "mat.hero.sub": "Feldspar and quartz are used mainly in the ceramic and glass industries, but they also have a wide range of applications in other sectors. Drawing on the technical knowledge we have built from producing and processing these minerals, Akmin develops raw material solutions tailored to our customers' needs. We also research new industrial uses for the by-products and waste materials generated during production.",



    "mat.apps.label": "Typical applications",
    "chip.bodies": "Ceramic bodies",
    "chip.tiles": "Tiles",
    "chip.sanitary": "Sanitaryware",
    "chip.glazes": "Glazes",
    "chip.glass": "Glass",
    "chip.industrial": "Industrial",
    "mat.datasheet.btn": "Request a technical data sheet",

    // About page
    "about.hero.kicker": "About us",
    "about.hero.title": "Rooted in one of the world's leading feldspar regions.",
    "about.hero.sub": "Akmin combines decades of experience in mineral development with technical expertise across feldspar exploration, processing and supply.",

    "about.story.kicker": "Our story",
    "about.story.title": "Four decades in Turkish feldspar.",
    "about.story.p1": "Akmin's roots go back to the early 1980s, alongside the development of Turkey's feldspar industry. Built on deep operational experience in flotation, beneficiation, production and export, the company grew into Turkey's largest feldspar producer and exporter between 2001 and 2006, both in terms of volume and value.",
    "about.story.p2": "Today, Akmin applies this experience across the feldspar and quartz value chain: combining technical research, enrichment know-how, ceramic formulation support and applied R&D to develop new applications for industrial minerals.",

    "about.values.kicker": "How we work",
    "about.values.text": "Akmin develops mineral solutions that are technically reliable, economically viable and environmentally responsible. Our priorities are consistent raw material quality, strong technical expertise and creating long-term value for our customers.",

    "about.timeline.kicker": "Milestones",
    "about.timeline.title": "From pioneers to mineral developers.",

    "tl.1.year": "Early 1980s",
    "tl.1.title": "Pioneering roots",
    "tl.1.text": "The team's feldspar experience dates back to the early 1980s in Çine, Aydın, one of Turkey's leading feldspar regions.",
    "tl.2.year": "First company",
    "tl.2.title": "Acquired by Sibelco",
    "tl.2.text": "The team's first operation was acquired by Sibelco Group.",
    "tl.3.year": "Second company",
    "tl.3.title": "Sold to a listed Turkish company",
    "tl.3.text": "The second company was later sold to a Turkish company listed on the Istanbul Stock Exchange.",
    "tl.4.year": "Today",
    "tl.4.title": "Long-term resource development",
    "tl.4.text": "Akmin is now focused on its latest feldspar and quartz project: a large-scale deposit developed over more than ten years of geological, technical and enrichment work. The project aims to turn lower-grade feldspar resources into economically viable reserves, anticipating the long-term decline of high-quality feldspar deposits worldwide.",

    "about.leader.kicker": "Leadership",
    "about.leader.title": "Hands-on expertise, direct technical involvement.",
    "about.leader.name": "Saffet Sever",
    "about.leader.role": "Founder",
    "about.leader.text": "With more than four decades of experience in feldspar production, beneficiation and export, Saffet Sever brings deep operational knowledge to Akmin's technical and commercial work. He remains directly involved in resource evaluation, enrichment studies and customer-specific mineral solutions.",
    "about.leader.btn": "LinkedIn profile",

    // Contact page
    "contact.hero.kicker": "Contact",
    "contact.hero.title": "Start a technical conversation.",
    "contact.hero.sub": "Tell us about your material requirements, formulation challenge or R&D question. By form, phone or email.",

    "contact.info.address.title": "Address",
    "contact.info.address.text": "Adnan Menderes Bulvarı 161/2, Şevketiye Mah., Çine / Aydın 09500, Türkiye",
    "contact.info.phone.title": "Phone",
    "contact.info.email.title": "Email",

    "form.name": "Name",
    "form.company": "Company",
    "form.email": "Email",
    "form.phone": "Phone (optional)",
    "form.interest": "Area of interest",
    "form.interest.feldspar": "Feldspar",
    "form.interest.quartz": "Quartz",
    "form.interest.datasheet": "Technical data sheet request",
    "form.interest.recipes": "Ceramic & glass recipes",
    "form.interest.rd": "R&D",
    "form.interest.other": "Other",
    "form.message": "Message",
    "form.submit": "Send message",
    "form.note": "Submitting opens your email client with the message pre-filled — nothing is stored on this site.",

    // Tool preview
    "tool.kicker": "In-house tools",
    "tool.title": "Recipe generation, powered by our own software.",
    "tool.sub": "A look inside the recipe assistant we develop and use in-house: it turns chemical targets, cost objectives and material limits into candidate ceramic and glass recipes.",
    "tool.note": "Previews of our internal tool are intentionally blurred. Material data, recipes and target values remain confidential.",

    // Footer
    "footer.tagline": "Feldspar, quartz and formulation expertise for ceramics, glass and industry.",
    "footer.pages": "Pages",
    "footer.contact": "Contact",
    "footer.linkedin": "LinkedIn",
    "footer.rights": "All rights reserved.",
  },

  tr: {
    "nav.home": "Ana Sayfa",
    "nav.materials": "Hammaddeler",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",
    "nav.cta": "İletişime geçin",

    "home.hero.kicker": "Endüstriyel mineraller · Çine, Aydın, Türkiye",
    "home.hero.title": "Endüstriyel üreticiler için feldspat ve kuvars tedariki",
    "home.hero.sub": "Akmin, mineral tedarikini uygulamalı teknik bilgiyle birleştirir; seramik, cam ve endüstriyel üreticilere reçete geliştirme, malzeme performansı ve yeni uygulamalar konusunda destek olur.",
    "home.hero.cta1": "İhtiyaçlarınızı görüşelim",
    "home.hero.cta2": "Hammaddeleri inceleyin",

    "home.materials.kicker": "Hammaddeler",
    "home.materials.title": "Tutarlı kalite, güvenilir tedarik.",
    "home.materials.sub": "Akmin, en iyi bildiği minerallere odaklanır: seramik, cam ve endüstriyel uygulamalar için feldspat ve kuvars. Tedarikin yanı sıra teknik araştırma, zenginleştirme bilgisi ve uygulamalı Ar-Ge ile yeni kullanım alanlarını keşfetmeye devam ediyoruz.",
    "home.feldspar.title": "Feldspat",
    "home.feldspar.text": "Seramik bünye ve sırların temel ergiticisi; pişirim performansı ve alkali katkısıyla öne çıkar.",
    "home.quartz.title": "Kuvars",
    "home.quartz.text": "Saflığın, tane boyutunun ve tutarlı davranışın kritik olduğu seramik, cam ve endüstriyel uygulamalar için güvenilir silika kaynağı.",
    "home.learnmore": "Detaylı bilgi →",

    "home.services.kicker": "Neler yapıyoruz",
    "home.services.title": "Ocaktan reçetenize kadar.",
    "home.services.sub": "Seramik, cam ve endüstri üreticilerine dört alanda destek veriyoruz.",
    "svc.1.title": "Hammadde tedariki",
    "svc.1.text": "Seramik, cam ve endüstri gereksinimlerine göre hazırlanmış, tutarlı feldspat ve kuvars.",
    "svc.2.title": "Reçete ve formülasyon desteği",
    "svc.2.text": "Mineral davranışını temel alan, seramik ve cam reçetelerine yönelik pratik destek.",
    "svc.3.title": "Zenginleştirme ve proses",
    "svc.3.text": "Türk feldspat cevherlerinin zenginleştirilmesi ve flotasyonunda derin deneyim.",
    "svc.4.title": "Uygulamalı Ar-Ge",
    "svc.4.text": "Test ediyor, geliştiriyor ve araştırıyoruz: feldspat ve kuvars için geleneksel pazarların ötesinde yeni uygulama alanları arıyoruz.",

    "home.about.kicker": "Akmin Hakkında",
    "home.about.title": "Pazar liderliğinden teknik derinliğe.",
    "home.about.p1": "Akmin, 2001–2006 yılları arasında hem hacim hem de değer bakımından Türkiye'nin en büyük feldspat üreticisi ve ihracatçısıydı. Bugün bu operasyonel deneyimi, müşterilerimiz için en önemli konulara odaklıyoruz: malzeme tutarlılığı, zenginleştirme uzmanlığı ve formülasyon bilgisi.",
    "home.about.btn": "Hikayemiz",

    "cta.title": "Yeni reçeteniz için konuşalım.",
    "cta.sub": "Hammadde tedariki, reçete geliştirme ve teknik danışmanlık konularında bizimle iletişime geçebilirsiniz.",
    "cta.btn": "Bize ulaşın",

    "mat.project.title": "En yeni projemiz",
    "mat.project.text": "Akmin bugün en yeni feldspat ve kuvars projesine odaklanıyor: on yılı aşkın jeolojik, teknik ve zenginleştirme çalışmasıyla geliştirilen büyük ölçekli bir yatak. Proje, dünya genelinde yüksek kaliteli feldspat yataklarının uzun vadede azalmasını öngörerek düşük tenörlü feldspat kaynaklarını ekonomik olarak işletilebilir rezervlere dönüştürmeyi hedefliyor.",

    "mat.hero.kicker": "Hammaddeler",
    "mat.hero.title": "Derinlemesine tanıdığımız iki mineral: feldspat ve kuvars.",
    "mat.hero.sub": "Feldspat ve kuvars, ağırlıklı olarak seramik ve cam sanayisinde kullanılsa da farklı endüstrilerde de geniş uygulama alanlarına sahiptir. Akmin olarak bu minerallerin üretiminden işlenmesine kadar edindiğimiz teknik bilgiyle, müşterilerimizin ihtiyaçlarına uygun hammadde çözümleri geliştiriyoruz. Aynı zamanda üretim sırasında ortaya çıkan yan ürünleri ve atık malzemeleri değerlendirerek bunlar için yeni endüstriyel kullanım alanları araştırıyoruz.",



    "mat.apps.label": "Tipik uygulamalar",
    "chip.bodies": "Seramik bünyeler",
    "chip.tiles": "Karo",
    "chip.sanitary": "Vitrifiye",
    "chip.glazes": "Sırlar",
    "chip.glass": "Cam",
    "chip.industrial": "Endüstriyel",
    "mat.datasheet.btn": "Teknik föy talep edin",

    "about.hero.kicker": "Hakkımızda",
    "about.hero.title": "Köklerimiz dünyanın önde gelen feldspat bölgelerinden birinde.",
    "about.hero.sub": "Akmin, onlarca yıllık maden geliştirme deneyimini feldspat arama, işleme ve tedarik alanlarındaki teknik uzmanlıkla birleştirir.",

    "about.story.kicker": "Hikayemiz",
    "about.story.title": "Türkiye feldspat sektöründe kırk yıl.",
    "about.story.p1": "Akmin'in kökleri, Türkiye feldspat sektörünün gelişimiyle birlikte 1980'lerin başına uzanır. Flotasyon, zenginleştirme, üretim ve ihracattaki derin operasyonel deneyim üzerine kurulan şirket, 2001–2006 yılları arasında hem hacim hem de değer bakımından Türkiye'nin en büyük feldspat üreticisi ve ihracatçısı oldu.",
    "about.story.p2": "Bugün Akmin bu deneyimi feldspat ve kuvars değer zincirinin tamamında uyguluyor: teknik araştırma, zenginleştirme bilgisi, seramik reçete desteği ve uygulamalı Ar-Ge'yi bir araya getirerek endüstriyel mineraller için yeni uygulamalar geliştiriyor.",

    "about.values.kicker": "Nasıl çalışıyoruz",
    "about.values.text": "Akmin, teknik açıdan güvenilir, ekonomik açıdan uygulanabilir ve çevresel sorumluluğu gözeten mineral çözümleri geliştirir. Önceliğimiz, tutarlı hammadde kalitesi, güçlü teknik bilgi birikimi ve müşterilerimiz için uzun vadeli değer yaratmaktır.",

    "about.timeline.kicker": "Kilometre taşları",
    "about.timeline.title": "Öncü yıllardan maden geliştirmeye.",

    "tl.1.year": "1980'lerin başı",
    "tl.1.title": "Öncü kökler",
    "tl.1.text": "Ekibin feldspat deneyimi, Türkiye'nin önde gelen feldspat bölgelerinden biri olan Çine, Aydın'da 1980'lerin başına uzanır.",
    "tl.2.year": "İlk şirket",
    "tl.2.title": "Sibelco tarafından satın alındı",
    "tl.2.text": "Ekibin ilk işletmesi Sibelco Grubu tarafından satın alındı.",
    "tl.3.year": "İkinci şirket",
    "tl.3.title": "Halka açık bir Türk şirketine satıldı",
    "tl.3.text": "İkinci şirket daha sonra Borsa İstanbul'da işlem gören bir Türk şirketine satıldı.",
    "tl.4.year": "Bugün",
    "tl.4.title": "Uzun vadeli kaynak geliştirme",
    "tl.4.text": "Akmin bugün en yeni feldspat ve kuvars projesine odaklanıyor: on yılı aşkın jeolojik, teknik ve zenginleştirme çalışmasıyla geliştirilen büyük ölçekli bir yatak. Proje, dünya genelinde yüksek kaliteli feldspat yataklarının uzun vadede azalmasını öngörerek düşük tenörlü feldspat kaynaklarını ekonomik olarak işletilebilir rezervlere dönüştürmeyi hedefliyor.",

    "about.leader.kicker": "Yönetim",
    "about.leader.title": "Sahadan gelen uzmanlık, doğrudan teknik katılım.",
    "about.leader.name": "Saffet Sever",
    "about.leader.role": "Kurucu",
    "about.leader.text": "Feldspat üretimi, zenginleştirme ve ihracatında kırk yılı aşkın deneyimiyle Saffet Sever, Akmin'in teknik ve ticari çalışmalarına derin bir operasyonel bilgi katıyor. Kaynak değerlendirme, zenginleştirme çalışmaları ve müşteriye özel mineral çözümlerinde doğrudan yer almaya devam ediyor.",
    "about.leader.btn": "LinkedIn profili",

    "contact.hero.kicker": "İletişim",
    "contact.hero.title": "Teknik bir görüşme başlatalım.",
    "contact.hero.sub": "Hammadde ihtiyacınızı, reçeteyle ilgili sorunuzu veya Ar-Ge talebinizi bize iletin. Form, telefon ya da e-posta ile.",

    "contact.info.address.title": "Adres",
    "contact.info.address.text": "Adnan Menderes Bulvarı 161/2, Şevketiye Mah., Çine / Aydın 09500, Türkiye",
    "contact.info.phone.title": "Telefon",
    "contact.info.email.title": "E-posta",

    "form.name": "Ad Soyad",
    "form.company": "Firma",
    "form.email": "E-posta",
    "form.phone": "Telefon (isteğe bağlı)",
    "form.interest": "İlgi alanı",
    "form.interest.feldspar": "Feldspat",
    "form.interest.quartz": "Kuvars",
    "form.interest.datasheet": "Teknik föy talebi",
    "form.interest.recipes": "Seramik ve cam reçeteleri",
    "form.interest.rd": "Ar-Ge",
    "form.interest.other": "Diğer",
    "form.message": "Mesaj",
    "form.submit": "Mesaj gönder",
    "form.note": "Gönder'e bastığınızda e-posta uygulamanız mesajınız hazır şekilde açılır; bu sitede hiçbir veri saklanmaz.",

    "tool.kicker": "Kurum içi araçlar",
    "tool.title": "Kendi yazılımımızla reçete geliştirme.",
    "tool.sub": "Kurum içinde geliştirip kullandığımız reçete asistanına bir bakış: kimyasal hedefleri, maliyet hedefini ve malzeme sınırlarını aday seramik ve cam reçetelerine dönüştürür.",
    "tool.note": "Kurum içi aracımızın görüntüleri bilinçli olarak bulanıklaştırılmıştır. Malzeme verileri, reçeteler ve hedef değerleri gizli tutulur.",

    "footer.tagline": "Seramik, cam ve endüstri için feldspat, kuvars ve reçete uzmanlığı.",
    "footer.pages": "Sayfalar",
    "footer.contact": "İletişim",
    "footer.linkedin": "LinkedIn",
    "footer.rights": "Tüm hakları saklıdır.",
  },
};

/* Recipe-tool preview. The images are low-resolution, blurred copies of
   our internal tool: no material data or values can be recovered from them.
   The "Targets & limits" tab intentionally has no image. */
const TOOL_SHOTS = [
  {
    id: "sheet",
    img: "/assets/img/tool-sheet-preview.jpg",
    tab: { en: "Formulation sheet", tr: "Reçete sayfası" },
    caption: {
      en: "Every material's oxide and mineral analysis in one live sheet. Percentages, totals and cost recalculate instantly as the blend changes.",
      tr: "Tüm malzemelerin oksit ve mineral analizleri tek canlı tabloda. Yüzdeler, toplamlar ve maliyet, harman değiştikçe anında yeniden hesaplanır.",
    },
  },
  {
    id: "report",
    img: "/assets/img/tool-report-preview.jpg",
    tab: { en: "Target control", tr: "Hedef kontrolü" },
    caption: {
      en: "Every generated recipe is checked against its chemical targets and any deviation is flagged openly. Target values are hidden — they are part of our know-how.",
      tr: "Üretilen her reçete kimyasal hedeflerle karşılaştırılır ve her sapma açıkça işaretlenir. Hedef değerleri gizlidir — bunlar bilgi birikimimizin parçasıdır.",
    },
  },
  {
    id: "settings",
    img: null,
    tab: { en: "Targets & limits", tr: "Hedefler ve sınırlar" },
    caption: {
      en: "Chemical targets, a cost objective and per-material limits steer recipe generation. The values stay hidden; the capability doesn't.",
      tr: "Kimyasal hedefler, maliyet hedefi ve malzeme bazlı sınırlar reçete üretimini yönlendirir. Değerler gizli kalır; yetkinlik ortada.",
    },
  },
];

let demoActive = "sheet";

function renderDemo(lang) {
  const tabs = document.querySelector("#demo-tabs");
  const stage = document.querySelector("#demo-stage");
  if (!tabs || !stage) return;

  const shot = TOOL_SHOTS.find((s) => s.id === demoActive) || TOOL_SHOTS[0];

  tabs.innerHTML = "";
  TOOL_SHOTS.forEach((s) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "demo-tab" + (s.id === demoActive ? " active" : "");
    btn.textContent = s.tab[lang] || s.tab.en;
    btn.addEventListener("click", () => {
      demoActive = s.id;
      renderDemo(document.documentElement.lang || "en");
    });
    tabs.appendChild(btn);
  });

  const label = shot.tab[lang] || shot.tab.en;
  stage.innerHTML =
    '<p class="demo-caption"><strong>' + label + " — </strong>" + (shot.caption[lang] || shot.caption.en) + "</p>" +
    (shot.img
      ? '<div class="demo-shot"><img src="' + shot.img + '" alt="' + label + ' (blurred preview)" loading="lazy" style="width: 100%; max-width: 900px; filter: blur(3px); transform: scale(1.01);" /></div>'
      : "");
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll(".lang-toggle [data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  renderDemo(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // Language
  // The URL selects the language, so each version stays indexable and shareable.
  const lang = document.documentElement.lang === "tr" ? "tr" : "en";
  applyLang(lang);
  document.querySelectorAll(".lang-toggle a").forEach((link) => {
    const target = new URL(link.href);
    target.search = window.location.search;
    target.hash = window.location.hash;
    link.href = target.href;
  });

  // Mobile nav
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".main-nav");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Contact form → opens the user's email client (no backend needed)
  const form = document.querySelector("#contact-form");
  if (form) {
    // Links like contact.html?topic=datasheet preselect the area of interest
    const topic = new URLSearchParams(window.location.search).get("topic");
    const select = form.querySelector("#cf-interest");
    if (topic === "datasheet" && select) select.value = "Technical data sheet request";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = `Akmin website inquiry — ${data.get("interest")} (${data.get("company") || data.get("name")})`;
      const body = [
        `Name: ${data.get("name")}`,
        `Company: ${data.get("company")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "-"}`,
        `Area of interest: ${data.get("interest")}`,
        "",
        data.get("message"),
      ].join("\n");
      window.location.href =
        "mailto:akmin@akminmaden.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
});
