"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const contact_constant_1 = require("./contact.constant");
exports.collectionName = 'contacts';
const contactSchema = new mongoose_1.Schema({
    contactId: {
        type: String,
        unique: true,
        required: true,
        maxlength: contact_constant_1.CONTACT_CONSTRAINT.contactId.maxLength
    },
    name: {
        type: String,
        unique: true,
        required: true,
        maxlength: contact_constant_1.CONTACT_CONSTRAINT.name.maxLength
    },
    imageUrl: {
        type: String,
        maxLength: contact_constant_1.CONTACT_CONSTRAINT.imageUrl.maxLength
    },
    accounts: [
        {
            accountId: {
                type: String,
                unique: true,
                required: true,
                maxlength: contact_constant_1.CONTACT_CONSTRAINT.account.accountId.maxLength
            },
            identifier: {
                type: String,
                required: true,
                maxLength: contact_constant_1.CONTACT_CONSTRAINT.account.identifier.maxLength
            }
        }
    ]
});
exports.ContactModel = mongoose_1.default.model(exports.collectionName, contactSchema);
//# sourceMappingURL=contact.model.js.map