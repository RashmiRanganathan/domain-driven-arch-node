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
exports.MONGO_DB_NAME = "Feb2021Workshop";
exports.MONGO_DB_User = "Feb2021Workshop";
exports.MONGO_DB_PASS = "ER9U3HeU0wV5917k";
exports.MONGO_HOSTS = `dkcuster.o6bij.mongodb.net/${exports.MONGO_DB_NAME}?retryWrites=true&w=majority`;
const getMongoUri = () => {
    return `mongodb+srv://${exports.MONGO_DB_NAME}:${exports.MONGO_DB_PASS}@${exports.MONGO_HOSTS}`;
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