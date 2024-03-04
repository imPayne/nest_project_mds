"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApartmentTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_apartment_type_dto_1 = require("./create-apartment-type.dto");
class UpdateApartmentTypeDto extends (0, swagger_1.PartialType)(create_apartment_type_dto_1.CreateApartmentTypeDto) {
}
exports.UpdateApartmentTypeDto = UpdateApartmentTypeDto;
//# sourceMappingURL=update-apartment-type.dto.js.map