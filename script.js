// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  });
  
  // Additional GSAP Animations
  gsap.from(".header-content", {
    duration: 2,
    y: -50,
    opacity: 0,
    ease: "power3.out",
  });
  
  gsap.from(".project", {
    scrollTrigger: ".project",
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.3,
  });
  