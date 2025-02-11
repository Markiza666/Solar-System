"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentInfo = void 0;
const domElements_js_1 = require("./domElements.js");
const variables_js_1 = require("./variables.js");
// Öppnar modalen för att visa information om klickad himlakropp med korrekt färg till vänster
const showModal = (color) => {
    if (domElements_js_1.domObjects.popup) {
        domElements_js_1.domObjects.popup.style.display = 'block';
    }
    ;
    if (domElements_js_1.domObjects.header) {
        domElements_js_1.domObjects.header.style.visibility = 'hidden';
    }
    ;
    if (domElements_js_1.domObjects.planets) {
        domElements_js_1.domObjects.planets.style.visibility = 'hidden';
    }
    ;
    if (domElements_js_1.domObjects.starPlanet) {
        domElements_js_1.domObjects.starPlanet.style.backgroundColor = color;
    }
    ;
    if (domElements_js_1.modalElements.atmosphere) {
        domElements_js_1.modalElements.atmosphere.style.display = 'block';
        domElements_js_1.modalElements.atmosphere.style.backgroundColor = color;
        domElements_js_1.modalElements.atmosphere.style.opacity = '0.35';
    }
    ;
    if (domElements_js_1.modalElements.corona) {
        domElements_js_1.modalElements.corona.style.display = 'block';
        domElements_js_1.modalElements.corona.style.backgroundColor = color;
        domElements_js_1.modalElements.corona.style.opacity = '0.25';
    }
    ;
    if (domElements_js_1.modalElements.closeBtn) {
        domElements_js_1.modalElements.closeBtn.addEventListener('click', () => {
            if (domElements_js_1.domObjects.popup) {
                domElements_js_1.domObjects.popup.style.display = 'none';
            }
            ;
            if (domElements_js_1.domObjects.header) {
                domElements_js_1.domObjects.header.style.visibility = 'visible';
            }
            ;
            if (domElements_js_1.domObjects.planets) {
                domElements_js_1.domObjects.planets.style.visibility = 'visible';
            }
            ;
            if (domElements_js_1.domObjects.starPlanet) {
                domElements_js_1.domObjects.starPlanet.style.backgroundColor = '' + variables_js_1.planetColors.starPlanet;
            }
            ;
            if (domElements_js_1.modalElements.atmosphere) {
                domElements_js_1.modalElements.atmosphere.style.display = 'none';
            }
            ;
            if (domElements_js_1.modalElements.corona) {
                domElements_js_1.modalElements.corona.style.display = 'none';
            }
            ;
        });
    }
};
// Lägger in informationsdetaljer i modalen
const showDetails = (details) => {
    if (domElements_js_1.modalElements.planetName && domElements_js_1.modalElements.planetLatinName && domElements_js_1.modalElements.description && domElements_js_1.modalElements.circumference && domElements_js_1.modalElements.distance && domElements_js_1.modalElements.maxTemp && domElements_js_1.modalElements.minTemp) {
        domElements_js_1.modalElements.planetName.innerText = details.name;
        domElements_js_1.modalElements.planetLatinName.innerText = details.latinName;
        domElements_js_1.modalElements.description.innerText = details.desc;
        domElements_js_1.modalElements.circumference.innerText = details.circumference + ' km';
        domElements_js_1.modalElements.distance.innerText = details.distance + ' km';
        domElements_js_1.modalElements.maxTemp.innerHTML = details.temp.day + ' &deg C'; // Måste vara innerHTML för att kunna visa grad-symbol
        domElements_js_1.modalElements.minTemp.innerHTML = details.temp.night + ' &#176 C';
    } // Måste vara innerHTML för att kunna visa grad-symbol
};
// Lägger in eventuella månar i modalen
const showMoons = (planetInfo) => {
    if (domElements_js_1.modalElements && domElements_js_1.modalElements.moons) { // Viktig kontroll!
        if (planetInfo.moons.length === 0) {
            domElements_js_1.modalElements.moons.innerText = `${planetInfo.name} har inga månar`;
        }
        else {
            domElements_js_1.modalElements.moons.innerText = planetInfo.moons.join(', ');
        }
    }
    else {
        console.error("modalElements eller modalElements.moons är null!");
    }
};
// Funktionen för att öppna modal/popup och presentera informationen
let presentInfo = (dataToPresent, colorKey) => {
    showModal(colorKey);
    showDetails(dataToPresent);
    showMoons(dataToPresent);
};
exports.presentInfo = presentInfo;
