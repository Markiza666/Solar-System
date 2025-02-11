import { domObjects, modalElements } from './domElements.js';
import { planetColors } from './variables.js';
import { PlanetData } from './interface.js'; // Importerar PlanetData

// Öppnar modalen för att visa information om klickad himlakropp med korrekt färg till vänster
const showModal = (color: string): void => {   // Typar color
    if (domObjects.popup) {domObjects.popup.style.display = 'block';};
    if (domObjects.header) {domObjects.header.style.visibility = 'hidden';};
    if (domObjects.planets) {domObjects.planets.style.visibility = 'hidden';};
    if (domObjects.starPlanet) {domObjects.starPlanet.style.backgroundColor = color;};
    if (modalElements.atmosphere) {
        modalElements.atmosphere.style.display = 'block';
        modalElements.atmosphere.style.backgroundColor = color;
        modalElements.atmosphere.style.opacity ='0.35';
    };
    if (modalElements.corona) {modalElements.corona.style.display = 'block';
        modalElements.corona.style.backgroundColor = color;
        modalElements.corona.style.opacity ='0.25';
    };
    
    if (modalElements.closeBtn) {
        modalElements.closeBtn.addEventListener('click', () => {
            if (domObjects.popup) {domObjects.popup.style.display = 'none';};
            if (domObjects.header) {domObjects.header.style.visibility = 'visible';};
            if (domObjects.planets) {domObjects.planets.style.visibility = 'visible';};
            if (domObjects.starPlanet) {domObjects.starPlanet.style.backgroundColor = '' + planetColors.starPlanet;};
            if (modalElements.atmosphere) {modalElements.atmosphere.style.display = 'none';};
            if (modalElements.corona) {modalElements.corona.style.display = 'none';};
        });
    }
}

// Lägger in informationsdetaljer i modalen
const showDetails = (details: PlanetData) : void => {  
    if (modalElements.planetName && modalElements.planetLatinName && modalElements.description && modalElements.circumference && modalElements.distance && modalElements.maxTemp && modalElements.minTemp) {
        modalElements.planetName.innerText = details.name;
        modalElements.planetLatinName.innerText = details.latinName;
        modalElements.description.innerText = details.desc;
        modalElements.circumference.innerText = details.circumference + ' km';
        modalElements.distance.innerText = details.distance + ' km';
        modalElements.maxTemp.innerHTML = details.temp.day + ' &deg C';             // Måste vara innerHTML för att kunna visa grad-symbol
        modalElements.minTemp.innerHTML = details.temp.night + ' &#176 C';
    }              // Måste vara innerHTML för att kunna visa grad-symbol
}

// Lägger in eventuella månar i modalen
const showMoons = (planetInfo: PlanetData): void => {
    if (modalElements && modalElements.moons) { // Viktig kontroll!
        if (planetInfo.moons.length === 0) {
            modalElements.moons.innerText = `${planetInfo.name} har inga månar`;
        } else {
            modalElements.moons.innerText = planetInfo.moons.join(', ');
        }
    } else {
        console.error("modalElements eller modalElements.moons är null!");
    }
};

// Funktionen för att öppna modal/popup och presentera informationen
let presentInfo = (dataToPresent: PlanetData, colorKey: string) => {    // Typar argumenten
    showModal(colorKey);
    showDetails(dataToPresent);
    showMoons(dataToPresent);
}

export { presentInfo }