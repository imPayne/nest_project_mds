"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingHasFacilityModule = void 0;
const common_1 = require("@nestjs/common");
const building_has_facility_service_1 = require("./building_has_facility.service");
const building_has_facility_controller_1 = require("./building_has_facility.controller");
const building_has_facility_entity_1 = require("./entities/building_has_facility.entity");
const typeorm_1 = require("@nestjs/typeorm");
let BuildingHasFacilityModule = class BuildingHasFacilityModule {
};
exports.BuildingHasFacilityModule = BuildingHasFacilityModule;
exports.BuildingHasFacilityModule = BuildingHasFacilityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([building_has_facility_entity_1.BuildingHasFacilityEntity])],
        controllers: [building_has_facility_controller_1.BuildingHasFacilityController],
        providers: [building_has_facility_service_1.BuildingHasFacilityService],
        exports: [building_has_facility_service_1.BuildingHasFacilityService]
    })
], BuildingHasFacilityModule);
//# sourceMappingURL=building_has_facility.module.js.map