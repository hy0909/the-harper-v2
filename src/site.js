/* THE HARPER v2 — Site JavaScript */

// 번역. 글은 기존 홈페이지(hy0909/the-harper)의 카피를 그대로 쓰고,
// 새 구성에만 필요한 문장(about-statement, stat-*, hero-kicker 등)을 더했다.
const translations = {
  ko: {
    'site-title': '더하퍼 — K-패션 에디터 큐레이션, 서울',
    'nav-about': 'About',
    'nav-spots': 'Spots',
    'nav-process': 'Process',
    'nav-area': 'Area',
    'nav-partners': 'Partners',
    'nav-contact': 'Contact',
    'header-cta': '협업 문의',
    'hero-headline-2': 'Curated by Editors',
    'hero-subcopy': 'K-패션 에디터가 큐레이션하는 성수·한남·압구정 쇼핑 체험',
    'hero-cta': '인스타그램 큐레이션 보기',
    'hero-kicker': 'K-Fashion Editor Curation',
    'hero-edition': 'Seoul · 2026',
    'section-about': 'About',
    'section-spots': 'Spots',
    'section-process': 'Curation Process',
    'section-area': 'Focus Area',
    'section-partners': 'Partners',
    'section-contact': 'Contact',
    'about-statement': 'THE HARPER는 <em>K-패션 에디터</em>가 큐레이션하는 성수·한남·압구정 쇼핑 체험입니다.',
    'about-aside': '서울 현지 주민들이 옷을 사는 동네 위주로, 에디터가 직접 엄선한 매장을 소개합니다.',
    'stat-1-label': 'Focus Area',
    'stat-1-desc': '성수 · 한남 · 압구정',
    'stat-2-label': 'Tiers',
    'stat-2-desc': 'DISCOVER부터 BESPOKE까지',
    'stat-3-label': 'Process',
    'stat-3-desc': '발굴에서 노출까지 네 단계',
    'stat-4-label': 'Languages',
    'stat-4-desc': '관광객 언어로 소통',
    'about-value-1-title': '에디터 큐레이션',
    'about-value-1-desc': '에디터가 직접 엄선한 매장 추천',
    'about-value-2-title': '로컬 발견',
    'about-value-2-desc': '서울 현지 주민들이 옷을 사는 동네 위주',
    'about-value-3-title': '다국어 경험',
    'about-value-3-desc': '관광객 언어로 소통',
    'about-value-4-title': '브랜드 파트너십',
    'about-value-4-desc': '한국에만 있는 브랜드와의 협업',
    'spots-statement': '패션 에디터가 소개하는<br><em>K-패션 스팟</em>',
    'tier-discover-title': 'DISCOVER',
    'tier-discover-desc': '무료 디지털 매거진',
    'tier-daydrop-title': 'DAY DROP',
    'tier-daydrop-desc': '반나절 단품 큐레이션',
    'tier-capsule-title': 'CAPSULE',
    'tier-capsule-desc': '종일 1:1 큐레이션',
    'tier-signature-title': 'SIGNATURE',
    'tier-signature-desc': '1박 헤리티지 투어',
    'tier-bespoke-title': 'BESPOKE',
    'tier-bespoke-desc': 'VIP 맞춤 투어',
    'tier-badge-pick': '11월 오픈',
    'tier-badge-coming': '추후 공개',
    'picks-title': '에디터 픽',
    'picks-instagram': '인스타그램에서 모두 보기',
    'picks-byline': 'by THE HARPER Editors',
    'picks-filter-all': '전체',
    'picks-filter-seongsu': '성수',
    'picks-filter-hannam': '한남',
    'picks-filter-apgujeong': '압구정',
    'picks-card-1-area': '성수',
    'picks-card-1-title': '성수 골목의 컨템포러리 편집샵',
    'picks-card-2-area': '성수',
    'picks-card-2-title': '붉은 벽돌 창고를 고친 브랜드 쇼룸',
    'picks-card-3-area': '한남',
    'picks-card-3-title': '한남 언덕의 조용한 부티크',
    'picks-card-4-area': '한남',
    'picks-card-4-title': '빈티지와 신상을 같이 두는 편집샵',
    'picks-card-5-area': '압구정',
    'picks-card-5-title': '로데오 뒷길의 디자이너 스튜디오',
    'process-statement': '발굴에서 노출까지,<br>에디터가 <em>직접</em> 거치는 네 단계',
    'process-step-1-label': '1단계',
    'process-step-2-label': '2단계',
    'process-step-3-label': '3단계',
    'process-step-4-label': '4단계',
    'process-step-1-title': '발굴',
    'process-step-2-title': '검증',
    'process-step-3-title': '에디토리얼 제작',
    'process-step-4-title': '큐레이션 노출',
    'area-headline': '성수·한남·압구정',
    'area-desc': '서울에서 로컬 부티크가 가장 밀집한 세 지역을 중심으로, 에디터가 직접 추천하는 리얼 K-패션 스팟을 소개합니다.',
    'area-card-seongsu-title': '성수',
    'area-card-seongsu-desc': '공장 골목이 브랜드 거리가 된 동네',
    'area-card-hannam-title': '한남',
    'area-card-hannam-desc': '언덕길에 부티크가 숨어 있는 동네',
    'area-card-apgujeong-title': '압구정',
    'area-card-apgujeong-desc': '디자이너 스튜디오와 플래그십의 동네',
    'area-map-aria-label': '성수·한남·압구정 지도',
    'map-seongsu': '성수',
    'map-hannam': '한남',
    'map-apgujeong': '압구정',
    'partners-headline': '파트너',
    'coming-soon': 'Coming Soon',
    'contact-headline': '협업 문의',
    'contact-instagram': '인스타그램',
    'contact-email': '이메일 문의',
    'form-label-name': '성함',
    'form-label-email': '이메일',
    'form-label-type': '문의유형',
    'form-label-message': '문의 내용',
    'form-placeholder-name': '성함을 입력해 주세요',
    'form-placeholder-email': '이메일 주소를 입력해 주세요',
    'form-placeholder-message': '문의 내용을 입력해 주세요',
    'form-option-investment': '투자 문의',
    'form-option-partnership': '파트너십 문의',
    'form-option-institutional': '기관·관광공사 협업 문의',
    'form-option-other': '기타',
    'form-submit': '보내기',
    'form-sending': '보내는 중…',
    'form-success': '문의가 접수됐습니다. 영업일 기준 2일 안에 답장드리겠습니다.',
    'form-fallback': '자동 발송에 실패해 메일 앱을 엽니다. 열리지 않으면 contact@theharper.co.kr 로 직접 보내 주세요.',
    'footer-menu': 'Menu',
    'footer-social': 'Social',
    'footer-info': 'THE HARPER Co., Ltd. · 서울특별시 서초구 · 사업자등록번호 000-00-00000 · hello@theharper.co.kr',
    'footer-copyright': '© 2026 THE HARPER',
  },
  en: {
    'site-title': 'THE HARPER — K-fashion editor curation, Seoul',
    'nav-about': 'About',
    'nav-spots': 'Spots',
    'nav-process': 'Process',
    'nav-area': 'Area',
    'nav-partners': 'Partners',
    'nav-contact': 'Contact',
    'header-cta': 'Partner with us',
    'hero-headline-2': 'Curated by Editors',
    'hero-subcopy': 'A K-fashion shopping experience curated by editors across Seongsu, Hannam & Apgujeong',
    'hero-cta': 'See our curation on Instagram',
    'hero-kicker': 'K-Fashion Editor Curation',
    'hero-edition': 'Seoul · 2026',
    'section-about': 'About',
    'section-spots': 'Spots',
    'section-process': 'Curation Process',
    'section-area': 'Focus Area',
    'section-partners': 'Partners',
    'section-contact': 'Contact',
    'about-statement': 'THE HARPER is a K-fashion shopping experience <em>curated by editors</em> across Seongsu, Hannam and Apgujeong.',
    'about-aside': 'We focus on the neighborhoods where Seoul locals shop, and introduce shops hand-picked by our editors.',
    'stat-1-label': 'Focus Area',
    'stat-1-desc': 'Seongsu · Hannam · Apgujeong',
    'stat-2-label': 'Tiers',
    'stat-2-desc': 'From DISCOVER to BESPOKE',
    'stat-3-label': 'Process',
    'stat-3-desc': 'Four steps from scouting to publishing',
    'stat-4-label': 'Languages',
    'stat-4-desc': 'In the visitor\'s own language',
    'about-value-1-title': 'Editor Curation',
    'about-value-1-desc': 'Shops hand-picked by our editors',
    'about-value-2-title': 'Local Discovery',
    'about-value-2-desc': 'Focused on the neighborhoods where Seoul locals shop',
    'about-value-3-title': 'Multilingual Experience',
    'about-value-3-desc': 'Communication in the visitor\'s own language',
    'about-value-4-title': 'Brand Partnerships',
    'about-value-4-desc': 'Collaborations with brands found only in Korea',
    'spots-statement': 'K-fashion spots<br><em>hand-picked by our editors</em>',
    'tier-discover-title': 'DISCOVER',
    'tier-discover-desc': 'Free digital magazine',
    'tier-daydrop-title': 'DAY DROP',
    'tier-daydrop-desc': 'Half-day single curation',
    'tier-capsule-title': 'CAPSULE',
    'tier-capsule-desc': 'Full-day 1:1 curation',
    'tier-signature-title': 'SIGNATURE',
    'tier-signature-desc': 'Overnight heritage tour',
    'tier-bespoke-title': 'BESPOKE',
    'tier-bespoke-desc': 'VIP bespoke tour',
    'tier-badge-pick': 'Opens in Nov',
    'tier-badge-coming': 'Coming soon',
    'picks-title': 'Editor\'s Picks',
    'picks-instagram': 'See all on Instagram',
    'picks-byline': 'by THE HARPER Editors',
    'picks-filter-all': 'All',
    'picks-filter-seongsu': 'Seongsu',
    'picks-filter-hannam': 'Hannam',
    'picks-filter-apgujeong': 'Apgujeong',
    'picks-card-1-area': 'Seongsu',
    'picks-card-1-title': 'A contemporary select shop in the Seongsu backstreets',
    'picks-card-2-area': 'Seongsu',
    'picks-card-2-title': 'A brand showroom in a converted red-brick warehouse',
    'picks-card-3-area': 'Hannam',
    'picks-card-3-title': 'A quiet boutique on the Hannam hill',
    'picks-card-4-area': 'Hannam',
    'picks-card-4-title': 'Where vintage sits next to new arrivals',
    'picks-card-5-area': 'Apgujeong',
    'picks-card-5-title': 'A designer studio behind Rodeo street',
    'process-statement': 'From scouting to publishing,<br>four steps our editors take <em>themselves</em>',
    'process-step-1-label': 'Step 1',
    'process-step-2-label': 'Step 2',
    'process-step-3-label': 'Step 3',
    'process-step-4-label': 'Step 4',
    'process-step-1-title': 'Scouting',
    'process-step-2-title': 'Verification',
    'process-step-3-title': 'Editorial',
    'process-step-4-title': 'Publishing',
    'area-headline': 'Seongsu·Hannam·Apgujeong',
    'area-desc': 'Centered on the three districts with Seoul\'s densest concentration of local boutiques, we introduce real K-fashion spots recommended by our editors.',
    'area-card-seongsu-title': 'Seongsu',
    'area-card-seongsu-desc': 'Factory alleys turned brand streets',
    'area-card-hannam-title': 'Hannam',
    'area-card-hannam-desc': 'Boutiques hidden along the hillside lanes',
    'area-card-apgujeong-title': 'Apgujeong',
    'area-card-apgujeong-desc': 'Designer studios and flagship stores',
    'area-map-aria-label': 'Map of Seongsu, Hannam and Apgujeong',
    'map-seongsu': 'Seongsu',
    'map-hannam': 'Hannam',
    'map-apgujeong': 'Apgujeong',
    'partners-headline': 'Partners',
    'coming-soon': 'Coming Soon',
    'contact-headline': 'Work With Us',
    'contact-instagram': 'Instagram',
    'contact-email': 'Email us',
    'form-label-name': 'Name',
    'form-label-email': 'Email',
    'form-label-type': 'Inquiry type',
    'form-label-message': 'Inquiry details',
    'form-placeholder-name': 'Enter your name',
    'form-placeholder-email': 'Enter your email address',
    'form-placeholder-message': 'Enter your inquiry',
    'form-option-investment': 'Investment',
    'form-option-partnership': 'Partnership',
    'form-option-institutional': 'Institutional & KTO collaboration',
    'form-option-other': 'Other',
    'form-submit': 'Send',
    'form-sending': 'Sending…',
    'form-success': 'Thanks, we received your inquiry. We reply within 2 business days.',
    'form-fallback': 'Automatic sending failed, so we are opening your mail app. If it does not open, email contact@theharper.co.kr directly.',
    'footer-menu': 'Menu',
    'footer-social': 'Social',
    'footer-info': 'THE HARPER Co., Ltd. · Seocho-gu, Seoul · Business Reg. No. 000-00-00000 · hello@theharper.co.kr',
    'footer-copyright': '© 2026 THE HARPER',
  }
};

