"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingModule = void 0;
const common_1 = require("@nestjs/common");
const building_service_1 = require("./building.service");
const building_controller_1 = require("./building.controller");
const typeorm_1 = require("@nestjs/typeorm");
const building_entity_1 = require("../@entities/building.entity");
const address_module_1 = require("../address/address.module");
let BuildingModule = exports.BuildingModule = class BuildingModule {
};
exports.BuildingModule = BuildingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([building_entity_1.BuildingEntity]), address_module_1.AddressModule],
        controllers: [building_controller_1.BuildingController],
        providers: [building_service_1.BuildingService],
        exports: [building_service_1.BuildingService],
    })
], BuildingModule);
//# sourceMappingURL=building.module.js.map