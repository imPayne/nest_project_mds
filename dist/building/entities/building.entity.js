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
exports.BuildingEntity = void 0;
const address_entity_1 = require("../../address/entities/address.entity");
const apartment_entity_1 = require("../../apartment/entities/apartment.entity");
const common_facility_entity_1 = require("../../common-facility/entities/common-facility.entity");
const typeorm_1 = require("typeorm");
let BuildingEntity = class BuildingEntity {
};
exports.BuildingEntity = BuildingEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BuildingEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BuildingEntity.prototype, "constructionDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => apartment_entity_1.ApartmentEntity, (apartment) => apartment.building, { nullable: true }),
    __metadata("design:type", Array)
], BuildingEntity.prototype, "apartments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => common_facility_entity_1.CommonFacilityEntity, facilitie => facilitie.buildings),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BuildingEntity.prototype, "facilities", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.AddressEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.AddressEntity)
], BuildingEntity.prototype, "address", void 0);
exports.BuildingEntity = BuildingEntity = __decorate([
    (0, typeorm_1.Entity)('building')
], BuildingEntity);
//# sourceMappingURL=building.entity.js.map