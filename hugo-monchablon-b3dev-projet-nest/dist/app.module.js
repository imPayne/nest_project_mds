"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const building_entity_1 = require("./@entities/building.entity");
const address_entity_1 = require("./@entities/address.entity");
const building_module_1 = require("./building/building.module");
const address_module_1 = require("./address/address.module");
const apartment_module_1 = require("./apartment/apartment.module");
const common_equipment_module_1 = require("./common_equipment/common_equipment.module");
const building_common_equipment_module_1 = require("./building_common_equipment/building_common_equipment.module");
const apartment_entity_1 = require("./@entities/apartment.entity");
const building_common_equipment_entity_1 = require("./@entities/building_common_equipment.entity");
const common_equipment_entity_1 = require("./@entities/common_equipment.entity");
const apartment_type_module_1 = require("./apartment-type/apartment-type.module");
const owner_module_1 = require("./owner/owner.module");
const owner_entity_1 = require("./@entities/owner.entity");
const tenant_module_1 = require("./tenant/tenant.module");
const option_module_1 = require("./option/option.module");
const person_module_1 = require("./person/person.module");
const tenant_entity_1 = require("./@entities/tenant.entity");
const apartment_type_entity_1 = require("./@entities/apartment-type.entity");
const option_entity_1 = require("./@entities/option.entity");
const person_entity_1 = require("./@entities/person.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'apinest',
                entities: [
                    address_entity_1.AddressEntity,
                    building_entity_1.BuildingEntity,
                    apartment_entity_1.ApartmentEntity,
                    building_common_equipment_entity_1.BuildingToCommonEquipment,
                    common_equipment_entity_1.CommonEquipmentEntity,
                    owner_entity_1.OwnerEntity,
                    apartment_type_entity_1.ApartmentTypeEntity,
                    owner_entity_1.OwnerEntity,
                    option_entity_1.OptionEntity,
                    tenant_entity_1.TenantEntity,
                    person_entity_1.PersonEntity,
                ],
                synchronize: true,
            }),
            building_module_1.BuildingModule,
            address_module_1.AddressModule,
            apartment_module_1.ApartmentModule,
            common_equipment_module_1.CommonEquipmentModule,
            building_common_equipment_module_1.BuildingCommonEquipmentModule,
            apartment_type_module_1.ApartmentTypeModule,
            owner_module_1.OwnerModule,
            tenant_module_1.TenantModule,
            option_module_1.OptionModule,
            person_module_1.PersonModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map