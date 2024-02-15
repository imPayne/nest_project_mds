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
const typeorm_1 = require("typeorm");
const building_common_equipment_entity_1 = require("./building_common_equipment.entity");
let BuildingEntity = class BuildingEntity {
};
exports.BuildingEntity = BuildingEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BuildingEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => building_common_equipment_entity_1.BuildingToCommonEquipment, buildingToCommonEquipment => buildingToCommonEquipment.commonEquipment),
    __metadata("design:type", Array)
], BuildingEntity.prototype, "buildingToCommonEquipments", void 0);
exports.BuildingEntity = BuildingEntity = __decorate([
    (0, typeorm_1.Entity)()
], BuildingEntity);
//# sourceMappingURL=building.entity.js.map