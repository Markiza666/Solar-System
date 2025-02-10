import { getKeyAndSolarSystemData, systemData } from './apiRequests.js';
import { domObjects } from '../src/domElements.js';
import { presentInfo } from '../src/modalFunctions.js';
import { planetColors } from '../src/variables.js';

getKeyAndSolarSystemData();

const initiatePage = () => {
    let c = 0;
    for (const key in planetColors) {
        if (Object.prototype.hasOwnProperty.call(planetColors, key)) {
            const planetElement = domObjects[key];
            if (planetElement) {  // Kolla om elementet finns
                planetElement.addEventListener('click', () => {
                    presentInfo(systemData[c], planetColors[key]); 
                });
            }
            c++;
        }
    }
};

// Vänta tills datan har laddats innan du initierar sidan
const checkDataAndInitiate = () => {
    if (systemData.length > 0) {
        initiatePage();
    } else {
        setTimeout(checkDataAndInitiate, 100); // Kolla igen om 100ms
    }
};

checkDataAndInitiate();