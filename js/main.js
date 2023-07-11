const characterSpace = document.querySelector(".characters-space"),
    instruments = document.querySelectorAll(".instruments img"),
    instrumentsImg = document.querySelectorAll(".instruments-image img"),
    dropZones = document.querySelectorAll(".flexbox-characters"),
    music = document.querySelector('.track-ref'),
    audioEl = document.querySelector('audio'),
    playButton = document.querySelector('.playButton'),
    pauseButton = document.querySelector('.pauseButton'),
    rewindButton = document.querySelector('.rewindButton'),
    volSlider = document.querySelector('.volumeControl');

let draggedInstrument;

//Functions

function handleStartDrag() {
    draggedInstrument = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log("dragged over me")
}

function handleDrop(e) {
    e.preventDefault();
    this.appendChild(draggedInstrument);
    changeVisibility("image" + draggedInstrument.parentNode.id, true);
    changeVisibility("instrument" + draggedInstrument.parentNode.id, false);
    playAudio(draggedInstrument.parentNode.id);
}

function changeVisibility(id, show) {
    if (show) {
        document.getElementById(id).style.visibility = "visible";
    } else {
        document.getElementById(id).style.visibility = "hidden";
    }
}

function playAudio(id) {
    let audio = document.getElementById("audio" + id);
    audio.load();
    audio.play();
}

function stopAudio(id) {
    let audio = document.getElementById("audio" + id);
    audio.pause();
    audio.currentTime = 0;
    changeVisibility("image" + id, false);
    let instrument = document.getElementById("instrument" + id),
    instrumentBox = document.getElementById("instrumentbox" + id);
    changeVisibility("instrument" + draggedInstrument.parentNode.id, true);
    instrumentBox.appendChild(instrument);
}

function pauseAudio(id) {
    let audio = document.getElementById("audio" + id);
    audio.pause();
}

function setVol(e, id) {
    let audio = document.getElementById("audio" + id);
    audio.volume = (e.value / 100);
}

// Event Listeners
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