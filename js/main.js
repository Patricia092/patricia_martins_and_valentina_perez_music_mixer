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
    const characterId = this.getAttribute("data-character-id");
    const instrumentCharacterId = draggedInstrument.getAttribute("data-character-id");

    if (characterId === instrumentCharacterId) {
        this.appendChild(draggedInstrument);
        fadeInCharacter(characterId);
        changeVisibility("instrument" + characterId, false);
        playAudio(characterId);
    }
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


// Event Listeners
instruments.forEach(instrument => instrument.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


// Modal Functionality

// Function to toggle the display of a modal with a given class
function toggleModal(className) {
    const modal = document.querySelector(`.${className}`);
    if (modal) {
        modal.style.display = modal.style.display === "block" ? "none" : "block";
    }
}

// Function to close all modals
function closeAllModals() {
    document.querySelectorAll(".modal").forEach((modal) => {
        modal.style.display = "none";
    });
}

// Modals
const btnInfo = document.getElementsByClassName("btn-info");
const btnInstructions = document.getElementsByClassName("btn-instructions");
const btnCred = document.getElementsByClassName("btn-cred");

function addEventListenersToButtons(buttons, className) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            toggleModal(className);
        });
    }
}

// Close modals when clicking outside of them
window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Event Listeners

addEventListenersToButtons(btnInfo, "modalInfo");
addEventListenersToButtons(btnInstructions, "modalInstructions");
addEventListenersToButtons(btnCred, "modalCred");

// Close modals when clicking on close buttons
document.querySelectorAll(".closeInfo, .closeInstructions, .closeCred").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        closeAllModals();
    });
});

