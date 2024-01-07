// For the header to hide when scrolling down and show when scrolling up
document.body.addEventListener("scroll", () => {
  // console.log('scrolling')
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("main-header").style.top = "-100px";
  } else {
    document.getElementById("main-header").style.top = "0px";
  }
});

// for mobile devices menu open / close
const hamBtn = document.querySelector(".hamburger-menu");

function hamburgerHandler(e) {
  if (e.classList.contains("change")) {
    e.classList.remove("change");
    document.getElementById("mobileNav").style.width = "0%";
  } else {
    e.classList.add("change");
    document.getElementById("mobileNav").style.width = "100%";
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
  hamBtn.classList.remove("change");
}

// Window on load function
window.onload = () => {
  console.log("loaded");
  document.getElementById("main-header").style.top = "0";
};
