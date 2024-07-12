// source: https://www.youtube.com/watch?v=pBv7igaxfQE&t=8s

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const topNavMenu = document.querySelector(".topnav__menu");
const media = window.matchMedia("(width <= 766px)");
const main = document.querySelector("main")
const body = document.querySelector("body")

function setUpTopNav(e) {
  if (e.matches) {
    //is mobile
    console.log("is mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none"
  } else {
    //is tablet/desktop
    console.log("is desktop");
    topNavMenu.removeAttribute("inert");
    closeMobileMenu()
  }
}

export function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.classList.toggle("open", true);
  topNavMenu.removeAttribute("inert")
  topNavMenu.removeAttribute("style")
  main.setAttribute("inert", "")
  bodyScrollLockUpgrade.disableBodyScroll(body)
  btnClose.focus();
}

export function closeMobileMenu() {
  btnClose.setAttribute("aria-expanded", "false");
  topNavMenu.classList.toggle("open", false);
  topNavMenu.setAttribute("inert", "")
  main.removeAttribute("inert")
  bodyScrollLockUpgrade.enableBodyScroll(body)
  btnOpen.focus()

  setTimeout(() => {
    topNavMenu.style.transition = "none"
  }, 500)
}

setUpTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setUpTopNav(e);
});
