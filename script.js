const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.querySelector('.btn-mobile-nav'); // Fixed the selector

console.log(mobileMenuBtn);
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
