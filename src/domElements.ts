import { domObjects, modalElements } from "./interface";

const domObjects: domObjects = {
    starPlanet: document.getElementById('starPlanet'), // Type assertion
    mercury: document.getElementById('mercury'),
    venus: document.getElementById('venus'),
    earth: document.getElementById('earth'),
    mars: document.getElementById('mars'),
    jupiter: document.getElementById('jupiter'),
    saturn: document.getElementById('saturn'),
    uranus: document.getElementById('uranus'),
    neptune: document.getElementById('neptune'),
    header: document.getElementById('header'),
    planets: document.getElementById('planets'),
    popup: document.getElementById('popup')
};

const modalElements: modalElements = {
    atmosphere: document.getElementById('starPlanet-eff2'),
    corona: document.getElementById('starPlanet-eff3'),
    planetName: document.getElementById('planet-name'),
    planetLatinName: document.getElementById('planet-latin-name'),
    description: document.getElementById('description'),
    circumference: document.getElementById('circumference'),
    distance: document.getElementById('distance'),
    maxTemp: document.getElementById('max-temp'),
    minTemp: document.getElementById('min-temp'),
    moons: document.getElementById('moons'),
    closeBtn: document.getElementById('close')
};

export { domObjects, modalElements };