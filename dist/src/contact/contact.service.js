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
const boom_1 = __importDefault(require("boom"));
const contact_repository_1 = __importDefault(require("./contact.repository"));
const create = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_repository_1.default.create(contact);
    if (!result) {
        throw boom_1.default.badRequest(`Contact already exists: ${contact.id}`);
    }
    return result;
});
const get = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_repository_1.default.get(contactId);
    if (!result) {
        throw boom_1.default.notFound();
    }
    return result;
});
const remove = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    yield contact_repository_1.default.remove(contactId);
});
const contactService = { create, get, remove };
exports.default = contactService;
//# sourceMappingURL=contact.service.js.map