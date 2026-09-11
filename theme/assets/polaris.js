/**
 * Polaris theme JS
 * GSAP 3.13 + ScrollTrigger are loaded via CDN in theme.liquid before this file.
 */
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------ */
  /* GSAP setup                                                          */
  /* ------------------------------------------------------------------ */
  var hasGsap = typeof window.gsap !== 'undefined';

  if (hasGsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------ */
  /* 1. Scroll-triggered fade-up                                         */
  /* ------------------------------------------------------------------ */
  function initFadeUp() {
    if (!hasGsap || !window.ScrollTrigger) return;

    var fadeEls = document.querySelectorAll('[data-animate="fade-up"]');
    if (!fadeEls.length) return;

    if (prefersReducedMotion) {
      gsap.set(fadeEls, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(fadeEls, { opacity: 0, y: 40 });

    ScrollTrigger.batch(fadeEls, {
      start: 'top 85%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          overwrite: true
        });
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 2. Stagger reveal for grouped children                              */
  /* ------------------------------------------------------------------ */
  function initStaggerChildren() {
    if (!hasGsap || !window.ScrollTrigger) return;

    var groups = document.querySelectorAll('[data-animate="stagger-children"]');
    if (!groups.length) return;

    groups.forEach(function (group) {
      var children = group.children;
      if (!children.length) return;

      if (prefersReducedMotion) {
        gsap.set(children, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(children, { opacity: 0, y: 40 });

      ScrollTrigger.batch(children, {
        start: 'top 85%',
        once: true,
        onEnter: function (batch) {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.1,
            overwrite: true
          });
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. Parallax hero                                                     */
  /* ------------------------------------------------------------------ */
  function initParallax() {
    if (!hasGsap || !window.ScrollTrigger || prefersReducedMotion) return;

    var parallaxEls = document.querySelectorAll('[data-parallax]');
    if (!parallaxEls.length) return;

    parallaxEls.forEach(function (el) {
      gsap.fromTo(
        el,
        { yPercent: -30 },
        {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Scale reveal (for category cards, image blocks)                   */
  /* ------------------------------------------------------------------ */
  function initScaleReveal() {
    if (!hasGsap || !window.ScrollTrigger) return;

    var els = document.querySelectorAll('[data-animate="scale-reveal"]');
    if (!els.length) return;

    if (prefersReducedMotion) {
      gsap.set(els, { opacity: 1, scale: 1 });
      return;
    }

    gsap.set(els, { opacity: 0, scale: 0.95 });

    ScrollTrigger.batch(els, {
      start: 'top 90%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          overwrite: true
        });
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 5. Hero content entrance (runs immediately on load)                  */
  /* ------------------------------------------------------------------ */
  function initHeroEntrance() {
    if (!hasGsap) return;

    var heroContent = document.querySelector('[data-animate="hero-content"]');
    if (!heroContent) return;

    var children = heroContent.children;
    if (!children.length) return;

    if (prefersReducedMotion) {
      gsap.set(children, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(children, {
      opacity: 0,
      y: 40
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      overwrite: true
    });
  }

  /* ------------------------------------------------------------------ */
  /* 6. Mobile menu drawer                                                */
  /* ------------------------------------------------------------------ */
  function initMobileMenu() {
    var openBtn = document.querySelector('[data-drawer-open]');
    var closeBtn = document.querySelector('[data-drawer-close]');
    var drawer = document.querySelector('[data-drawer]');
    var overlay = document.querySelector('[data-drawer-overlay]');

    if (!openBtn || !drawer) return;

    function openDrawer() {
      openBtn.setAttribute('aria-expanded', 'true');
      drawer.classList.add('translate-x-0');
      if (overlay) overlay.classList.remove('hidden');
    }

    function closeDrawer() {
      openBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('translate-x-0');
      if (overlay) overlay.classList.add('hidden');
    }

    openBtn.addEventListener('click', function () {
      var expanded = openBtn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    if (overlay) {
      overlay.addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && openBtn.getAttribute('aria-expanded') === 'true') {
        closeDrawer();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 7. Cart drawer                                                       */
  /* ------------------------------------------------------------------ */
  function initCartDrawer() {
    var cartIcon = document.querySelector('[data-cart-open]');
    var cartDrawer = document.querySelector('[data-cart-drawer]');

    if (!cartIcon || !cartDrawer) return;

    var closeBtn = cartDrawer.querySelector('[data-cart-close]');
    var overlay = document.querySelector('[data-cart-overlay]');

    function openCart() {
      cartIcon.setAttribute('aria-expanded', 'true');
      cartDrawer.classList.add('translate-x-0');
      if (overlay) overlay.classList.remove('hidden');
    }

    function closeCart() {
      cartIcon.setAttribute('aria-expanded', 'false');
      cartDrawer.classList.remove('translate-x-0');
      if (overlay) overlay.classList.add('hidden');
    }

    cartIcon.addEventListener('click', function (e) {
      e.preventDefault();
      openCart();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeCart);
    }

    if (overlay) {
      overlay.addEventListener('click', closeCart);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && cartIcon.getAttribute('aria-expanded') === 'true') {
        closeCart();
      }
    });

    document.addEventListener('cart:open', openCart);
  }

  /* ------------------------------------------------------------------ */
  /* 8. Predictive search                                                 */
  /* ------------------------------------------------------------------ */
  function initPredictiveSearch() {
    var searchForm = document.querySelector('.predictive-search');
    if (!searchForm) return;

    var input = searchForm.querySelector('input[type="search"]');
    var resultsEl = searchForm.querySelector('[data-search-results]');
    if (!input || !resultsEl) return;

    var debounceTimer;
    var currentController;

    function setState(state) {
      resultsEl.setAttribute('data-state', state);
    }

    function renderLoading() {
      setState('loading');
      resultsEl.innerHTML = '<div class="predictive-search__loading">Loading...</div>';
      resultsEl.classList.remove('hidden');
    }

    function renderEmpty() {
      setState('empty');
      resultsEl.innerHTML = '<div class="predictive-search__empty">No results found</div>';
      resultsEl.classList.remove('hidden');
    }

    function renderResults(products) {
      setState('results');

      var html = '<ul class="predictive-search__list">';
      products.forEach(function (product) {
        html +=
          '<li class="predictive-search__item">' +
          '<a href="' + product.url + '">' +
          (product.image ? '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy">' : '') +
          '<span>' + product.title + '</span>' +
          '<span>' + product.price + '</span>' +
          '</a>' +
          '</li>';
      });
      html += '</ul>';

      resultsEl.innerHTML = html;
      resultsEl.classList.remove('hidden');
    }

    function hideResults() {
      resultsEl.classList.add('hidden');
      setState('idle');
    }

    function performSearch(query) {
      if (currentController) {
        currentController.abort();
      }
      currentController = new AbortController();

      renderLoading();

      fetch(
        '/search/suggest?q=' + encodeURIComponent(query) + '&resources[type]=product&resources[limit]=4',
        { signal: currentController.signal }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var products =
            (data.resources && data.resources.results && data.resources.results.products) || [];

          if (!products.length) {
            renderEmpty();
            return;
          }

          renderResults(products);
        })
        .catch(function (err) {
          if (err.name !== 'AbortError') {
            hideResults();
          }
        });
    }

    input.addEventListener('input', function () {
      var query = input.value.trim();

      clearTimeout(debounceTimer);

      if (!query) {
        hideResults();
        return;
      }

      debounceTimer = setTimeout(function () {
        performSearch(query);
      }, 300);
    });

    document.addEventListener('click', function (e) {
      if (!searchForm.contains(e.target)) {
        hideResults();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        hideResults();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 9. Sticky header                                                     */
  /* ------------------------------------------------------------------ */
  function initStickyHeader() {
    var header = document.querySelector('[data-header-sticky]');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 0) {
        header.classList.add('bg-white', 'shadow-sm', 'scrolled');
      } else {
        header.classList.remove('bg-white', 'shadow-sm', 'scrolled');
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* 10. Quantity selector                                                 */
  /* ------------------------------------------------------------------ */
  function initQuantitySelectors() {
    var selectors = document.querySelectorAll('[data-quantity-selector]');

    selectors.forEach(function (selector) {
      var input = selector.querySelector('[data-quantity-input]');
      var minusBtn = selector.querySelector('[data-quantity-minus]');
      var plusBtn = selector.querySelector('[data-quantity-plus]');

      if (!input) return;

      var min = parseInt(input.getAttribute('min'), 10) || 1;
      var max = parseInt(input.getAttribute('max'), 10) || Infinity;

      function setValue(value) {
        value = Math.min(Math.max(value, min), max);
        input.value = value;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }

      if (minusBtn) {
        minusBtn.addEventListener('click', function () {
          var current = parseInt(input.value, 10) || min;
          setValue(current - 1);
        });
      }

      if (plusBtn) {
        plusBtn.addEventListener('click', function () {
          var current = parseInt(input.value, 10) || min;
          setValue(current + 1);
        });
      }

      input.addEventListener('blur', function () {
        var current = parseInt(input.value, 10) || min;
        setValue(current);
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 11. Quick-add to cart                                                 */
  /* ------------------------------------------------------------------ */
  function initQuickAdd() {
    var forms = document.querySelectorAll('[data-quick-add-form]');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var submitBtn = form.querySelector('[type="submit"]');
        var formData = new FormData(form);

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.setAttribute('data-loading', 'true');
        }

        fetch('/cart/add.js', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData
        })
          .then(function (response) {
            return response.json().then(function (data) {
              if (!response.ok) {
                throw new Error(data.description || 'Add to cart failed');
              }
              return data;
            });
          })
          .then(function () {
            if (submitBtn) {
              submitBtn.setAttribute('data-success', 'true');
              setTimeout(function () {
                submitBtn.removeAttribute('data-success');
              }, 2000);
            }
            document.dispatchEvent(new CustomEvent('cart:updated'));
            document.dispatchEvent(new CustomEvent('cart:open'));
          })
          .catch(function (err) {
            if (submitBtn) {
              submitBtn.setAttribute('data-error', 'true');
              setTimeout(function () {
                submitBtn.removeAttribute('data-error');
              }, 2000);
            }
            console.error(err);
          })
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.removeAttribute('data-loading');
            }
          });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Init everything                                                      */
  /* ------------------------------------------------------------------ */
  initFadeUp();
  initStaggerChildren();
  initParallax();
  initScaleReveal();
  initHeroEntrance();
  initMobileMenu();
  initCartDrawer();
  initPredictiveSearch();
  initStickyHeader();
  initQuantitySelectors();
  initQuickAdd();
});
