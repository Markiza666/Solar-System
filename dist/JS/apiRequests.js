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
const apiRequest = (endpoint, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(baseUrl + endpoint, options);
        return yield res.json();
    }
    catch (err) {
        console.error(err);
        throw err; // Återkastar felet för att hantera det högre upp
    }
});
const getKeyAndSolarSystemData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(baseUrl + '/key', { method: 'POST' });
        const { key } = yield res.json();
        yield getPlanetaryInfo(String(key));
    }
    catch (err) {
        console.error(err);
    }
});
exports.getKeyAndSolarSystemData = getKeyAndSolarSystemData;
const getPlanetaryInfo = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(baseUrl + '/bodies', {
            method: 'GET',
            headers: { 'x-zocom': key }
        });
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
