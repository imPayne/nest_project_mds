"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBuildingHasFacilityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const building_entity_1 = require("../../building/entities/building.entity");
const common_facility_entity_1 = require("../../common-facility/entities/common-facility.entity");
class CreateBuildingHasFacilityDto {
}
exports.CreateBuildingHasFacilityDto = CreateBuildingHasFacilityDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateBuildingHasFacilityDto.prototype, "renovationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", building_entity_1.BuildingEntity)
], CreateBuildingHasFacilityDto.prototype, "building", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", common_facility_entity_1.CommonFacilityEntity)
], CreateBuildingHasFacilityDto.prototype, "facility", void 0);
//# sourceMappingURL=create-building_has_facility.dto.js.map