"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModel = exports.collectionName = void 0;
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