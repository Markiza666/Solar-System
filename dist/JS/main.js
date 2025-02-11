"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiRequests_js_1 = require("./apiRequests.js");
const domElements_js_1 = require("./domElements.js");
const modalFunctions_js_1 = require("./modalFunctions.js");
const variables_js_1 = require("./variables.js");
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, apiRequests_js_1.getKeyAndSolarSystemData)(); // Vänta på att datan ska hämtas
    if (apiRequests_js_1.systemData.length > 0) { // Kontrollera att data finns
        initiatePage();
    }
    else {
        console.error("No data received from API."); // Hantera om ingen data tas emot
    }
});
const initiatePage = () => {
    let c = 0;
    for (const key in variables_js_1.planetColors) {
        if (variables_js_1.planetColors.hasOwnProperty(key)) { // Kortare sätt att kolla hasOwnProperty
            const planetElement = domElements_js_1.domObjects[key];
            if (planetElement) {
                planetElement.addEventListener('click', () => {
                    (0, modalFunctions_js_1.presentInfo)(apiRequests_js_1.systemData[c], variables_js_1.planetColors[key]);
                });
            }
            else {
                console.warn(`Element with key '${key}' not found in domObjects.`); // Varna om element saknas
            }
            c++;
        }
    }
};
initialize(); // Starta initialiseringen
