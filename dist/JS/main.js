"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequests_js_1 = require("./apiRequests.js");
const domElements_js_1 = require("../src/domElements.js");
const modalFunctions_js_1 = require("../src/modalFunctions.js");
const variables_js_1 = require("../src/variables.js");
(0, apiRequests_js_1.getKeyAndSolarSystemData)();
const initiatePage = () => {
    let c = 0;
    for (const key in variables_js_1.planetColors) {
        if (Object.prototype.hasOwnProperty.call(variables_js_1.planetColors, key)) {
            const planetElement = domElements_js_1.domObjects[key];
            if (planetElement) { // Kolla om elementet finns
                planetElement.addEventListener('click', () => {
                    (0, modalFunctions_js_1.presentInfo)(apiRequests_js_1.systemData[c], variables_js_1.planetColors[key]);
                });
            }
            c++;
        }
    }
};
// Vänta tills datan har laddats innan du initierar sidan
const checkDataAndInitiate = () => {
    if (apiRequests_js_1.systemData.length > 0) {
        initiatePage();
    }
    else {
        setTimeout(checkDataAndInitiate, 100); // Kolla igen om 100ms
    }
};
checkDataAndInitiate();
