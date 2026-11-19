/* Public catalog: edit smartgroup-apps-catalog.json to add or remove App Store IDs.
   Names, descriptions, icons and store links always come from Apple. */
(() => {
  'use strict';
  const L = {
    en: {skip:'Skip to apps',navApps:'Our apps',navSupport:'Get in touch',eyebrow:'Independent apps. Everyday possibilities.',heroLine1:'A little smarter.',heroLine2:'Every day.',lead:'Thoughtful apps for the things that matter. Discover something useful for your life, your family, and your devices.',explore:'Explore our apps',contact:'Say hello',appsTitle:'Meet your next everyday app.',appsSubtitle:'Explore the collection. Find your fit.',all:'All apps',storeNote:'App names, icons and descriptions are supplied by Apple’s App Store.',applePrivacy:'Apple privacy',retry:'Try again',supportEyebrow:'People behind the apps',supportTitle:'A question? An idea? We’re here.',supportText:'For help with an app, a purchase, or a suggestion for what comes next, drop us a line.',footerNote:'Small tools. Thoughtfully made.',loading:'Loading apps from the App Store…',loadError:'We couldn’t reach the App Store. Please try again shortly.',configError:'The app collection could not be loaded. Please try again shortly.',partial:'Some apps are unavailable in this storefront. Showing the apps Apple returned.',empty:'No apps for this platform in the current collection.',openStore:'View on App Store',openMac:'View on Mac App Store',iconAlt:'App icon'},
    vi: {skip:'Đến danh sách ứng dụng',navApps:'Ứng dụng',navSupport:'Liên hệ',eyebrow:'Ứng dụng nhỏ. Tiện ích mỗi ngày.',heroLine1:'Thông minh hơn.',heroLine2:'Mỗi ngày.',lead:'Những ứng dụng dành cho điều bạn quan tâm. Khám phá tiện ích cho cuộc sống, gia đình và thiết bị của bạn.',explore:'Khám phá ứng dụng',contact:'Liên hệ chúng tôi',appsTitle:'Tìm tiện ích cho mỗi ngày.',appsSubtitle:'Khám phá bộ ứng dụng. Chọn điều bạn cần.',all:'Tất cả',storeNote:'Tên, icon và mô tả ứng dụng được lấy trực tiếp từ App Store của Apple.',applePrivacy:'Quyền riêng tư Apple',retry:'Thử lại',supportEyebrow:'Đội ngũ phía sau ứng dụng',supportTitle:'Chúng tôi luôn lắng nghe.',supportText:'Bạn cần hỗ trợ ứng dụng, có câu hỏi về mua hàng hay muốn góp ý? Hãy gửi email cho chúng tôi.',footerNote:'Tiện ích nhỏ. Chăm chút từng chi tiết.',loading:'Đang tải ứng dụng từ App Store…',loadError:'Chưa kết nối được với App Store. Vui lòng thử lại sau.',configError:'Chưa tải được danh sách ứng dụng. Vui lòng thử lại sau.',partial:'Một số ứng dụng chưa có ở khu vực này. Đang hiển thị các ứng dụng Apple trả về.',empty:'Chưa có ứng dụng cho nền tảng này trong danh sách.',openStore:'Xem trên App Store',openMac:'Xem trên Mac App Store',iconAlt:'Biểu tượng ứng dụng'},
    ja: {skip:'アプリ一覧へ',navApps:'アプリ',navSupport:'お問い合わせ',eyebrow:'毎日に役立つ、独立系アプリ。',heroLine1:'もっと便利に。',heroLine2:'毎日を。',lead:'暮らし、家族、デバイスのために。大切なことを支えるアプリを見つけてください。',explore:'アプリを見る',contact:'お問い合わせ',appsTitle:'毎日に役立つアプリを。',appsSubtitle:'あなたに合うアプリを見つけてください。',all:'すべて',storeNote:'アプリ名、アイコン、説明はAppleのApp Storeから取得しています。',applePrivacy:'Appleのプライバシー',retry:'再試行',supportEyebrow:'アプリをつくるチーム',supportTitle:'ご質問やアイデアをお聞かせください。',supportText:'アプリや購入に関するご質問、ご意見はメールでお問い合わせください。',footerNote:'小さなツールを、丁寧に。',loading:'App Storeから読み込み中…',loadError:'App Storeに接続できませんでした。しばらくしてから再試行してください。',configError:'アプリ一覧を読み込めませんでした。再試行してください。',partial:'この地域では一部のアプリを取得できません。取得できたアプリを表示しています。',empty:'このプラットフォームのアプリはありません。',openStore:'App Storeで見る',openMac:'Mac App Storeで見る',iconAlt:'アプリアイコン'},
    'zh-HK': {skip:'前往應用程式',navApps:'應用程式',navSupport:'聯絡我們',eyebrow:'獨立開發，讓日常更便利。',heroLine1:'聰明一點。',heroLine2:'每一天。',lead:'為生活、家人和裝置而設。探索貼心實用的應用程式，照顧你重視的每一件事。',explore:'探索應用程式',contact:'聯絡我們',appsTitle:'找到適合日常的好幫手。',appsSubtitle:'探索應用程式，選擇你需要的。',all:'全部',storeNote:'應用程式名稱、圖示及描述直接取自 Apple App Store。',applePrivacy:'Apple 私隱',retry:'重試',supportEyebrow:'應用程式背後的團隊',supportTitle:'歡迎分享問題與想法。',supportText:'如需應用程式或購買方面的支援，或想分享建議，請電郵聯絡我們。',footerNote:'小工具，用心製作。',loading:'正在從 App Store 載入…',loadError:'未能連接 App Store，請稍後重試。',configError:'未能載入應用程式清單，請重試。',partial:'部分應用程式在此地區暫未提供，現顯示 Apple 傳回的應用程式。',empty:'清單中沒有此平台的應用程式。',openStore:'在 App Store 查看',openMac:'在 Mac App Store 查看',iconAlt:'應用程式圖示'}
  };
  const $ = id => document.getElementById(id);
  const supported = Object.keys(L);
  let storedLanguage;
  try { storedLanguage = localStorage.getItem('smartgroupLang'); } catch (_) { /* Storage is optional. */ }
  const browserLanguage = (navigator.language || 'en').toLowerCase();
  let language = supported.includes(storedLanguage) ? storedLanguage : browserLanguage.startsWith('vi') ? 'vi' : browserLanguage.startsWith('ja') ? 'ja' : browserLanguage.startsWith('zh') ? 'zh-HK' : 'en';
  let appIds = [];
  let apps = [];
  let filter = 'all';
  let revision = 0;
  let callbackCounter = 0;
  let isLoading = false;
  let configLoaded = false;
  // Generated from Apple at publication time: also usable when live lookup fails.
  try {
    const snapshot = JSON.parse($('catalogSnapshot')?.textContent || '{}');
    if (Array.isArray(snapshot.appIds) && Array.isArray(snapshot.apps)) {
      appIds = snapshot.appIds.map(String);
      apps = snapshot.apps.filter(app => appIds.includes(String(app.trackId)) && ['software','mac-software'].includes(app.kind) && typeof app.trackName === 'string');
    }
  } catch (_) { /* Live loading still works without a snapshot. */ }
  const cache = new Map();
  const text = key => L[language][key] || L.en[key];
  const country = () => ({en:'us',vi:'vn',ja:'jp','zh-HK':'hk'})[language];
  const element = (tag, className, content) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  };
  function translate() {
    document.documentElement.lang = language;
    $('language').value = language;
    document.querySelectorAll('[data-i]').forEach(node => { node.textContent = text(node.dataset.i); });
  }
  function setStatus(key = '') {
    $('status').hidden = !key;
    $('statusText').textContent = key ? text(key) : '';
    $('retry').disabled = isLoading;
  }
  function safeURL(value, suffix) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && (url.hostname === suffix || url.hostname.endsWith('.' + suffix)) ? url.href : '';
    } catch (_) { return ''; }
  }
  function lookup(ids, storefront) {
    if (!ids.length) return Promise.resolve([]);
    const key = storefront + ':' + ids.join(',');
    if (cache.has(key)) return Promise.resolve(cache.get(key));
    // Apple's JSONP endpoint works on static hosts without a CORS proxy or API key.
    return new Promise((resolve, reject) => {
      const callback = '__smartgroupStore_' + Date.now() + '_' + (++callbackCounter);
      const script = document.createElement('script');
      let timer;
      const cleanup = () => { clearTimeout(timer); script.remove(); delete window[callback]; };
      window[callback] = payload => {
        cleanup();
        if (!payload || !Array.isArray(payload.results)) { reject(new Error('Invalid Apple response')); return; }
        const results = payload.results.filter(app => ids.includes(String(app.trackId)) && ['software','mac-software'].includes(app.kind) && typeof app.trackName === 'string');
        cache.set(key, results);
        resolve(results);
      };
      script.onerror = () => { cleanup(); reject(new Error('App Store unavailable')); };
      timer = setTimeout(() => { cleanup(); reject(new Error('App Store timeout')); }, 12000);
      const url = new URL('https://itunes.apple.com/lookup');
      url.search = new URLSearchParams({id:ids.join(','),country:storefront,callback}).toString();
      script.src = url.href;
      document.head.append(script);
    });
  }
  function imageFor(app, className) {
    const image = element('img', className);
    image.alt = app.trackName + ' — ' + text('iconAlt');
    image.width = 88;
    image.height = 88;
    image.decoding = 'async';
    image.loading = 'lazy';
    const fallback = () => image.replaceWith(element('span', 'icon-fallback', app.trackName.slice(0,2)));
    image.addEventListener('error', fallback, {once:true});
    const url = safeURL(app.artworkUrl512 || app.artworkUrl100, 'mzstatic.com');
    if (url) image.src = url;
    else return element('span', 'icon-fallback', app.trackName.slice(0,2));
    return image;
  }
