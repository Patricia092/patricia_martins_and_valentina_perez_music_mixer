console.log("It is working!");


// Drag and drop functionality
const characterSpace = document.querySelector(".characters-space"),
    instruments = document.querySelectorAll(".instruments img"),
    instrumentsImg = document.querySelectorAll(".instruments-image img"),
    dropZones = document.querySelectorAll(".flexbox-characters");

let draggedInstrument;

function handleStartDrag() {
    draggedInstrument = this;
}

function handleDragOver(e) {

    e.preventDefault();

    console.log("dragged over me")

}

function handleDrop(e) {
    debugger;
    e.preventDefault();

    console.log("dropped something on me");
    // This line moves the dragged piece from the left side of the board
    // into whatever dropzone we choose.

    // if (this.children.length >= 1) {
    //     return;
    // }
    this.appendChild(draggedInstrument);

}

instruments.forEach(instrument => instrument.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));



// modal  information functionality

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