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
exports.collectionName = "contacts";
const contactSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50,
    },
    name: {
        type: String,
        required: true,
        maxlength: 100,
    },
    phoneNumber: [
        {
            type: Number,
            required: true,
            minlength: 10,
            maxlength: 12,
        },
    ],
});
exports.ContactModel = mongoose_1.default.model(exports.collectionName, contactSchema);
//# sourceMappingURL=contact.model.js.map