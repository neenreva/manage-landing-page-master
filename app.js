document.addEventListener("click", (e) => {
  const isHamBtn = e.target.matches("[data-ham-btn]");
  if (isHamBtn) {
    let navList = document.querySelector(".nav__list");
    let menuIcon = document.querySelector(".nav__btn-mobile");
    navList.classList.toggle("active");
    menuIcon.classList.toggle("active");
  }
});
