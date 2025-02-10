export const domObjects = {
    starPlanet: document.getElementById('starPlanet') as HTMLElement, // Type assertion
    mercury: document.getElementById('mercury') as HTMLElement,
    venus: document.getElementById('venus') as HTMLElement,
    earth: document.getElementById('earth') as HTMLElement,
    mars: document.getElementById('mars') as HTMLElement,
    jupiter: document.getElementById('jupiter') as HTMLElement,
    saturn: document.getElementById('saturn') as HTMLElement,
    uranus: document.getElementById('uranus') as HTMLElement,
    neptune: document.getElementById('neptune') as HTMLElement,
    header: document.getElementById('header') as HTMLElement,
    planets: document.getElementById('planets') as HTMLElement,
    popup: document.getElementById('popup') as HTMLElement
};

export const modalElements = {
    atmosphere: document.getElementById('starPlanet-eff2') as HTMLElement,
    corona: document.getElementById('starPlanet-eff3') as HTMLElement,
    planetName: document.getElementById('planet-name') as HTMLElement,
    planetLatinName: document.getElementById('planet-latin-name') as HTMLElement,
    description: document.getElementById('description') as HTMLElement,
    circumference: document.getElementById('circumference') as HTMLElement,
    distance: document.getElementById('distance') as HTMLElement,
    maxTemp: document.getElementById('max-temp') as HTMLElement,
    minTemp: document.getElementById('min-temp') as HTMLElement,
    moons: document.getElementById('moons') as HTMLElement,
    closeBtn: document.getElementById('close') as HTMLElement
};
