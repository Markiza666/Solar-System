import { getKeyAndSolarSystemData, systemData } from './apiRequests.js';
import { domObjects } from './domElements.js';
import { presentInfo } from './modalFunctions.js';
import { planetColors } from './variables.js';

const initialize = async () => { // Skapa en async funktion för att hantera hämtningen av data
    await getKeyAndSolarSystemData(); // Vänta på att datan ska hämtas

    if (systemData.length > 0) { // Kontrollera att data finns
        initiatePage();
    } else {
        console.error("No data received from API."); // Hantera om ingen data tas emot
    }
};

const initiatePage = () => {
    let c = 0;
    for (const key in planetColors) {
        if (planetColors.hasOwnProperty(key)) { // Kortare sätt att kolla hasOwnProperty
            const planetElement = domObjects[key as keyof typeof domObjects];
            if (planetElement) {
                planetElement.addEventListener('click', () => {
                    presentInfo(systemData[c], planetColors[key]);
                });
            } else {
                console.warn(`Element with key '${key}' not found in domObjects.`); // Varna om element saknas
            }
            c++;
        }
    }
};

initialize(); // Starta initialiseringen