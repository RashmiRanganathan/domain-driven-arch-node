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
const mongoose_1 = require("mongoose");
exports.MONGO_HOSTS = "localhost:27017";
exports.MONGO_DB_NAME = "contact_db";
const getMongoUri = () => {
    return `mongodb://${exports.MONGO_HOSTS}/${exports.MONGO_DB_NAME}`;
};
exports.connectMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbUri = getMongoUri();
    mongoose_1.connect(dbUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });
});
//# sourceMappingURL=mongoDb.js.map