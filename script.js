const menuIcon = document.getElementById("menuIcon");
const menuNav = document.getElementById("menuNav");

menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  menuNav.classList.toggle("show");
});

menuNav.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  if (menuNav.classList.contains("show")) {
    menuNav.classList.remove("show");
  }
});
