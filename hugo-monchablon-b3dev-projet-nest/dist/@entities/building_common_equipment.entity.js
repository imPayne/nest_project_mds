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
exports.BuildingToCommonEquipment = void 0;
const typeorm_1 = require("typeorm");
const building_entity_1 = require("./building.entity");
const common_equipment_entity_1 = require("./common_equipment.entity");
let BuildingToCommonEquipment = class BuildingToCommonEquipment {
};
exports.BuildingToCommonEquipment = BuildingToCommonEquipment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BuildingToCommonEquipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => building_entity_1.BuildingEntity, (building) => building.buildingToCommonEquipments),
    __metadata("design:type", building_entity_1.BuildingEntity)
], BuildingToCommonEquipment.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => common_equipment_entity_1.CommonEquipmentEntity, (commonEquipment) => commonEquipment.buildingToCommonEquipments),
    __metadata("design:type", common_equipment_entity_1.CommonEquipmentEntity)
], BuildingToCommonEquipment.prototype, "commonEquipment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], BuildingToCommonEquipment.prototype, "lastInspection", void 0);
exports.BuildingToCommonEquipment = BuildingToCommonEquipment = __decorate([
    (0, typeorm_1.Entity)()
], BuildingToCommonEquipment);
//# sourceMappingURL=building_common_equipment.entity.js.map