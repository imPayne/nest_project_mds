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
exports.ApartmentEntity = void 0;
const typeorm_1 = require("typeorm");
const owner_entity_1 = require("./owner.entity");
const building_entity_1 = require("./building.entity");
const apartment_type_entity_1 = require("./apartment-type.entity");
const option_entity_1 = require("./option.entity");
const tenant_entity_1 = require("./tenant.entity");
let ApartmentEntity = exports.ApartmentEntity = class ApartmentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ApartmentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ApartmentEntity.prototype, "doorNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ApartmentEntity.prototype, "floor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => owner_entity_1.OwnerEntity, (owner) => owner.apartments),
    __metadata("design:type", owner_entity_1.OwnerEntity)
], ApartmentEntity.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => building_entity_1.BuildingEntity, (building) => building.apartments),
    __metadata("design:type", building_entity_1.BuildingEntity)
], ApartmentEntity.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => apartment_type_entity_1.ApartmentTypeEntity, (apartmentType) => apartmentType.apartments),
    __metadata("design:type", apartment_type_entity_1.ApartmentTypeEntity)
], ApartmentEntity.prototype, "apartmentType", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => option_entity_1.OptionEntity, (option) => option.apartments),
    __metadata("design:type", Array)
], ApartmentEntity.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tenant_entity_1.TenantEntity, (tenant) => tenant.apartment),
    __metadata("design:type", Array)
], ApartmentEntity.prototype, "tenants", void 0);
exports.ApartmentEntity = ApartmentEntity = __decorate([
    (0, typeorm_1.Entity)()
], ApartmentEntity);
//# sourceMappingURL=apartment.entity.js.map