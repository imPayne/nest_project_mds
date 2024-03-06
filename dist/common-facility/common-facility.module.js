"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonFacilityModule = void 0;
const common_1 = require("@nestjs/common");
const common_facility_service_1 = require("./common-facility.service");
const common_facility_controller_1 = require("./common-facility.controller");
const typeorm_1 = require("@nestjs/typeorm");
const common_facility_entity_1 = require("./entities/common-facility.entity");
let CommonFacilityModule = class CommonFacilityModule {
};
exports.CommonFacilityModule = CommonFacilityModule;
exports.CommonFacilityModule = CommonFacilityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([common_facility_entity_1.CommonFacilityEntity])],
        controllers: [common_facility_controller_1.CommonFacilityController],
        providers: [common_facility_service_1.CommonFacilityService],
        exports: [common_facility_service_1.CommonFacilityService],
    })
], CommonFacilityModule);
//# sourceMappingURL=common-facility.module.js.map