// ---------- 언어 ----------
function getCurrentLanguage() {
  try {
    const stored = localStorage.getItem('theharper-lang');
    if (stored === 'ko' || stored === 'en') return stored;
  } catch (e) { /* localStorage 사용 불가 */ }
  return 'ko';
}

function setLanguage(lang) {
  try { localStorage.setItem('theharper-lang', lang); } catch (e) { /* 무시 */ }
  document.documentElement.lang = lang;
  updatePageTranslations(lang);
  updateLanguageToggleButtons(lang);
  updateMapPopupLanguage();
  updateMapAriaLabel(lang);
}

function updatePageTranslations(lang) {
  const dict = translations[lang] || translations.ko;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // 강조(<em>)나 줄바꿈(<br>)이 들어간 문장. 값은 이 파일 안의 고정 문자열만 쓴다.
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
}

function updateLanguageToggleButtons(lang) {
  document.querySelectorAll('.lang-toggle__button').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
  });
}

function initLanguageToggle() {
  const currentLang = getCurrentLanguage();
  document.documentElement.lang = currentLang;
  updatePageTranslations(currentLang);
  updateLanguageToggleButtons(currentLang);
  updateMapAriaLabel(currentLang);

  document.querySelectorAll('.lang-toggle__button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
}

// ---------- 헤더 ----------
// 히어로 안에서는 투명, 히어로를 지나면 잉크 바탕 + 블러
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const hero = document.getElementById('hero');
  if (!header) return;
  let isScrolled = false;
  let raf = null;

  const update = () => {
    const threshold = hero ? Math.max(hero.offsetTop + hero.offsetHeight - header.offsetHeight, 8) : 8;
    const next = window.scrollY >= threshold;
    if (next !== isScrolled) {
      isScrolled = next;
      header.classList.toggle('scrolled', isScrolled);
    }
    raf = null;
  };
  const onScroll = () => { if (raf === null) raf = requestAnimationFrame(update); };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

// ---------- 모바일 메뉴 ----------
function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const header = document.querySelector('.header');
  if (!toggle || !menu) return;

  const open = () => {
    menu.removeAttribute('hidden');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', '메뉴 닫기');
    header.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    menu.setAttribute('hidden', '');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
    header.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close();
  });
  // 데스크톱 폭으로 넓어지면 닫는다
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000 && toggle.getAttribute('aria-expanded') === 'true') close();
  });
}

