// Masquer les images au départ
gsap.set(".question, .reponse, .mbackground", { opacity: 0, rotate: 0 });

// Animation en fondu
gsap.to(".mbackground", {
  opacity: 1,
  duration: 1,
  delay: 0
});

gsap.to(".question", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  delay: 0.3,
  ease: "power2.out",
  rotate: -5,
});

gsap.to(".reponse", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  delay: 1,
  ease: "power2.out",
  rotate: 7,
});