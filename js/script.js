let img = document.getElementById("girl-img");
let mainForm = document.getElementById("main-form");
mainForm.classList.add("hght-130");
window.addEventListener('resize', HideGirlImg);
window.addEventListener('resize', ChangeSize);

function HideGirlImg() {
    if (window.innerWidth < 997) {
        img.classList.add("girl-img-hidden");
    } else {
        img.classList.remove("girl-img-hidden");
    }
}

function ChangeSize(){
    if (window.innerWidth > 997) {
        mainForm.classList.add("hght-130");
    } else {
        mainForm.classList.remove("hght-130");
    }
}