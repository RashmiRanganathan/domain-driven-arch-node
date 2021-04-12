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
// In-memory cache. Need to replace it with a database call.
const contacts = new Map();
const create = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    if (!contacts.has(contact.id)) {
        const newContact = Object.assign({}, contact);
        contacts.set(contact.id, contact);
        return newContact;
    }
    return undefined;
});
const get = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    if (contacts.has(contactId)) {
        return contacts.get(contactId);
    }
    return undefined;
});
const remove = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    if (contacts.has(contactId)) {
        const contact = contacts.get(contactId);
        contacts.delete(contactId);
        return contact;
    }
    return undefined;
});
const clear = () => __awaiter(void 0, void 0, void 0, function* () {
    contacts.clear();
});
const ContactRepository = { create, get, remove, clear };
exports.default = ContactRepository;
//# sourceMappingURL=contact.repository.js.map