// ---------- 문의 폼 ----------
// FormSubmit(무료, 키 불필요)로 contact@theharper.co.kr 에 자동 발송한다.
// 첫 발송 뒤 받는 메일함으로 오는 활성화 메일에서 한 번 승인해야 그 뒤부터 도착한다.
const CONTACT_EMAIL = 'contact@theharper.co.kr';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + CONTACT_EMAIL;

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const confirmation = document.getElementById('form-confirmation');
  const submitBtn = form.querySelector('.form__submit');

  const showStatus = (key, isError) => {
    const lang = getCurrentLanguage();
    confirmation.textContent = translations[lang][key] || key;
    confirmation.classList.toggle('form__confirmation--error', !!isError);
    confirmation.hidden = false;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const type = document.getElementById('contact-type').value;
    const message = document.getElementById('contact-message').value.trim();
    const honey = form.querySelector('input[name="_honey"]');

    if (!name || !email || !message) return;
    if (honey && honey.value) return; // 스팸 봇이 채운 경우 조용히 무시

    const lang = getCurrentLanguage();
    const typeLabel = translations[lang]['form-option-' + type] || type;
    const subject = `[홈페이지 문의] ${typeLabel} - ${name}`;
    const body = `성함: ${name}\n이메일: ${email}\n문의유형: ${typeLabel}\n\n문의 내용:\n${message}`;

    if (submitBtn) submitBtn.disabled = true;
    showStatus('form-sending', false);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          _captcha: 'false',
          _template: 'table',
          성함: name,
          이메일: email,
          문의유형: typeLabel,
          '문의 내용': message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error('formsubmit failed');
      showStatus('form-success', false);
      form.reset();
    } catch (err) {
      // 자동 발송이 안 되면 메일 앱으로 대신 보낸다.
      showStatus('form-fallback', true);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// ---------- 스크롤 등장 ----------
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => io.observe(el));
}

