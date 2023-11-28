
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.querySelector('.btn-mobile-nav'); // Fixed the selector
const mobileMenuCloseBtn = document.querySelector('.btn-mobile-nav-close'); // Fixed the selector

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
}   
);


mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
}
);


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.add('hidden');
    }
}  );

