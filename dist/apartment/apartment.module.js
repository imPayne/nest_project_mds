"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentModule = void 0;
const common_1 = require("@nestjs/common");
const apartment_service_1 = require("./apartment.service");
const apartment_controller_1 = require("./apartment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const apartment_entity_1 = require("./entities/apartment.entity");
const building_module_1 = require("../building/building.module");
const address_module_1 = require("../address/address.module");
const apartment_type_module_1 = require("../apartment-type/apartment-type.module");
const apartment_option_module_1 = require("../apartment-option/apartment-option.module");
const owner_module_1 = require("../owner/owner.module");
const tenant_module_1 = require("../tenant/tenant.module");
let ApartmentModule = class ApartmentModule {
};
exports.ApartmentModule = ApartmentModule;
exports.ApartmentModule = ApartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => building_module_1.BuildingModule), tenant_module_1.TenantModule, owner_module_1.OwnerModule, address_module_1.AddressModule, apartment_type_module_1.ApartmentTypeModule, apartment_option_module_1.ApartmentOptionModule, typeorm_1.TypeOrmModule.forFeature([apartment_entity_1.ApartmentEntity])],
        controllers: [apartment_controller_1.ApartmentController],
        providers: [apartment_service_1.ApartmentService],
        exports: [apartment_service_1.ApartmentService]
    })
], ApartmentModule);
//# sourceMappingURL=apartment.module.js.map