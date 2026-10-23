const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  let updateQueued = false;

  const updateHeader = () => {
    siteHeader.classList.toggle('is-compact', window.scrollY > 48);
    updateQueued = false;
  };

  const queueHeaderUpdate = () => {
    if (updateQueued) return;
    updateQueued = true;
    window.requestAnimationFrame(updateHeader);
  };

  window.addEventListener('scroll', queueHeaderUpdate, { passive: true });
  window.addEventListener('pageshow', updateHeader);
  updateHeader();
}

const navigationMenu = document.querySelector('.mobile-menu');

if (navigationMenu) {
  const menuButton = navigationMenu.querySelector('summary');
  const updateMenuState = () => {
    document.body.classList.toggle('menu-open', navigationMenu.open);
    menuButton.setAttribute('aria-label', navigationMenu.open ? 'Close navigation menu' : 'Open navigation menu');
  };

  navigationMenu.addEventListener('toggle', updateMenuState);
  updateMenuState();

  document.addEventListener('click', (event) => {
    if (navigationMenu.open && !navigationMenu.contains(event.target)) {
      navigationMenu.open = false;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigationMenu.open) {
      navigationMenu.open = false;
      menuButton.focus();
    }
  });
}

const rotatingWord = document.querySelector('[data-word-rotator]');
if (rotatingWord) {
  const words = JSON.parse(rotatingWord.dataset.words);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeWord = Math.max(0, words.indexOf(rotatingWord.textContent.trim()));

  if (!reducedMotion.matches && words.length > 1) {
    window.setInterval(() => {
      rotatingWord.classList.add('is-changing');
      window.setTimeout(() => {
        activeWord = (activeWord + 1) % words.length;
        rotatingWord.textContent = words[activeWord];
        rotatingWord.classList.remove('is-changing');
      }, 240);
    }, 3600);
  }
}

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = [...track.children];
  const makeClone = (slide) => {
    const clone = slide.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    if (clone.matches('a, button, input, [tabindex]')) clone.tabIndex = -1;
    clone.querySelectorAll('a, button, input, [tabindex]').forEach((element) => {
      element.tabIndex = -1;
    });
    clone.querySelectorAll('img').forEach((image) => {
      image.alt = '';
    });
    return clone;
  };
  const physicalSlides = slides.length > 1
    ? [makeClone(slides[slides.length - 1]), ...slides, makeClone(slides[0])]
    : slides;
  const controls = carousel.parentElement.querySelector('.carousel-controls');
  const previousButton = controls?.querySelector('[data-carousel-prev]');
  const nextButton = controls?.querySelector('[data-carousel-next]');
  const toggleButton = controls?.querySelector('[data-carousel-toggle]');
  const status = controls?.querySelector('.carousel-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timer;
  let wrapTimer;
  let pendingWrap = null;
  let paused = reducedMotion.matches;

  if (slides.length > 1) {
    track.prepend(physicalSlides[0]);
    track.append(physicalSlides[physicalSlides.length - 1]);
  }

  const centeredLeft = (slide) => {
    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const slideCenter = slideRect.left + slideRect.width / 2;
    const scale = trackRect.width / track.offsetWidth;
    return track.scrollLeft + (slideCenter - trackCenter) / scale;
  };

  const centerSlide = (slide, behavior) => {
    track.scrollTo({ left: centeredLeft(slide), behavior });
  };

  const finishWrap = () => {
    if (pendingWrap === null) return;
    const target = physicalSlides[pendingWrap + 1];
    track.scrollTo({ left: centeredLeft(target), behavior: 'instant' });
    pendingWrap = null;
    window.clearTimeout(wrapTimer);
    updateStatus();
  };

  const updateStatus = () => {
    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const closestPhysicalIndex = physicalSlides.reduce((closest, slide, index) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const currentRect = physicalSlides[closest].getBoundingClientRect();
      const currentCenter = currentRect.left + currentRect.width / 2;
      return Math.abs(slideCenter - trackCenter) < Math.abs(currentCenter - trackCenter) ? index : closest;
    }, 0);
    activeIndex = slides.length > 1
      ? (closestPhysicalIndex - 1 + slides.length) % slides.length
      : closestPhysicalIndex;
    if (status) status.textContent = `${activeIndex + 1} / ${slides.length}`;
  };

  const goTo = (index, behavior) => {
    const previousIndex = activeIndex;
    activeIndex = (index + slides.length) % slides.length;
    const wrapsToLast = index < 0 && previousIndex === 0 && slides.length > 1;
    const wrapsToFirst = index >= slides.length && previousIndex === slides.length - 1 && slides.length > 1;
    const physicalIndex = wrapsToLast ? 0 : wrapsToFirst ? slides.length + 1 : activeIndex + (slides.length > 1 ? 1 : 0);
    const target = physicalSlides[physicalIndex];
    if (wrapsToLast || wrapsToFirst) {
      pendingWrap = activeIndex;
      window.clearTimeout(wrapTimer);
    }
    centerSlide(target, behavior ?? (reducedMotion.matches ? 'auto' : 'smooth'));
    if (status) status.textContent = `${activeIndex + 1} / ${slides.length}`;
    if (wrapsToLast || wrapsToFirst) {
      wrapTimer = window.setTimeout(finishWrap, reducedMotion.matches ? 0 : 900);
    }
  };

  const stopTimer = () => {
    window.clearInterval(timer);
    timer = undefined;
  };

  const startTimer = () => {
    stopTimer();
    if (paused || reducedMotion.matches || document.hidden) return;
    timer = window.setInterval(() => goTo(activeIndex + 1), 6500);
  };

  const setPaused = (value) => {
    paused = value;
    if (toggleButton) {
      toggleButton.textContent = paused ? 'Play' : 'Pause';
      toggleButton.setAttribute('aria-label', paused ? 'Play carousel' : 'Pause carousel');
    }
    startTimer();
  };

  previousButton?.addEventListener('click', () => {
    goTo(activeIndex - 1);
    startTimer();
  });
  nextButton?.addEventListener('click', () => {
    goTo(activeIndex + 1);
    startTimer();
  });
  toggleButton?.addEventListener('click', () => setPaused(!paused));
  track.addEventListener('scroll', () => window.requestAnimationFrame(updateStatus), { passive: true });
  track.addEventListener('scrollend', finishWrap);
  carousel.addEventListener('pointerenter', stopTimer);
  carousel.addEventListener('pointerleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', startTimer);
  document.addEventListener('visibilitychange', startTimer);
  reducedMotion.addEventListener('change', () => setPaused(reducedMotion.matches));

  if (reducedMotion.matches && toggleButton) toggleButton.hidden = true;
  if (slides.length > 1) centerSlide(physicalSlides[1], 'instant');
  updateStatus();
  startTimer();
});

