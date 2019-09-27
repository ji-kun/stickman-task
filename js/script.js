const sideBtns = document.querySelectorAll(".sntop > div");
const mainDivs = document.querySelectorAll(".main > div");
const noNavBtn = document.getElementsByClassName("arrow-left")[0];
const navBtn = document.getElementsByClassName("burgers")[0];
const container = document.getElementsByClassName("container")[0];

let previ = 0;

const showDiv = (i) => {
    mainDivs[previ].classList.remove("active");
    sideBtns[previ].classList.remove("active");

    mainDivs[i].classList.add("active");
    sideBtns[i].classList.add("active");
    
    previ = i;
}

const hideNav = () => {
    container.classList.add("nonav");
}
const showNav = () => {
    container.classList.remove("nonav");
}

sideBtns.forEach((btn, i) => {
    btn.addEventListener("click", (evt) => {showDiv(i)});
});

noNavBtn.addEventListener("click", hideNav);
navBtn.addEventListener("click", showNav);