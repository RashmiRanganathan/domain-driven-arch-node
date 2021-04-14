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
const errors_1 = require("../common/errors");
const createContact = {
    method: 'POST',
    path: '/contacts',
    options: {
        description: 'Create new contact',
        notes: 'All information must valid',
        tags: ['api', 'contacts'],
        validate: {
            payload: contact_validator_1.contactCreationInputValidator
        },
        response: {
            schema: contact_validator_1.contactCreationResultValidator
        },
        handler: (hapiRequest, hapiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            const createContactResult = yield contact_service_1.default.create(hapiRequest.payload);
            return hapiResponse
                .response(createContactResult)
                .code(errors_1.StatusCode.CREATED);
        })
    }
};
const listContact = {
    method: 'GET',
    path: '/contacts',
    options: {
        description: 'Get all contact',
        notes: 'All information must valid',
        tags: ['api', 'contacts'],
        response: {
            schema: contact_validator_1.contactListResultValidator
        },
        validate: {
            query: contact_validator_1.contactListQueryValidator
        },
        handler: (req, hapiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            const query = req.query;
            const contactList = yield contact_service_1.default.getContacts(query.name);
            return hapiResponse.response(contactList).code(errors_1.StatusCode.OK);
        })
    }
};
const getContactDetail = {
    method: 'GET',
    path: '/contacts/{contactId}',
    options: {
        description: 'Get contact of customer by contactId',
        notes: 'contact id must be valid',
        tags: ['api', 'contacts'],
        validate: {
            params: contact_validator_1.contactIdInputParamValidator
        },
        response: {
            schema: contact_validator_1.contactGetResultValidator
        },
        handler: (hapiRequest, hapiResponse) => __awaiter(void 0, void 0, void 0, function* () {
            const contact = yield contact_service_1.default.getContactDetail(hapiRequest.params.contactId);
            return hapiResponse.response(contact).code(errors_1.StatusCode.OK);
        }),
        plugins: {
            'hapi-swagger': {
                responses: {
                    [errors_1.StatusCode.OK]: {
                        description: 'Return contact detail'
                    },
                    [errors_1.StatusCode.NOT_FOUND]: {
                        description: 'contactId is not found.'
                    }
                }
            }
        }
    }
};
const contactController = [
    createContact,
    listContact,
    getContactDetail
];
exports.default = contactController;
//# sourceMappingURL=contact.controller.js.map