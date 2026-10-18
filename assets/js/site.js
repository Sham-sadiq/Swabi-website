(function () {
  var header = document.querySelector('.site-header');
  var bar = document.querySelector('.mobile-bar');
  var contact = document.getElementById('contact');

  // Sticky header border + mobile action bar (hidden while the contact section is on screen)
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 8);
    var inContact = false;
    if (contact) {
      var r = contact.getBoundingClientRect();
      inContact = r.top < window.innerHeight && r.bottom > 0;
    }
    bar.classList.toggle('show', y > 500 && !inContact);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  function closeMenu() {
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  }
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // Open the CARF FAQ when its link is used
  var carf = document.getElementById('faq-carf');
  if (carf) {
    document.querySelectorAll('a[href$="#faq-carf"]').forEach(function (a) {
      a.addEventListener('click', function () { carf.open = true; });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Contact form (home page only)
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  function show(msg, ok) { status.textContent = msg; status.className = 'form-status ' + (ok ? 'ok' : 'err'); }
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var d = new FormData(form);
    if (d.get('_gotcha')) return;
    var endpoint = form.dataset.endpoint;
    if (endpoint) {
      var b = form.querySelector('button'); b.disabled = true; b.textContent = 'Sending…';
      fetch(endpoint, { method: 'POST', body: d, headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset(); show("Thanks! Your request has been sent. We'll be in touch shortly.", true);
        })
        .catch(function () { show('Sorry, something went wrong. Please email contact@swabi.co.uk or call +44 7488 883219.', false); })
        .finally(function () { b.disabled = false; b.textContent = 'Submit my request'; });
    } else {
      var body = 'Name: ' + d.get('first_name') + ' ' + d.get('last_name') +
        '\nEmail: ' + d.get('email') + '\nPhone: ' + (d.get('phone') || '-') +
        '\nHelp with: ' + d.get('topic') + '\n\n' + (d.get('message') || '');
      window.location.href = 'mailto:contact@swabi.co.uk?subject=' +
        encodeURIComponent('Discovery call request: ' + d.get('topic')) + '&body=' + encodeURIComponent(body);
      show('Your email app should open with your request ready to send.', true);
    }
  });
})();
