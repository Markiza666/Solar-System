export interface Temp { //Detta interface beskriver hur temp-objektet i PlanetData ser ut.
    day: number;
    night: number;
}

export interface PlanetData { //Detta interface beskriver hur systemData-arrayn ser ut.
    name: string;
    latinName: string;
    desc: string;
    circumference: number;
    distance: number;
    temp: Temp;
    moons: string[];
}