"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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