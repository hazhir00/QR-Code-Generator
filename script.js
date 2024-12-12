const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let inputFiled = document.getElementById("inputFiled");
let generateBtn = document.getElementById("generateBtn");

function generateQR() {
    if (inputFiled.value.length > 0) {
        qrImg.src = apiURL + inputFiled.value;
        imgBox.classList.add("show-img");
    } else {
        inputFiled.classList.add("error");
        setTimeout(() => {
            inputFiled.classList.remove("error");
        }, 1000);
    }
}

generateBtn.addEventListener("click", generateQR);
