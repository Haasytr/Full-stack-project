"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFileTypeError = void 0;
class InvalidFileTypeError extends Error {
    constructor() {
        super('Invalid File Type');
    }
}
exports.InvalidFileTypeError = InvalidFileTypeError;
