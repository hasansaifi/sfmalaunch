const btn = document.querySelector("#myBtn");
const logo = document.querySelector(".logoText");


btn.addEventListener("click", toggleDisplay);

function toggleDisplay(){
    logo.style.display = "flex";
    btn.style.display = "none";
}

