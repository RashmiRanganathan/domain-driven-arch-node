"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_CODE;
(function (ERROR_CODE) {
    ERROR_CODE["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
    ERROR_CODE["INCORRECT_FIELD"] = "INCORRECT_FIELD";
    ERROR_CODE["INVALID_REGISTER_PARAMETER"] = "INVALID_REGISTER_PARAMETER";
    ERROR_CODE["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
    ERROR_CODE["ACCOUNT_NOT_IN_CONTACT"] = "ACCOUNT_NOT_IN_CONTACT";
    ERROR_CODE["INVALID_REQUEST"] = "INVALID_REQUEST";
    ERROR_CODE["INVALID_MANDATORY_FIELDS"] = "INVALID_MANDATORY_FIELDS";
    ERROR_CODE["CONTACT_NOT_FOUND"] = "CONTACT_NOT_FOUND";
})(ERROR_CODE || (ERROR_CODE = {}));
exports.ERROR_CODE = ERROR_CODE;
const JoiValidationErrors = {
    required: ERROR_CODE.INVALID_MANDATORY_FIELDS,
    empty: ERROR_CODE.INVALID_MANDATORY_FIELDS,
    invalid: ERROR_CODE.INVALID_MANDATORY_FIELDS // TODO: use other method if invalid other than null, ""
};
exports.JoiValidationErrors = JoiValidationErrors;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCode[StatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    StatusCode[StatusCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    StatusCode[StatusCode["GONE"] = 410] = "GONE";
    StatusCode[StatusCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    StatusCode[StatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    StatusCode[StatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    StatusCode[StatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(StatusCode || (StatusCode = {}));
exports.StatusCode = StatusCode;
const ErrorList = {
    [ERROR_CODE.UNEXPECTED_ERROR]: {
        statusCode: StatusCode.INTERNAL_SERVER_ERROR,
        message: 'We caught unexpected error'
    },
    [ERROR_CODE.INCORRECT_FIELD]: {
        statusCode: StatusCode.BAD_REQUEST,
        message: 'Incorrect field value, data type or length'
    },
    [ERROR_CODE.INVALID_REQUEST]: {
        statusCode: StatusCode.BAD_REQUEST,
        message: 'Invalid request'
    },
    [ERROR_CODE.INVALID_REGISTER_PARAMETER]: {
        statusCode: StatusCode.BAD_REQUEST,
        message: 'The parameter setting is invalid'
    },
    [ERROR_CODE.RESOURCE_NOT_FOUND]: {
        statusCode: StatusCode.NOT_FOUND,
        message: 'Resource not found'
    },
    [ERROR_CODE.ACCOUNT_NOT_IN_CONTACT]: {
        statusCode: StatusCode.BAD_REQUEST,
        message: 'Account not found in the contact'
    },
    [ERROR_CODE.INVALID_MANDATORY_FIELDS]: {
        statusCode: StatusCode.BAD_REQUEST,
        message: 'Required field cannot be empty'
    },
    [ERROR_CODE.CONTACT_NOT_FOUND]: {
        statusCode: StatusCode.BAD_REQUEST,
        message: 'Contact id not found'
    }
};
exports.ErrorList = ErrorList;
//# sourceMappingURL=errors.js.map