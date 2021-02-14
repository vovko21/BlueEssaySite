let img = document.getElementById("girl-img");
let imgPhone = document.getElementById("phoneIconHeader");
let mainForm = document.getElementById("main-form");
mainForm.classList.add("hght-130");
window.addEventListener('resize', HideGirlImg);
window.addEventListener('resize', ChangeSizeMainForm);
window.addEventListener('resize', HideImagePhone);

function HideGirlImg() {
    if (window.innerWidth < 997) {
        img.classList.add("hidden");
    } else {
        img.classList.remove("hidden");
    }
}

function ChangeSizeMainForm(){
    if (window.innerWidth > 997) {
        mainForm.classList.add("hght-130");
    } else {
        mainForm.classList.remove("hght-130");
    }
}

function HideImagePhone(){
    if (window.innerWidth < 997) {
        imgPhone.classList.add("hidden");
    } else {
        imgPhone.classList.remove("hidden");
    }
}