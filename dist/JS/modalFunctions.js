"use strict";
// **************************************************
// Modul med funktionerna som presenterar informationen i modal-popup
// Har lagt alla presentationsfunktioner i denna modul för att få enkel överblick
// **************************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentInfo = void 0;
//Importerar variabler/pekare som behövs
const domElements_js_1 = require("../src/domElements.js");
const variables_js_1 = require("../src/variables.js");
// Öppnar modalen för att visa information om klickad himlakropp med korrekt färg till vänster
const showModal = (color) => {
    // Visar modalen med de extra färgringarna och döljer bakomliggande element
    domElements_js_1.domObjects.popup.style.display = 'block';
    domElements_js_1.domObjects.header.style.visibility = 'hidden';
    domElements_js_1.domObjects.planets.style.visibility = 'hidden';
    domElements_js_1.domObjects.starPlanet.style.backgroundColor = color;
    domElements_js_1.modalElements.atmosphere.style.display = 'block';
    domElements_js_1.modalElements.atmosphere.style.backgroundColor = color;
    domElements_js_1.modalElements.atmosphere.style.opacity = '0.35';
    domElements_js_1.modalElements.corona.style.display = 'block';
    domElements_js_1.modalElements.corona.style.backgroundColor = color;
    domElements_js_1.modalElements.corona.style.opacity = '0.25';
    // Lägger lyssnare på stängningsknappen och säger vad som ska hända
    domElements_js_1.modalElements.closeBtn.addEventListener('click', () => {
        domElements_js_1.domObjects.popup.style.display = 'none';
        domElements_js_1.domObjects.header.style.visibility = 'visible';
        domElements_js_1.domObjects.planets.style.visibility = 'visible';
        domElements_js_1.domObjects.starPlanet.style.backgroundColor = '' + variables_js_1.planetColors.starPlanet;
        domElements_js_1.modalElements.atmosphere.style.display = 'none';
        domElements_js_1.modalElements.corona.style.display = 'none';
    });
};
// Lägger in informationsdetaljer i modalen
const showDetails = (details) => {
    domElements_js_1.modalElements.planetName.innerText = details.name;
    domElements_js_1.modalElements.planetLatinName.innerText = details.latinName;
    domElements_js_1.modalElements.description.innerText = details.desc;
    domElements_js_1.modalElements.circumference.innerText = details.circumference + ' km';
    domElements_js_1.modalElements.distance.innerText = details.distance + ' km';
    domElements_js_1.modalElements.maxTemp.innerHTML = details.temp.day + ' &deg C'; // Måste vara innerHTML för att kunna visa grad-symbol
    domElements_js_1.modalElements.minTemp.innerHTML = details.temp.night + ' &#176 C'; // Måste vara innerHTML för att kunna visa grad-symbol
};
// Lägger in eventuella månar i modalen
const showMoons = (planetInfo) => {
    if (planetInfo.moons.length === 0) {
        domElements_js_1.modalElements.moons.innerText = planetInfo.name + ' har inga månar';
    }
    else {
        domElements_js_1.modalElements.moons.innerText = planetInfo.moons.join(', ');
    }
};
// Funktionen för att öppna modal/popup och presentera informationen
let presentInfo = (dataToPresent, colorKey) => {
    showModal(colorKey);
    showDetails(dataToPresent);
    showMoons(dataToPresent);
};
exports.presentInfo = presentInfo;
