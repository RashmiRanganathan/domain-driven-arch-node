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
const contact_constant_1 = require("./contact.constant");
const newAccountSchema = Joi.object({
    identifier: Joi.string()
        .required()
        .max(contact_constant_1.CONTACT_CONSTRAINT.account.identifier.maxLength)
}).required();
const accountSchema = newAccountSchema.keys({
    accountId: Joi.string()
        .required()
        .max(contact_constant_1.CONTACT_CONSTRAINT.account.accountId.maxLength)
});
const newContactSchema = Joi.object({
    name: Joi.string()
        .required()
        .max(contact_constant_1.CONTACT_CONSTRAINT.name.maxLength),
    imageUrl: Joi.string().max(contact_constant_1.CONTACT_CONSTRAINT.imageUrl.maxLength),
    accounts: Joi.array()
        .required()
        .items(newAccountSchema)
});
const contactSchema = newContactSchema.keys({
    contactId: Joi.string()
        .required()
        .max(contact_constant_1.CONTACT_CONSTRAINT.contactId.maxLength),
    accounts: Joi.array()
        .required()
        .items(accountSchema)
});
const contactCreationInputValidator = newContactSchema
    .required()
    .label('Request - create contact input');
exports.contactCreationInputValidator = contactCreationInputValidator;
const contactCreationResultValidator = contactSchema.label('Response - created contact result');
exports.contactCreationResultValidator = contactCreationResultValidator;
const contactListQueryValidator = Joi.object({
    name: Joi.string().optional()
}).label('Request - get contacts query request');
exports.contactListQueryValidator = contactListQueryValidator;
const contactListResultValidator = Joi.array()
    .items(contactSchema)
    .label('Response - list of contacts');
exports.contactListResultValidator = contactListResultValidator;
const contactGetResultValidator = contactSchema.label('Response - customer contact result');
exports.contactGetResultValidator = contactGetResultValidator;
const contactIdInputParamValidator = Joi.object({
    contactId: Joi.string()
        .required()
        .not(null, contact_constant_1.NULL_CONSTRAINT)
}).label('Contact id parameter');
exports.contactIdInputParamValidator = contactIdInputParamValidator;
//# sourceMappingURL=contact.validator.js.map