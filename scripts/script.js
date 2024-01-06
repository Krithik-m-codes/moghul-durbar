
// For the header to hide when scrolling down and show when scrolling up 
document.body.addEventListener('scroll', () => {
    // console.log('scrolling')
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("main-header").style.top = "-100px";
    } else {
        document.getElementById("main-header").style.top = "0px";
    }
})




// for mobile devices menu open / close 
const hamBtn = document.querySelector('.hamburger-menu');

function hamburgerHandler(e) {
    // e.preventDefault();
    e.classList.toggle('change');
}

// hamBtn.addEventListener('click', (e) => {
//     if (e.target.classList.contains('change')) {
//         e.target.classList.remove('change');
//     }
//     else {
//         e.target.classList.add('change');
//     }
//     console.log('clicked')
//     // const nav = document.querySelector('.mobNav-links');
//     // nav.classList.toggle('open');
// }
// )



window.onload = () => {
    console.log('loaded')
    document.getElementById("main-header").style.top = "0";
}


