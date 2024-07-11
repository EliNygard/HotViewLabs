const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

export function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
}

export function closeMobileMenu() {
  btnClose.setAttribute("aria-expanded", "false");
}

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
