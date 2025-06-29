var typed = new Typed('#element', {
    strings: ['Web Developer', 'Cyber Security Learner', 'Linux Enthusiast'],
    typeSpeed: 50,
});
var typed2 = new Typed('#Elements', {
    strings: ['Projects >'],
    typeSpeed: 50,
});

// Example: Dynamically set the current year
document.addEventListener('DOMContentLoaded', () => {
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) {
    footerBottom.innerHTML += `<br>© ${new Date().getFullYear()} All rights reserved.`;
  }
});