document.querySelectorAll('.faq-list details').forEach((details) => {
  const summary = details.querySelector('summary');
  const answer = details.querySelector('.faq-answer');
  if (!summary || !answer) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let expanded = details.open;
  let finishTransition;
  let animationFrame;
  let fallbackTimer;

  const clearTransition = () => {
    if (finishTransition) answer.removeEventListener('transitionend', finishTransition);
    window.cancelAnimationFrame(animationFrame);
    window.clearTimeout(fallbackTimer);
    finishTransition = undefined;
  };

  const resetAnswerStyles = () => {
    answer.style.removeProperty('height');
    answer.style.removeProperty('opacity');
    answer.style.removeProperty('overflow');
  };

  summary.addEventListener('click', (event) => {
    event.preventDefault();
    const opening = !expanded;
    expanded = opening;

    if (reducedMotion.matches) {
      clearTransition();
      details.open = opening;
      resetAnswerStyles();
      return;
    }

    clearTransition();
    const startHeight = details.open ? answer.getBoundingClientRect().height : 0;
    const startOpacity = details.open ? getComputedStyle(answer).opacity : '0';
    details.open = true;
    answer.style.height = `${startHeight}px`;
    answer.style.opacity = startOpacity;
    answer.style.overflow = 'hidden';
    void answer.offsetHeight;

    animationFrame = window.requestAnimationFrame(() => {
      answer.style.height = `${opening ? answer.scrollHeight : 0}px`;
      answer.style.opacity = opening ? '1' : '0';
    });

    const finish = () => {
      if (!opening) details.open = false;
      resetAnswerStyles();
      clearTransition();
    };

    finishTransition = (transitionEvent) => {
      if (transitionEvent.target === answer && transitionEvent.propertyName === 'height') finish();
    };
    answer.addEventListener('transitionend', finishTransition);
    fallbackTimer = window.setTimeout(finish, 450);
  });
});
