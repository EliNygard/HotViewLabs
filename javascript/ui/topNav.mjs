// source: https://www.youtube.com/watch?v=pBv7igaxfQE&t=8s

let btnOpen = document.querySelector("#btnOpen");
let btnClose = document.querySelector("#btnClose");
let topNavMenu = document.querySelector(".topnav__menu");
let media = window.matchMedia("(width <= 766px)");
let main = document.querySelector("main");
let body = document.querySelector("body");
console.log(btnOpen);

function setUpTopNav(e) {
  if (e.matches) {
    //is mobile
    console.log("is mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none";
  } else {
    //is tablet/desktop
    console.log("is desktop");
    topNavMenu.removeAttribute("inert");
    closeMobileMenu();
  }
}

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.classList.toggle("open", true);
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnClose.setAttribute("aria-expanded", "false");
  topNavMenu.classList.toggle("open", false);
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

function initializeTopNav() {
  setUpTopNav(media);

  btnOpen.addEventListener("click", openMobileMenu);
  btnClose.addEventListener("click", closeMobileMenu);

  media.addEventListener("change", function (e) {
    setUpTopNav(e);
  });
}

initializeTopNav()
