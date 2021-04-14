"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactCreationResultValidator = exports.contactCreationInputValidator = void 0;
const Joi = __importStar(require("@hapi/joi"));
require("joi-extract-type");
const contactCreationInputValidator = Joi.object({
    id: Joi.string().required().max(50),
    name: Joi.string().required().max(100),
    phoneNumbers: Joi.array()
        .items(Joi.string().required().min(10).max(12))
        .required(),
}).label("Request - create contact input");
exports.contactCreationInputValidator = contactCreationInputValidator;
const contactCreationResultValidator = Joi.object({
    id: Joi.string().required().max(50),
    name: Joi.string().required().max(100),
    phoneNumbers: Joi.array()
        .items(Joi.string().required().min(10).max(12))
        .required(),
}).label("Response - created contact result");
exports.contactCreationResultValidator = contactCreationResultValidator;
//# sourceMappingURL=contact.validator.js.map