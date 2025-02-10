import { PlanetData } from './interface'; // Skapade en types.ts fil för mina typer

export let systemData: PlanetData[] = [];
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

export const getKeyAndSolarSystemData = async () => {       //Jag har använt async/await i apiRequests.ts för att göra koden mer läsbar och hantera asynkrona operationer på ett bättre sätt.
    const keyEndpoint = '/keys';
    const keyOptions = {
        method: 'POST'
    };

    try {
        const res = await fetch(baseUrl + keyEndpoint, keyOptions);
        const data = await res.json();
        await getPlanetaryInfo(String(data.key)); // Konvertera till string explicit
    } catch (err) {
        console.error(err);
    }
};

const getPlanetaryInfo = async (key: string) => { // Typa key som string
    const infoEndpoint = '/bodies';
    const infoOptions = {
        method: 'GET',
        headers: { 'x-zocom': key }
    };

    try {
        const res = await fetch(baseUrl + infoEndpoint, infoOptions);
        const data = await res.json();
        saveInfoToLocal(data);
    } catch (err) {
        console.error(err);
    }
};

const saveInfoToLocal = (data: { bodies: PlanetData[] }) => { // Typa data
    systemData = data.bodies;
};