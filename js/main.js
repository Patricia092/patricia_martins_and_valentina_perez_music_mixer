console.log("It is working!");


// modal  information features

// Get the modal
const modalInfo = document.getElementById("modalInfo"),
    btnInfo = document.getElementById("btn-info"),
    spanInfo = document.getElementsByClassName("closeInfo")[0];

// When the user clicks the button, open the modal 
btnInfo.onclick = function () {
    modalInfo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanInfo.onclick = function () {
    modalInfo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalInfo) {
        modalInfo.style.display = "none";
    }
}

// modal Credits


const modalCred = document.getElementById("modalCred"),
    btnCred = document.getElementById("btn-cred"),
    spanCred = document.getElementsByClassName("closeCred")[0];

// When the user clicks the button, open the modal 
btnCred.onclick = function () {
    modalCred.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCred.onclick = function () {
    modalCred.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalInfo) {
        modalCred.style.display = "none";
    }
}