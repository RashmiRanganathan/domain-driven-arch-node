"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HapiSwagger = __importStar(require("hapi-swagger"));
const Package = __importStar(require("../../package.json"));
const swaggerOptions = {
    info: {
        title: Package.name.split("/")[1],
        version: Package.version,
    },
};
exports.default = {
    plugin: HapiSwagger,
    options: swaggerOptions,
};
//# sourceMappingURL=swagger.js.map