"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCSVToJSON = void 0;
const csvtojson_1 = __importDefault(require("csvtojson"));
async function transformCSVToJSON(csvData) {
    try {
        for await (const part of csvData) {
            if (part.file) {
                const chunks = [];
                for await (const chunk of part.file) {
                    chunks.push(chunk);
                }
                const fileBuffer = Buffer.concat(chunks);
                const fileContent = fileBuffer.toString('utf-8');
                return await (0, csvtojson_1.default)().fromString(fileContent);
            }
        }
    }
    catch (err) {
        return err;
    }
}
exports.transformCSVToJSON = transformCSVToJSON;
