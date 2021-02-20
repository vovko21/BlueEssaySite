let img = document.getElementById("girl-img");
let imgPhone = document.getElementById("phoneIconHeader");
let mainForm = document.getElementById("main-form");
let welcomeSection = document.getElementById("welcome-section");
let advSection = document.getElementById("adv-section");
let offImg = document.getElementById("off-img");
let socialsImg = document.getElementById("socials-img");
let feedbacksSection = document.getElementById("feedbacks");

window.addEventListener('resize', HideGirlImg);
window.addEventListener('resize', ChangeSizeMainForm);
window.addEventListener('resize', HideImagePhone);
window.addEventListener('resize', ChangeMarginTop);
window.addEventListener('resize', ChangeHghtAdvSection);
window.addEventListener('resize', HiddeOffImg);
window.addEventListener('resize', HiddeSocialsImg);
window.addEventListener('resize', FeedbacksSectionChangeSize);

mainForm.classList.add("hght-130");

function HideGirlImg() {
    if (window.innerWidth < 992) {
        img.classList.add("hidden");
    } else {
        img.classList.remove("hidden");
    }
}

function ChangeSizeMainForm() {
    if (window.innerWidth > 992) {
        mainForm.classList.add("hght-130");
    } else {
        mainForm.classList.remove("hght-130");
    }
}

function HideImagePhone() {
    if (window.innerWidth < 992) {
        imgPhone.classList.add("hidden");
    } else {
        imgPhone.classList.remove("hidden");
    }
}

function ChangeMarginTop() {
    if (window.innerWidth < 992) {
        welcomeSection.classList.add("mt-200");
    } else {
        welcomeSection.classList.remove("mt-200");
    }
}

function ChangeHghtAdvSection() {
    if (window.innerWidth < 992) {
        advSection.classList.add("hght-1200");
    } else {
        advSection.classList.remove("hght-1200");
    }
}

function HiddeOffImg() {
    if (window.innerWidth < 992) {
        offImg.classList.add("hidden");
    } else {
        offImg.classList.remove("hidden");
    }
}

function HiddeSocialsImg() {
    if (window.innerWidth < 992) {
        socialsImg.classList.add("hidden");
    } else {
        socialsImg.classList.remove("hidden");
    }
}

function FeedbacksSectionChangeSize() {
    if (window.innerWidth < 992) {
        feedbacksSection.classList.add("hght-400");
    } else {
        feedbacksSection.classList.remove("hght-400");
    }
}


window.onload = () => {
    HideGirlImg();
    ChangeSizeMainForm();
    HideImagePhone();
    ChangeMarginTop();
    ChangeHghtAdvSection();
    HiddeOffImg();
    HiddeSocialsImg();
    FeedbacksSectionChangeSize();
}