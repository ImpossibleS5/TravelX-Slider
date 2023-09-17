const mobileNav = () => {
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavOverlay = document.querySelector(".mobile-nav__overlay");
  const openMobileNav = document.querySelector("#openMobileNavigation");
  const closeMobileNav = document.querySelector("#closeMobileNavigation");

  const open = () => {
    mobileNavOverlay.classList.replace("close", "open");
    mobileNav.classList.replace("close", "open");
  };

  const close = () => {
    mobileNavOverlay.classList.replace("open", "close");
    mobileNav.classList.replace("open", "close");
  };

  openMobileNav.addEventListener("click", open);
  closeMobileNav.addEventListener("click", close);
  mobileNavOverlay.addEventListener("click", close);
};

export default mobileNav;
