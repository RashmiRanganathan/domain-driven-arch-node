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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const contact_repository_1 = __importDefault(require("./contact.repository"));
const AppError_1 = require("../errors/AppError");
const errors_1 = require("../common/errors");
const stripUnusedFields = (contact) => {
    const accounts = contact.accounts.map(account => ({
        accountId: account.accountId,
        identifier: account.identifier,
    }));
    return {
        contactId: contact.contactId,
        name: contact.name,
        imageUrl: contact.imageUrl,
        accounts
    };
};
const create = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    const accountsWithId = contact.accounts.map(account => (Object.assign(Object.assign({}, account), { accountId: uuid_1.v1() })));
    const contactWithId = Object.assign(Object.assign({}, contact), { contactId: uuid_1.v1(), accounts: accountsWithId });
    const savedContact = yield contact_repository_1.default.create(contactWithId);
    return stripUnusedFields(savedContact);
});
const getContacts = (searchStr) => __awaiter(void 0, void 0, void 0, function* () {
    const contactList = yield contact_repository_1.default.getContacts(searchStr);
    return contactList.map(stripUnusedFields);
});
const getContactDetail = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield contact_repository_1.default.getContactDetail(contactId);
    if (contact == null) {
        throw new AppError_1.AppError(errors_1.ERROR_CODE.CONTACT_NOT_FOUND);
    }
    return stripUnusedFields(contact);
});
const contactService = { create, getContacts, getContactDetail };
exports.default = contactService;
//# sourceMappingURL=contact.service.js.map