window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty(
    '--scrollTop',
    `${window.scrollY}px`
  );
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});
