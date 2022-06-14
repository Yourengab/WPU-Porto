// hamburger
const navMenu = document.querySelector("#navMenu");
const hamburger = document.querySelector("#hamburger");
// Navmenu Toggle
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const top = document.querySelector("#to-top");
  const navbar = document.querySelector("#navbar");
  const fixedNav = navbar.offsetTop;
  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("fixed-nav");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    navbar.classList.remove("fixed-nav");
    top.classList.remove("flex");
    top.classList.add("hidden");
  }
};

// Close menu when click outside
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("ham-active");
    navMenu.classList.add("hidden");
  }
});
// Darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  darkToggle.checked = false;
}
