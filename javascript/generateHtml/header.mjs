export async function generateHeaderHtml() {
  const header = document.querySelector("header");

  const linkHome = document.createElement("a");
  linkHome.setAttribute("title", "HotView Labs Blog");
  linkHome.classList.add("font-primary", "content-left");
  linkHome.textContent = "HotView Labs";
  linkHome.addEventListener("click", () => {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/post") || currentPath.includes("/account")) {
      window.location.href = "../index.html";
    } else {
      window.location.href = "index.html";
    }
  });

  const nav = document.createElement("nav");
  nav.classList.add("font-primary", "content-right")

  const spanAria = document.createElement("span");
  spanAria.setAttribute("id", "nav-label");
  spanAria.setAttribute("hidden", "");
  spanAria.textContent = "Navigation";

  const btnOpen = document.createElement("button");
  btnOpen.setAttribute("id", "btnOpen");
  btnOpen.classList.add("topnav__open", "hide-on-desktop");
  btnOpen.setAttribute("aria-expanded", "false");
  btnOpen.setAttribute("aria-labelledby", "nav-label");
  btnOpen.textContent = "Menu";

  const topNavMenu = document.createElement("div");
  topNavMenu.classList.add("topnav__menu");
  topNavMenu.setAttribute("role", "dialog");
  topNavMenu.setAttribute("aria-labelledby", "nav-label");

  const btnClose = document.createElement("button");
  btnClose.setAttribute("id", "btnClose");
  btnClose.classList.add("topnav__close", "hide-on-desktop");
  btnClose.setAttribute("aria-label", "Close");
  btnClose.textContent = "Close";

  const ulLinks = document.createElement("ul");
  ulLinks.classList.add("topnav__links");

  const liSearch = document.createElement("li");
  liSearch.classList.add("topnav__item");

  const btnSearch = document.createElement("div");
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass");

  const liLogin = document.createElement("li");
  liLogin.classList.add("topnav__item");

  const linkLogin = document.createElement("a");
  linkLogin.title = "Log into your account";
  linkLogin.textContent = "Log in";
  linkLogin.addEventListener("click", () => {
    let targetPath = "./account/login.html";

    if (window.location.pathname.includes("/post")) {
      targetPath = "../account/login.html";
    } else if (window.location.pathname.includes("/account")) {
      targetPath = "./login.html";
    }

    window.location.href = targetPath;
  });

  const liRegister = document.createElement("li");
  liRegister.classList.add("topnav__item");

  const linkRegister = document.createElement("a");
  linkRegister.title = "Register an account";
  linkRegister.textContent = "Register";
  linkRegister.addEventListener("click", () => {
    let targetPath = "./account/register.html";

    if (window.location.pathname.includes("/post")) {
      targetPath = "../account/register.html";
    } else if (window.location.pathname.includes("/account")) {
      targetPath = ".register.html";
    }
    window.location.href = targetPath;
  });

  ulLinks.append(liSearch, liLogin, liRegister);
  liRegister.appendChild(linkRegister);
  liLogin.appendChild(linkLogin);
  liSearch.appendChild(btnSearch);
  btnSearch.appendChild(searchIcon);
  topNavMenu.append(btnClose, ulLinks);
  nav.append(spanAria, btnOpen, topNavMenu);
  // rightContainer.append(searchBtn, linkLogin, linkRegister);
  // leftContainer.appendChild(linkHome);
  // nav.append(leftContainer, rightContainer);
  header.append(linkHome, nav);
}
