"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_controller_1 = __importDefault(require("./contact/contact.controller"));
const healthcheck_controller_1 = __importDefault(require("./heathcheck/healthcheck.controller"));
const routes = [...contact_controller_1.default, ...healthcheck_controller_1.default];
exports.routes = routes;
//# sourceMappingURL=routes.js.map