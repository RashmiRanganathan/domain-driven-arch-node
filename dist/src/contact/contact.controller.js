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
const contact_service_1 = __importDefault(require("./contact.service"));
const contact_validator_1 = require("./contact.validator");
const createContact = {
    method: "POST",
    path: "/contacts",
    options: {
        description: "Create new contact",
        notes: "All information must valid",
        tags: ["api", "contacts"],
        validate: {
            payload: contact_validator_1.contactCreationInputValidator,
        },
        response: {
            schema: contact_validator_1.contactCreationResultValidator,
        },
        handler: (hapiRequest, hapiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            const createContactResult = yield contact_service_1.default.create(hapiRequest.payload);
            return hapiResponse.response(createContactResult).code(201);
        }),
    },
};
const getContact = {
    method: "GET",
    path: "/contacts/{id}",
    options: {
        description: "Get a contact",
        notes: "All information must valid",
        tags: ["api", "contacts"],
        handler: (hapiRequest, hapiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            const contactId = hapiRequest.params.id;
            const getContactResult = yield contact_service_1.default.get(contactId);
            return hapiResponse.response(getContactResult);
        }),
    },
};
const deleteContact = {
    method: "DELETE",
    path: "/contacts/{id}",
    options: {
        description: "Delete a contact",
        notes: "All information must valid",
        tags: ["api", "contacts"],
        handler: (hapiRequest, hapiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            const contactId = hapiRequest.params.id;
            yield contact_service_1.default.remove(contactId);
            return hapiResponse.response().code(204);
        }),
    },
};
const contactController = [
    createContact,
    getContact,
    deleteContact,
];
exports.default = contactController;
//# sourceMappingURL=contact.controller.js.map