"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../common/errors");
class AppError extends Error {
    constructor(errorCode, errors) {
        super(errorCode);
        this.errorCode = errorCode;
        this.name = AppError.name;
        this.errors = errors;
    }
    getErrors() {
        const error = errors_1.ErrorList[this.errorCode];
        return {
            errors: this.errors,
            statusCode: error.statusCode,
            message: error.message
        };
    }
}
exports.AppError = AppError;
exports.createErrorDetail = (key, errorCode) => {
    return {
        key,
        code: errorCode,
        message: errors_1.ErrorList[errorCode].message
    };
};
//# sourceMappingURL=AppError.js.map