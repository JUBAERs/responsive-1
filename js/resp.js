burger = document.querySelector(".burger");
navBar = document.querySelector(".navBar");
navlist = document.querySelector(".navlist");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class-resp");
  navlist.classList.toggle("v-class-resp");
  navBar.classList.toggle("h-nav-resp");
});
