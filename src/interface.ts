interface Temp { //Detta interface beskriver hur temp-objektet i PlanetData ser ut.
    day: number;
    night: number;
}

interface PlanetData { //Detta interface beskriver hur systemData-arrayn ser ut.
    name: string;
    latinName: string;
    desc: string;
    circumference: number;
    distance: number;
    temp: Temp;
    moons: string[];
}
interface domObjects {
    starPlanet: HTMLElement | null;
    mercury:  HTMLElement | null;
    venus:  HTMLElement | null;
    earth:  HTMLElement | null;
    mars:  HTMLElement | null;
    jupiter:  HTMLElement | null;
    saturn:  HTMLElement | null;
    uranus:  HTMLElement | null;
    neptune:  HTMLElement | null;
    header:  HTMLElement | null;
    planets:  HTMLElement | null;
    popup:  HTMLElement | null;
}

interface modalElements {
    atmosphere: HTMLElement | null;
    corona: HTMLElement | null;
    planetName: HTMLElement | null;
    planetLatinName: HTMLElement | null;
    description: HTMLElement | null;
    circumference: HTMLElement | null;
    distance: HTMLElement | null;
    maxTemp: HTMLElement | null;
    minTemp: HTMLElement | null;
    moons: HTMLElement | null;
    closeBtn: HTMLElement | null;
}

export { PlanetData, domObjects, modalElements }