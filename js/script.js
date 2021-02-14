let img = document.getElementById("girl-img");
window.addEventListener('resize', HideImg);

function HideImg() {
    console.log(window.innerWidth);
    if (window.innerWidth < 997) {
        img.classList.add("girl-img-hidden");
    } else {
        img.classList.remove("girl-img-hidden");
    }
}