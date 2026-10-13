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
    'hero-title': 'K-패션 에디터가 큐레이션하는<br>성수·한남·압구정 쇼핑 체험',
    'hero-cta': '인스타그램 큐레이션 보기',
    'hero-kicker': 'K-Fashion Editor Curation',
    'hero-edition': 'Seoul · 2026',
    'hero-image-src': 'src/assets/hero-app-rose-logo-1280.webp',
    'hero-image-srcset': 'src/assets/hero-app-rose-logo-640.webp 640w, src/assets/hero-app-rose-logo-1280.webp 1280w, src/assets/hero-app-rose-logo-2048.webp 2048w',
    'hero-image-alt': '나무 테이블 위 휴대전화에 갈색 헤더와 분홍 로고, 에디터 사진, 하단 탭이 있는 THE HARPER 앱 홈 화면',
    'section-about': 'About',
    'section-spots': 'Spots',
    'section-process': 'Curation Process',
    'section-area': 'Focus Area',
    'section-partners': 'Partners',
    'section-contact': 'Contact',
    'about-statement': '옷 좋아하는 한국사람들이 <em>진짜 찾는</em> <br class="br-pc">K-⁠패션을 소개합니다.',
    'about-aside': '한국의 패션 피플들이 선호하는 브랜드 중, 에디터가 직접 엄선한 매장을 소개합니다.',
    'about-value-1-title': '에디터 큐레이션',
    'about-value-1-desc': '에디터가 직접 엄선한 매장 추천',
    'about-value-2-title': '로컬 발견',
    'about-value-2-desc': '서울 패션 피플들이 방문하는 지역 위주',
    'about-value-3-title': '다국어 경험',
    'about-value-3-desc': '관광객 언어로 소통',
    'about-value-4-title': '브랜드 파트너십',
    'about-value-4-desc': '한국에만 있는 브랜드와의 협업',
    'spots-statement': '패션 에디터가 소개하는,<br>옷 좋아하는 한국사람들의 <em>K-⁠패션 스팟</em>',
    'tier-discover-title': 'DISCOVER',
    'tier-discover-desc': '무료 디지털 매거진',
    'tier-daydrop-title': 'DAY DROP',
    'tier-daydrop-desc': '반나절 단품 큐레이션',
    'spots-discover-img': 'src/assets/spots-discover-phone.webp?v=3',
    'spots-daydrop-img': 'src/assets/spots-daydrop-phone.webp?v=3',
    'about-value-1-alt': '매장 옷걸이에서 집업 니트를 골라 보는 모습',
    'about-value-2-alt': '서울 골목의 패션 매장 앞을 함께 걷는 모습',
    'about-value-3-alt': '에디터와 함께 매장 직원에게 니트를 안내받는 모습',
    'about-value-4-alt': '브랜드 작업실 테이블에서 재킷과 원단, 룩북을 함께 살펴보는 모습',
    'spots-discover-alt': '앱 홈의 에디터 큐레이션 피드 화면',
    'spots-daydrop-alt': '앱의 매장 상세 화면과 예약 금액',
    'tier-discover-more': '에디터가 엄선한 매장과 브랜드 이야기를<br>큐레이션 카드로 확인하세요.',
    'tier-daydrop-more': '에디터와 함께 매장을 돌며<br>나에게 어울리는 옷을 골라 보세요.<span class="tier__price">128,000원부터, 4인 기준</span>',
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
    'picks-card-1-title': '셀럽이 입어서 유명한 브랜드',
    'picks-card-1-sub': '셀럽의 선택부터 독보적인 디자인까지, 지금 패션 신에서 가장 뜨거운 K-브랜드를 소개합니다.',
    'picks-card-2-title': 'K-BRAND 디자이너 인터뷰',
    'picks-card-2-sub': '지금 해외에서 주목받는 한국 브랜드의 디렉터들, 그중에서도 브랜드를 함께 이끄는 자매 디렉터의 이야기를 들려드립니다.',
    'picks-card-3-title': 'K-BRAND 쇼룸 소개',
    'picks-card-3-sub': '다시 서울에서 가장 뜨거운 동네로 떠오른 압구정. 주목받는 K-브랜드 쇼룸을 따라 걷는 하루 코스를 제안합니다.',
    'process-statement': '발굴에서 노출까지,<br>에디터가 <em>직접</em> 선정',
    'process-step-1-label': '1단계',
    'process-step-2-label': '2단계',
    'process-step-3-label': '3단계',
    'process-step-4-label': '4단계',
    'process-step-1-title': '발굴',
    'process-step-2-title': '검증',
    'process-step-3-title': '에디토리얼 제작',
    'process-step-4-title': '큐레이션 노출',
    'area-headline': '성수·한남·압구정',
    'area-desc': '서울에서 로컬 부티크가 가장 밀집한 세 지역을 중심으로, <br class="br-pc">에디터가 직접 추천하는 리얼 K-패션 스팟을 소개합니다.',
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
    'form-success': '문의가 접수됐습니다.',
    'form-fallback': '자동 발송에 실패해 메일 앱을 엽니다. 열리지 않으면 contact@theharper.co.kr 로 직접 보내 주세요.',
    'footer-menu': 'Menu',
    'footer-social': 'Social',
    'footer-info': 'THE HARPER Co., Ltd. · 서울특별시 서초구 · 사업자등록번호 000-00-00000 · contact@theharper.co.kr',
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
    'hero-title': 'A K-fashion shopping experience<br>curated by editors across Seongsu, Hannam &amp; Apgujeong',
    'hero-cta': 'See our curation on Instagram',
    'hero-kicker': 'K-Fashion Editor Curation',
    'hero-edition': 'Seoul · 2026',
    'hero-image-src': 'src/assets/hero-app-rose-logo-en-1280.webp',
    'hero-image-srcset': 'src/assets/hero-app-rose-logo-en-640.webp 640w, src/assets/hero-app-rose-logo-en-1280.webp 1280w, src/assets/hero-app-rose-logo-en-2048.webp 2048w',
    'hero-image-alt': 'The English THE HARPER app on a phone on a wooden table, with a brown header, pink logo, editor portrait and bottom navigation.',
    'section-about': 'About',
    'section-spots': 'Spots',
    'section-process': 'Curation Process',
    'section-area': 'Focus Area',
    'section-partners': 'Partners',
    'section-contact': 'Contact',
    'about-statement': 'The real K-fashion Seoul’s most stylish locals <em>actually seek out</em>.',
    'about-aside': 'From the brands Korea’s fashion crowd loves, we introduce shops hand-picked by our editors.',
    'about-value-1-title': 'Editor Curation',
    'about-value-1-desc': 'Shops hand-picked by our editors',
    'about-value-2-title': 'Local Discovery',
    'about-value-2-desc': 'Focused on the areas Seoul’s fashion crowd visits',
    'about-value-3-title': 'Multilingual Experience',
    'about-value-3-desc': 'Communication in the visitor’s own language',
    'about-value-4-title': 'Brand Partnerships',
    'about-value-4-desc': 'Collaborations with brands found only in Korea',
    'spots-statement': 'Seoul’s best-dressed locals’ favorite spots,<br><em>hand-picked by our editors</em>',
    'tier-discover-title': 'DISCOVER',
    'tier-discover-desc': 'Free digital magazine',
    'tier-daydrop-title': 'DAY DROP',
    'tier-daydrop-desc': 'Half-day single curation',
    'spots-discover-img': 'src/assets/spots-discover-phone-en.webp?v=3',
    'spots-daydrop-img': 'src/assets/spots-daydrop-phone-en.webp?v=3',
    'about-value-1-alt': 'Picking out a zip-up knit from a rack in a shop',
    'about-value-2-alt': 'Walking past fashion shops on a Seoul side street',
    'about-value-3-alt': 'Hearing about a knit from shop staff with the editor',
    'about-value-4-alt': 'Looking over a jacket, fabric swatches and a lookbook together at a brand studio table',
    'spots-discover-alt': 'Editor curation feed on the app home screen',
    'spots-daydrop-alt': 'Shop detail screen in the app with the booking price',
    'tier-discover-more': 'Explore editor-picked shops and brand stories<br>through curation cards.',
    'tier-daydrop-more': 'Visit the shops with an editor<br>and pick the pieces that suit you.<span class="tier__price">From KRW 128,000, for 4 people</span>',
    'tier-capsule-title': 'CAPSULE',
    'tier-capsule-desc': 'Full-day 1:1 curation',
    'tier-signature-title': 'SIGNATURE',
    'tier-signature-desc': 'Overnight heritage tour',
    'tier-bespoke-title': 'BESPOKE',
    'tier-bespoke-desc': 'VIP bespoke tour',
    'tier-badge-pick': 'Opens in Nov',
    'tier-badge-coming': 'Coming soon',
    'picks-title': 'Editor’s Picks',
    'picks-instagram': 'See all on Instagram',
    'picks-card-1-title': 'Brands made famous by the celebrities who wear them',
    'picks-card-1-sub': 'From celebrity picks to one-of-a-kind design, meet the hottest K-brands in fashion right now.',
    'picks-card-2-title': 'K-Brand Designer Interviews',
    'picks-card-2-sub': 'Meet the directors behind the Korean brands the world is watching, starting with the sisters who run theirs together.',
    'picks-card-3-title': 'K-Brand Showroom Guide',
    'picks-card-3-sub': 'Apgujeong is Seoul’s hottest neighborhood again. A one-day route through the K-brand showrooms everyone is talking about.',
    'process-statement': 'From scouting to publishing,<br>hand-picked by our editors <em>themselves</em>',
    'process-step-1-label': 'Step 1',
    'process-step-2-label': 'Step 2',
    'process-step-3-label': 'Step 3',
    'process-step-4-label': 'Step 4',
    'process-step-1-title': 'Scouting',
    'process-step-2-title': 'Verification',
    'process-step-3-title': 'Editorial',
    'process-step-4-title': 'Publishing',
    'area-headline': 'Seongsu·Hannam·Apgujeong',
    'area-desc': 'Centered on the three districts with Seoul’s densest concentration of local boutiques, we introduce real K-fashion spots recommended by our editors.',
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
    'form-success': 'Thanks, we received your inquiry.',
    'form-fallback': 'Automatic sending failed, so we are opening your mail app. If it does not open, email contact@theharper.co.kr directly.',
    'footer-menu': 'Menu',
    'footer-social': 'Social',
    'footer-info': 'THE HARPER Co., Ltd. · Seocho-gu, Seoul · Business Reg. No. 000-00-00000 · contact@theharper.co.kr',
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

  // 언어별로 다른 이미지(앱 목업 화면 글자)와 대체 텍스트
  // 화면 크기에 따라 선택되는 파일도 먼저 바꾼다. src만 바꾸면 이전 언어의 srcset이 남는다.
  document.querySelectorAll('[data-i18n-srcset]').forEach(el => {
    const key = el.getAttribute('data-i18n-srcset');
    if (dict[key] !== undefined && el.getAttribute('srcset') !== dict[key]) el.setAttribute('srcset', dict[key]);
  });
  document.querySelectorAll('[data-i18n-src]').forEach(el => {
    const key = el.getAttribute('data-i18n-src');
    if (dict[key] !== undefined && el.getAttribute('src') !== dict[key]) el.setAttribute('src', dict[key]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.alt = dict[key];
  });

  const heroPreload = document.getElementById('hero-image-preload');
  if (heroPreload) {
    heroPreload.setAttribute('imagesrcset', dict['hero-image-srcset']);
    heroPreload.setAttribute('href', dict['hero-image-src']);
  }
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

  const textarea = document.getElementById('contact-message');
  if (textarea) {
    const grow = () => { textarea.style.height = 'auto'; textarea.style.height = `${textarea.scrollHeight}px`; };
    textarea.addEventListener('input', grow);
    form.addEventListener('reset', () => setTimeout(grow, 0));
  }

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


// ---------- 지도 ----------
// 벡터 지도(MapLibre + OpenFreeMap, 키 불필요)를 쓴다. 벡터라 어느 배율에서도 선명하고,
// 색은 스타일 JSON을 받아 우리 회색 팔레트로 바꿔 칠한다. 지도가 못 뜨면 OSM 링크를 보여 준다.
let mapInstance = null;
let mapMarkers = [];
let mapLabelLayers = [];
const MAP_STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';
const MAP_FALLBACK_URL = 'https://www.openstreetmap.org/#map=14/37.5400/127.0300';
const MAP_POINTS = [
  { lat: 37.5445, lng: 127.0560, key: 'map-seongsu' },
  { lat: 37.5340, lng: 127.0000, key: 'map-hannam' },
  { lat: 37.5270, lng: 127.0280, key: 'map-apgujeong' }
];

function updateMapAriaLabel(lang) {
  const el = document.getElementById('area-map');
  if (!el) return;
  el.setAttribute('aria-label', translations[lang]['area-map-aria-label'] || 'Map');
}

// 지도 대신 링크를 보여 준다(라이브러리·스타일·타일 중 하나라도 실패했을 때)
function showMapFallback(container) {
  if (mapInstance) {
    try { mapInstance.remove(); } catch (e) { /* 이미 지워진 경우 */ }
  }
  mapInstance = null;
  mapMarkers = [];
  const lang = getCurrentLanguage();
  const text = lang === 'ko' ? '지도 열기' : 'Open map';
  container.innerHTML = `<a class="area-map__fallback" href="${MAP_FALLBACK_URL}" target="_blank" rel="noopener">${text}</a>`;
}

// 지명 표기: 한국어면 한글 이름, 영어면 영문 이름(없으면 로마자)
function mapLabelExpression(lang) {
  if (lang === 'ko') {
    return ['coalesce', ['get', 'name:ko'], ['get', 'name:nonlatin'], ['get', 'name']];
  }
  return ['coalesce', ['get', 'name:en'], ['get', 'name:latin'], ['get', 'name']];
}

// 스타일 JSON을 우리 팔레트(웜 그레이, 무채색)로 다시 칠하고, 필요 없는 요소는 숨긴다
function restyleMap(style, lang) {
  const C = {
    bg: '#F4F2EE',        // gray-50
    land: '#EFECE6',
    park: '#E8E5DE',
    wood: '#E4E1DA',
    water: '#D6D2CB',
    building: '#E9E6DF',
    buildingLine: '#DDD9D2',
    roadCasing: '#D9D5CE', // gray-200
    roadInner: '#FFFFFF',
    roadMinor: '#FBFAF8',
    rail: '#D9D5CE',
    boundary: '#C8C3BA',
    label: '#5C5750',      // gray-700
    labelStrong: '#3A362F', // ink
    halo: 'rgba(244, 242, 238, 0.9)'
  };
  // 작은 길 이름·도로 번호·공항·국경 등은 숨겨 지도를 단순하게 한다
  const hide = /shield|airport|label_country|label_state|boundary_disputed|aeroway|ice_shelf|glacier|dashline|highway-name-minor|highway-name-path/;
  const labelField = mapLabelExpression(lang);
  mapLabelLayers = [];

  style.layers.forEach(layer => {
    const id = layer.id;
    layer.layout = layer.layout || {};
    layer.paint = layer.paint || {};
    if (hide.test(id)) { layer.layout.visibility = 'none'; return; }

    if (layer.type === 'background') layer.paint['background-color'] = C.bg;
    if (id === 'landuse_residential') layer.paint['fill-color'] = C.land;
    if (id === 'park') layer.paint['fill-color'] = C.park;
    if (id === 'landcover_wood') layer.paint['fill-color'] = C.wood;
    if (id === 'water') layer.paint['fill-color'] = C.water;
    if (id === 'waterway') layer.paint['line-color'] = C.water;
    if (id === 'building') { layer.paint['fill-color'] = C.building; layer.paint['fill-outline-color'] = C.buildingLine; }
    if (/road_area_pier|road_pier/.test(id)) layer.paint[layer.type === 'fill' ? 'fill-color' : 'line-color'] = C.land;
    if (/casing/.test(id)) layer.paint['line-color'] = C.roadCasing;
    if (/_inner|_subtle/.test(id)) layer.paint['line-color'] = C.roadInner;
    if (id === 'highway_minor') layer.paint['line-color'] = C.roadMinor;
    if (id === 'highway_path') layer.paint['line-color'] = C.roadCasing;
    if (/^railway/.test(id)) layer.paint['line-color'] = C.rail;
    if (/^boundary/.test(id)) layer.paint['line-color'] = C.boundary;

    if (layer.type === 'symbol') {
      const strong = /label_city|label_town/.test(id);
      layer.paint['text-color'] = strong ? C.labelStrong : C.label;
      layer.paint['text-halo-color'] = C.halo;
      layer.paint['text-halo-width'] = 1.2;
      layer.paint['text-halo-blur'] = 0.4;
      if (layer.layout['text-field']) {
        layer.layout['text-field'] = labelField;
        layer.layout['text-font'] = ['Noto Sans Regular'];
        mapLabelLayers.push(id);
      }
    }
  });
  return style;
}

function initMap() {
  const container = document.getElementById('area-map');
  if (!container) return;

  // 라이브러리가 아직 안 왔으면(defer) 페이지 로드 뒤 한 번 더 시도하고, 그래도 없으면 링크를 보여 준다
  if (typeof maplibregl === 'undefined') {
    if (document.readyState === 'complete') { showMapFallback(container); return; }
    window.addEventListener('load', initMap, { once: true });
    return;
  }

  fetch(MAP_STYLE_URL)
    .then(res => { if (!res.ok) throw new Error('style ' + res.status); return res.json(); })
    .then(style => buildMap(container, restyleMap(style, getCurrentLanguage())))
    .catch(() => showMapFallback(container));
}

function buildMap(container, style) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  try {
    mapInstance = new maplibregl.Map({
      container: 'area-map',
      style,
      center: [127.020, 37.536],
      zoom: 13,
      minZoom: 11,
      maxZoom: 17,
      scrollZoom: false,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      fadeDuration: reduce ? 0 : 300,
      attributionControl: { compact: false }
    });
  } catch (e) {
    showMapFallback(container); // WebGL을 못 쓰는 환경
    return;
  }
  mapInstance.touchZoomRotate.disableRotation();
  mapInstance.keyboard.disableRotation();
  mapInstance.addControl(new maplibregl.NavigationControl({ showCompass: false, showZoom: true }), 'bottom-right');

  // 타일이 계속 실패하면 지도 대신 링크를 보여 준다
  let errors = 0;
  mapInstance.on('error', () => {
    errors += 1;
    if (errors >= 6 && mapInstance) showMapFallback(container);
  });

  MAP_POINTS.forEach(p => {
    const text = translations[getCurrentLanguage()][p.key] || p.key;
    const el = document.createElement('div');
    el.className = 'map-marker-wrapper';
    el.innerHTML = `<span class="map-pin"></span><span class="map-pin__label">${text}</span>`;
    const popup = new maplibregl.Popup({ className: 'map-popup', closeButton: true, offset: [0, -42] }).setText(text);
    const marker = new maplibregl.Marker({ element: el, anchor: 'top-left', offset: [-15, -39] }) // 물방울 끝이 좌표에 오도록
      .setLngLat([p.lng, p.lat])
      .setPopup(popup)
      .addTo(mapInstance);
    mapMarkers.push({ marker, el, popup, key: p.key });
  });

  // 세 핀이 모두 보이도록 맞춘다
  const bounds = MAP_POINTS.reduce((b, p) => b.extend([p.lng, p.lat]), new maplibregl.LngLatBounds([MAP_POINTS[0].lng, MAP_POINTS[0].lat], [MAP_POINTS[0].lng, MAP_POINTS[0].lat]));
  mapInstance.fitBounds(bounds, { padding: { top: 56, right: 120, bottom: 56, left: 40 }, maxZoom: 15, duration: 0 });
}

function updateMapPopupLanguage() {
  const lang = getCurrentLanguage();
  mapMarkers.forEach(item => {
    const text = translations[lang][item.key] || item.key;
    const label = item.el.querySelector('.map-pin__label');
    if (label) label.textContent = text;
    item.popup.setText(text);
  });
  if (mapInstance && mapInstance.isStyleLoaded()) {
    const field = mapLabelExpression(lang);
    mapLabelLayers.forEach(id => {
      if (mapInstance.getLayer(id)) mapInstance.setLayoutProperty(id, 'text-field', field);
    });
  }
}

// ---------- 시작 ----------
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initHeaderScroll();
  initMobileMenu();
  initContactForm();
  initReveal();
  initMap();
});
