let menu = document.querySelector(`.menu`);
let sideBar = document.querySelector(`.sidebar`);

function openSidebar() {
  sideBar.classList.add(`sidebar_active`);
}

menu.addEventListener(`click`, openSidebar);




let closeBtn = document.querySelector(`.close_sidebar`);

function closeSideBar() {
    sideBar.classList.remove(`sidebar_active`);
}

closeBtn.addEventListener(`click`, closeSideBar);
