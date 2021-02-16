let img = document.getElementById("girl-img");
let imgPhone = document.getElementById("phoneIconHeader");
let mainForm = document.getElementById("main-form");
let welcomeSection = document.getElementById("welcome-section");

window.addEventListener('resize', HideGirlImg);
window.addEventListener('resize', ChangeSizeMainForm);
window.addEventListener('resize', HideImagePhone);
window.addEventListener('resize', ChangeMarginTop);

mainForm.classList.add("hght-130");

function HideGirlImg() {
    if (window.innerWidth < 991) {
        img.classList.add("hidden");
    } else {
        img.classList.remove("hidden");
    }
}

function ChangeSizeMainForm(){
    if (window.innerWidth > 991) {
        mainForm.classList.add("hght-130");
    } else {
        mainForm.classList.remove("hght-130");
    }
}

function HideImagePhone(){
    if (window.innerWidth < 991) {
        imgPhone.classList.add("hidden");
    } else {
        imgPhone.classList.remove("hidden");
    }
}

function ChangeMarginTop(){
    if (window.innerWidth < 990) {
        welcomeSection.classList.add("mt-200");
    } else {
        welcomeSection.classList.remove("mt-200");
    }
}

window.onload = () => {
    HideGirlImg();
    ChangeSizeMainForm();
    HideImagePhone();
    ChangeMarginTop();
}