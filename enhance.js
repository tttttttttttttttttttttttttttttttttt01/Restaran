/* === SAFIR enhancements === */
(function(){
  // Scroll progress bar
  var p = document.createElement('div'); p.id = 'sprog'; document.body.appendChild(p);
  // WhatsApp button
  var wa = document.createElement('a'); wa.id = 'wa'; wa.href = 'https://wa.me/998909033384'; wa.target = '_blank'; wa.rel = 'noopener';
  wa.setAttribute('aria-label','WhatsApp');
  wa.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.6-.1a14.6 14.6 0 0 1-1.5-.6 14.9 14.9 0 0 1-4.3-3.8c-.3-.6 0-.9.2-1.2l.7-.8c.2-.2.2-.4.3-.6l.4-.9c.1-.2 0-.5-.1-.7l-1.3-3c-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 4c.2.2 2.7 4.2 6.6 5.9 3.9 1.6 3.9 1.1 4.6 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8z"/></svg>';
  document.body.appendChild(wa);

  var hd = document.querySelector('.hd');
  var links = [];
  function refreshLinks(){ links = Array.prototype.slice.call(document.querySelectorAll('#nv a')); }
  refreshLinks();
  var obs = new MutationObserver(refreshLinks);
  var nv = document.querySelector('#nv');
  if (nv) obs.observe(nv, {childList:true});

  var sections = [];
  function refreshSections(){ sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]')); }
  refreshSections();

  function onScroll(){
    var st = window.scrollY, dh = document.documentElement.scrollHeight - window.innerHeight;
    p.style.width = (dh > 0 ? (st/dh)*100 : 0) + '%';
    if (hd) hd.classList.toggle('scrolled', st > 40);
    var cur = null;
    for (var i=0;i<sections.length;i++){ if (sections[i].offsetTop - 120 <= st) cur = sections[i].id; }
    links.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === '#'+cur); });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  setTimeout(onScroll, 500);

  // Back-to-top smooth
  var top = document.querySelector('#top');
  if (top) top.addEventListener('click', function(e){ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });
})();