const revealObserver = 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      revealObserver.unobserve(entry.target);
      // No hidden starting styles: failed/disabled JS never hides app content.
      if (typeof entry.target.animate === 'function') entry.target.animate(
        [{transform:'translateY(18px)'},{transform:'translateY(0)'}],
        {duration:550,easing:'cubic-bezier(.2,.7,.2,1)'}
      );
    });
  }, {threshold:0.08}) : null;
function renderApps() {

    const grid = $('appsGrid');
    if (revealObserver) revealObserver.disconnect();
    grid.replaceChildren();
    grid.setAttribute('aria-busy', 'false');
    let shown = 0;
    for (const app of apps) {
      const isMac = app.kind === 'mac-software';
      if (filter !== 'all' && filter !== (isMac ? 'mac' : 'ios')) continue;
      shown++;
      const link = element('a', 'app-card');
      link.href = safeURL(app.trackViewUrl, 'apps.apple.com') || 'https://apps.apple.com/app/id' + app.trackId;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', app.trackName + ' — ' + text(isMac ? 'openMac' : 'openStore'));
      const top = element('div','card-top');
      top.append(imageFor(app,'app-icon'), element('span','platform', isMac ? 'macOS' : (Array.isArray(app.features) && app.features.includes('iosUniversal') ? 'iPhone · iPad' : 'iPhone')));
      const description = typeof app.description === 'string' ? app.description.split(/\n\s*\n/)[0].trim() : '';
      const bottom = element('div','card-bottom');
      bottom.append(element('span','genre',typeof app.primaryGenreName === 'string' ? app.primaryGenreName : ''), element('span','store-link', text(isMac ? 'openMac' : 'openStore')));
      link.append(top,element('h3','',app.trackName),element('p','app-desc',description),bottom);
      grid.append(link);
      if (revealObserver) revealObserver.observe(link);
    }
    $('resultMessage').textContent = !shown && apps.length ? text('empty') : apps.length < appIds.length && apps.length ? text('partial') : '';
    $('heroIcons').replaceChildren();
    for (const app of apps.slice(0,4)) {
      const tile = element('div','hero-icon');
      const image = imageFor(app,'');
      image.alt = '';
      image.loading = 'eager';
      tile.append(image);
      $('heroIcons').append(tile);
    }
  }
  async function loadConfig() {
    // Only IDs live in configuration; no app titles, artwork URLs or descriptions.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('smartgroup-apps-catalog.json', {cache:'no-cache',signal:controller.signal});
      if (!response.ok) throw new Error('Missing catalog');
      const config = await response.json();
      if (!Array.isArray(config.appIds) || !config.appIds.length || config.appIds.length > 24 || config.appIds.some(id => !/^\d{5,12}$/.test(String(id)))) throw new Error('Invalid catalog');
      appIds = [...new Set(config.appIds.map(String))];
    } finally { clearTimeout(timeout); }
  }
  async function loadApps() {
    const current = ++revision;
    const storefront = country();
    isLoading = true;
    setStatus();
    $('appsGrid').setAttribute('aria-busy','true');
    $('resultMessage').textContent = text('loading');
    try {
      if (!configLoaded) {
        try { await loadConfig(); configLoaded = true; }
        catch (error) { error.catalogFailure = true; throw error; }
      }
      let results;
      try { results = await lookup(appIds,storefront); }
      catch (error) { if (storefront === 'us') throw error; results = []; }
      const missing = appIds.filter(id => !results.some(app => String(app.trackId) === id));
      if (storefront !== 'us' && missing.length) {
        try { results = results.concat(await lookup(missing,'us')); }
        catch (error) { if (!results.length) throw error; }
      }
      if (current !== revision) return;
      apps = appIds.map(id => results.find(app => String(app.trackId) === id)).filter(Boolean);
      if (!apps.length) throw new Error('No available apps');
      renderApps();
    } catch (error) {
      if (current !== revision) return;
      apps = apps.filter(app => appIds.includes(String(app.trackId)));
      renderApps();
      setStatus(error.catalogFailure ? 'configError' : 'loadError');
    } finally {
      if (current === revision) { isLoading = false; $('retry').disabled = false; $('appsGrid').setAttribute('aria-busy','false'); }
    }
  }
  $('language').addEventListener('change', () => {
    language = supported.includes($('language').value) ? $('language').value : 'en';
    try { localStorage.setItem('smartgroupLang', language); } catch (_) { /* Optional preference. */ }
    translate();
    loadApps();
  });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(node => node.setAttribute('aria-pressed', String(node === button)));
    if (!isLoading) renderApps();
  }));
  $('retry').addEventListener('click', () => { if (!isLoading) loadApps(); });
  $('year').textContent = String(new Date().getFullYear());
  translate();
  if (apps.length) renderApps();
  loadApps();
})();
