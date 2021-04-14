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
const contact_model_1 = require("./contact.model");
const lodash_1 = require("lodash");
exports.convertContactDocumentToContact = (document) => document.toObject({ getters: true });
const create = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    const document = yield contact_model_1.ContactModel.create(contact);
    return exports.convertContactDocumentToContact(document);
});
const getContacts = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const orParams = [
        {
            name: {
                $regex: lodash_1.escapeRegExp(name),
                $options: 'i'
            }
        }
    ];
    const documentList = orParams.length === 0
        ? yield contact_model_1.ContactModel.find()
        : yield contact_model_1.ContactModel.find()
            .or(orParams)
            .exec();
    return documentList.map(exports.convertContactDocumentToContact);
});
const getContactDetail = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield contact_model_1.ContactModel.findOne({
            contactId
        });
        if (document == null) {
            return null;
        }
        return exports.convertContactDocumentToContact(document);
    }
    catch (error) {
        throw error;
    }
});
const ContactRepository = { create, getContactDetail, getContacts };
exports.default = ContactRepository;
//# sourceMappingURL=contact.repository.js.map