// ---------- 에디터 픽 필터 ----------
function initPicksFilter() {
  const tabs = document.querySelectorAll('.picks__tab');
  const cards = document.querySelectorAll('.pick');
  if (!tabs.length) return;

  const apply = (area) => {
    cards.forEach(card => {
      const show = area === 'all' || card.dataset.area === area || card.dataset.area === 'all';
      if (show) {
        card.removeAttribute('hidden');
        card.classList.add('is-in');
      } else {
        card.setAttribute('hidden', '');
      }
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('picks__tab--active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      apply(tab.dataset.filter);
    });
    tab.addEventListener('keydown', (e) => {
      let target = index;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); target = (index + 1) % tabs.length; }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); target = (index - 1 + tabs.length) % tabs.length; }
      if (target !== index) { tabs[target].click(); tabs[target].focus(); }
    });
  });
}

// ---------- 지도 ----------
let mapInstance = null;
let mapMarkers = [];

function updateMapAriaLabel(lang) {
  const el = document.getElementById('area-map');
  if (!el) return;
  el.setAttribute('aria-label', translations[lang]['area-map-aria-label'] || 'Map');
}

function initMap() {
  const container = document.getElementById('area-map');
  if (!container) return;

  if (typeof L === 'undefined') {
    const lang = getCurrentLanguage();
    const text = lang === 'ko' ? '지도 열기' : 'Open map';
    container.innerHTML = `<a href="https://www.openstreetmap.org/#map=14/37.5400/127.0300" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:underline;color:var(--color-ink);">${text}</a>`;
    return;
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  mapInstance = L.map('area-map', {
    center: [37.536, 127.020],
    zoom: 13,
    scrollWheelZoom: false,
    zoomAnimation: !reduce,
    fadeAnimation: !reduce,
    attributionControl: true
  });

  // 타일: OpenStreetMap 표준 타일(무료, 키 불필요). CARTO 무료 타일은 2026년부터 API 키가 없으면
  // 'API KEY REQUIRED' 워터마크가 찍혀 쓰지 않는다. 타일을 못 받으면 지도 대신 OSM 링크를 보여 준다.
  const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });
  let errors = 0;
  osm.on('tileerror', () => {
    errors += 1;
    if (errors >= 6 && mapInstance) {
      const lang = getCurrentLanguage();
      const text = lang === 'ko' ? '지도 열기' : 'Open map';
      mapInstance.remove();
      mapInstance = null;
      mapMarkers = [];
      container.innerHTML = `<a class="area-map__fallback" href="https://www.openstreetmap.org/#map=14/37.5400/127.0300" target="_blank" rel="noopener">${text}</a>`;
    }
  });
  osm.addTo(mapInstance);
  mapInstance.zoomControl.setPosition('bottomright');

  const points = [
    { lat: 37.5445, lng: 127.0560, key: 'map-seongsu' },
    { lat: 37.5340, lng: 127.0000, key: 'map-hannam' },
    { lat: 37.5270, lng: 127.0280, key: 'map-apgujeong' }
  ];
  points.forEach(p => {
    const icon = L.divIcon({ html: '<div class="map-marker"></div>', iconSize: [14, 14], className: 'map-marker-wrapper' });
    const marker = L.marker([p.lat, p.lng], { icon })
      .bindPopup(translations[getCurrentLanguage()][p.key] || p.key, { className: 'map-popup', closeButton: true })
      .addTo(mapInstance);
    mapMarkers.push({ marker, key: p.key });
  });
}

function updateMapPopupLanguage() {
  mapMarkers.forEach(item => {
    item.marker.setPopupContent(translations[getCurrentLanguage()][item.key] || item.key);
  });
}

// ---------- 시작 ----------
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initHeaderScroll();
  initMobileMenu();
  initContactForm();
  initReveal();
  initPicksFilter();
  initMap();
});

if (typeof L === 'undefined') {
  window.addEventListener('load', () => {
    if (typeof L !== 'undefined' && !mapInstance) initMap();
  });
}
