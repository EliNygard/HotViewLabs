// source: https://www.youtube.com/watch?v=pBv7igaxfQE&t=8s

export function initializeTopNav() {
  const btnOpen = document.querySelector("#btnOpen");
  const btnClose = document.querySelector("#btnClose");
  const media = window.matchMedia("(width < 766px)");
  const topNavMenu = document.querySelector(".topnav__menu");
  const main = document.querySelector("main");
  const body = document.querySelector("body");

  function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
    topNavMenu.classList.add("open");
    topNavMenu.removeAttribute("inert");
    topNavMenu.removeAttribute("style");
    main.setAttribute("inert", "");
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
  }

  function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
    topNavMenu.classList.remove("open");
    topNavMenu.setAttribute("inert", "");
    main.removeAttribute("inert");
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();

    setTimeout(() => {
      topNavMenu.style.transition = "none";
    }, 500);
  }

  function setupTopNav(e) {
    if (e.matches) {
      // is mobile
      console.log("is mobile");
      topNavMenu.setAttribute("inert", "");
      topNavMenu.style.transition = "none";
    } else {
      // is tablet/desktop
      console.log("is desktop");
      closeMobileMenu();
      topNavMenu.removeAttribute("inert");
    }
  }

  setupTopNav(media);

  btnOpen.addEventListener("click", () => {
    console.log("open mobile menu");
    openMobileMenu();
  });
  btnClose.addEventListener("click", closeMobileMenu);

  media.addEventListener("change", function (e) {
    setupTopNav(e);
  });
}





// function setUpTopNav(e) {
//   const topNavMenu = document.querySelector(".topnav__menu");
//   if (e.matches) {
//     //is mobile
//     topNavMenu.setAttribute("inert", "");
//     topNavMenu.style.transition = "none";
//   } else {
//     //is tablet/desktop
//     topNavMenu.removeAttribute("inert");
//     closeMobileMenu();
//   }
// }

// function openMobileMenu() {
//   const btnOpen = document.querySelector("#btnOpen");
//   const btnClose = document.querySelector("#btnClose");
//   const topNavMenu = document.querySelector(".topnav__menu");
//   const main = document.querySelector("main");
//   const body = document.querySelector("body");
//   btnOpen.setAttribute("aria-expanded", "true");
//   topNavMenu.classList.toggle("open", true);
//   topNavMenu.removeAttribute("inert");
//   topNavMenu.removeAttribute("style");
//   main.setAttribute("inert", "");
//   bodyScrollLockUpgrade.disableBodyScroll(body);
//   btnClose.focus();
// }

// function closeMobileMenu() {
//   const btnClose = document.querySelector("#btnClose");
//   const btnOpen = document.querySelector("#btnOpen");
//   const topNavMenu = document.querySelector(".topnav__menu");
//   const main = document.querySelector("main");
//   const body = document.querySelector("body");
//   btnClose.setAttribute("aria-expanded", "false");
//   topNavMenu.classList.toggle("open", false);
//   topNavMenu.setAttribute("inert", "");
//   main.removeAttribute("inert");
//   bodyScrollLockUpgrade.enableBodyScroll(body);
//   btnOpen.focus();

//   setTimeout(() => {
//     topNavMenu.style.transition = "none";
//   }, 500);
// }

// export function initializeTopNav() {
//   const btnClose = document.querySelector("#btnClose");
//   const btnOpen = document.querySelector("#btnOpen");
//   const media = window.matchMedia("(width <= 766px)");
//   setUpTopNav(media);

//   btnOpen.addEventListener("click", openMobileMenu);
//   btnClose.addEventListener("click", closeMobileMenu);

//   media.addEventListener("change", function (e) {
//     setUpTopNav(e);
//   });
// }
