const characterSpace = document.querySelector(".characters-space"),
    instruments = document.querySelectorAll(".instruments img"),
    instrumentsImg = document.querySelectorAll(".instruments-image img"),
    dropZones = document.querySelectorAll(".characters-box"),
    music = document.querySelector('.track-ref'),
    audioEl = document.querySelector('audio'),
    playButton = document.querySelector('.playButton'),
    pauseButton = document.querySelector('.pauseButton'),
    rewindButton = document.querySelector('.rewindButton'),
    volSlider = document.querySelector('.volumeControl');

let draggedInstrument;
let isFirstCharacter = true;

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
    fadeInCharacter(draggedInstrument.parentNode.id);
    changeVisibility("instrument" + draggedInstrument.parentNode.id, false);
    playAudio(draggedInstrument.parentNode.id);
}

function fadeInCharacter(id) {
    let character = document.getElementById("image" + id);
    let opacity = 0;
    let fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        } else {
            character.style.opacity = opacity;
            opacity += 0.01;
        }
    }, 10);
}

function fadeOutCharacter(id) {
    let character = document.getElementById("image" + id);
    let fadeOut = setInterval(() => {
        if (character.style.opacity > 0) {
            character.style.opacity -= 0.01;
        } else {
            clearInterval(fadeOut);
        }
    }, 10);
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
    fadeOutCharacter(id);
    let instrument = document.getElementById("instrument" + id),
        instrumentBox = document.getElementById("instrumentbox" + id);
    changeVisibility("instrument" + id, true);
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

function showTrackRef(element) {
    const trackRef = element.querySelector(".track-ref");
    trackRef.classList.remove("hide");
}

function hideTrackRef(element) {
    const trackRef = element.querySelector(".track-ref");
    trackRef.classList.add("hide");
}

// Event Listeners
instruments.forEach(instrument => instrument.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// Modal Functionality

// Information Modal
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

// Instructions Modal
const modalInstructions = document.getElementById("modalInstructions"),
    btnInstructions = document.getElementById("btn-instructions"),
    spanInstructions = document.getElementsByClassName("closeInstructions")[0];

// When the user clicks the button, open the modal 
btnInstructions.onclick = function () {
    modalInstructions.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanInstructions.onclick = function () {
    modalInstructions.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalInstructions) {
        modalInstructions.style.display = "none";
    }
}

// Credits Modal
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