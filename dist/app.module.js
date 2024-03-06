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
const building_module_1 = require("./building/building.module");
const apartment_module_1 = require("./apartment/apartment.module");
const address_module_1 = require("./address/address.module");
const address_entity_1 = require("./address/entities/address.entity");
const common_facility_module_1 = require("./common-facility/common-facility.module");
const owner_module_1 = require("./owner/owner.module");
const tenant_module_1 = require("./tenant/tenant.module");
const apartment_option_module_1 = require("./apartment-option/apartment-option.module");
const apartment_entity_1 = require("./apartment/entities/apartment.entity");
const apartment_option_entity_1 = require("./apartment-option/entities/apartment-option.entity");
const building_entity_1 = require("./building/entities/building.entity");
const common_facility_entity_1 = require("./common-facility/entities/common-facility.entity");
const owner_entity_1 = require("./owner/entities/owner.entity");
const tenant_entity_1 = require("./tenant/entities/tenant.entity");
const apartment_type_module_1 = require("./apartment-type/apartment-type.module");
const person_module_1 = require("./person/person.module");
const person_entity_1 = require("./person/entities/person.entity");
const building_has_facility_module_1 = require("./building_has_facility/building_has_facility.module");
const building_has_facility_entity_1 = require("./building_has_facility/entities/building_has_facility.entity");
const apartment_type_entity_1 = require("./apartment-type/entities/apartment-type.entity");
const config_1 = require("@nestjs/config");
config_1.ConfigModule.forRoot();
const db_port = parseInt(process.env.DB_Port);
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
                password: 'bXdYvx.b',
                database: 'apinest',
                synchronize: false,
                entities: [
                    address_entity_1.AddressEntity,
                    apartment_entity_1.ApartmentEntity,
                    apartment_option_entity_1.ApartmentOptionEntity,
                    building_entity_1.BuildingEntity,
                    common_facility_entity_1.CommonFacilityEntity,
                    owner_entity_1.OwnerEntity,
                    tenant_entity_1.TenantEntity,
                    person_entity_1.PersonEntity,
                    building_has_facility_entity_1.BuildingHasFacilityEntity,
                    apartment_type_entity_1.ApartmentTypeEntity,
                ],
            }),
            building_module_1.BuildingModule,
            apartment_module_1.ApartmentModule,
            address_module_1.AddressModule,
            common_facility_module_1.CommonFacilityModule,
            owner_module_1.OwnerModule,
            tenant_module_1.TenantModule,
            apartment_option_module_1.ApartmentOptionModule,
            apartment_type_module_1.ApartmentTypeModule,
            person_module_1.PersonModule,
            building_has_facility_module_1.BuildingHasFacilityModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map