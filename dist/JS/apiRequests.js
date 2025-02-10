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
exports.getKeyAndSolarSystemData = exports.systemData = void 0;
exports.systemData = [];
const baseUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";
const getKeyAndSolarSystemData = () => __awaiter(void 0, void 0, void 0, function* () {
    const keyEndpoint = '/keys';
    const keyOptions = {
        method: 'POST'
    };
    try {
        const res = yield fetch(baseUrl + keyEndpoint, keyOptions);
        const data = yield res.json();
        yield getPlanetaryInfo(String(data.key)); // Konvertera till string explicit
    }
    catch (err) {
        console.error(err);
    }
});
exports.getKeyAndSolarSystemData = getKeyAndSolarSystemData;
const getPlanetaryInfo = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const infoEndpoint = '/bodies';
    const infoOptions = {
        method: 'GET',
        headers: { 'x-zocom': key }
    };
    try {
        const res = yield fetch(baseUrl + infoEndpoint, infoOptions);
        const data = yield res.json();
        saveInfoToLocal(data);
    }
    catch (err) {
        console.error(err);
    }
});
const saveInfoToLocal = (data) => {
    exports.systemData = data.bodies;
};
