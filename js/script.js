const sidebtns = document.querySelectorAll(".sntop > div");
const maindivs = document.querySelectorAll(".main > div");

let previ = 0;

const showDiv = (i) => {
    maindivs[previ].classList.remove("active");
    sidebtns[previ].classList.remove("active");

    maindivs[i].classList.add("active");
    sidebtns[i].classList.add("active");
    
    previ = i;
}

sidebtns.forEach((btn, i) => {
    btn.addEventListener("click", (evt) => {showDiv(i)});
});