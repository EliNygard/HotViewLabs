const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menu = document.querySelector(".topnav__menu")

export function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  menu.classList.toggle("open", true)
}

export function closeMobileMenu() {
  btnClose.setAttribute("aria-expanded", "false");
  menu.classList.toggle("open", false)
}

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
