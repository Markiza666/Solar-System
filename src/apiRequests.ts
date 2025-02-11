import { PlanetData } from './interface'; // Skapade en types.ts fil för mina typer

export let systemData: PlanetData[] = [];
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

const apiRequest = async (endpoint: string, options: RequestInit) => {
    try {
        const res = await fetch(baseUrl + endpoint, options);
        return await res.json();
    } catch (err) {
        console.error(err);
        throw err; // Återkastar felet för att hantera det högre upp
    }
};

export const getKeyAndSolarSystemData = async () => {       //Jag har använt async/await i apiRequests.ts för att göra koden mer läsbar och hantera asynkrona operationer på ett bättre sätt.
    try {
        const res = await fetch(baseUrl + '/key', {method: 'POST' });
        const { key } = await res.json();
        await getPlanetaryInfo(String(key));
    } catch (err) {
        console.error(err);
    }
};

const getPlanetaryInfo = async (key: string) => { // Typa key som string
    try {
        const res = await fetch(baseUrl + '/bodies', {
            method: 'GET',
            headers: { 'x-zocom': key }
        });
        const data = await res.json();
        saveInfoToLocal(data);
    } catch (err) {
        console.error(err);
    }
};

const saveInfoToLocal = (data: { bodies: PlanetData[] }) => { // Typa data
    systemData = data.bodies;
};