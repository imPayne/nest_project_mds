"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOptionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_option_dto_1 = require("./create-option.dto");
class UpdateOptionDto extends (0, mapped_types_1.PartialType)(create_option_dto_1.CreateOptionDto) {
}
exports.UpdateOptionDto = UpdateOptionDto;
//# sourceMappingURL=update-option.dto.js.map