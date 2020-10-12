let menuOut = false;

toggleMenu = () => {
  let menu = document.getElementById("mainMenu");
  if (menuOut) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
  menuOut = !menuOut;
};

delayNavigation = evt => {
  evt.preventDefault();
  setTimeout(() => {
    window.location.href = evt.target.getAttribute("href");
  }, 400);
};

document.getElementById("menuButton").addEventListener("click", toggleMenu);

let menuLinks = document.querySelectorAll(".menuItem a");
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", delayNavigation);
  menuLinks[i].addEventListener("click", toggleMenu);
}
