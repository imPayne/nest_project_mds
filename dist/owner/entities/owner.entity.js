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
exports.OwnerEntity = void 0;
const apartment_entity_1 = require("../../apartment/entities/apartment.entity");
const person_entity_1 = require("../../person/entities/person.entity");
const typeorm_1 = require("typeorm");
let OwnerEntity = class OwnerEntity extends person_entity_1.PersonEntity {
};
exports.OwnerEntity = OwnerEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OwnerEntity.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], OwnerEntity.prototype, "tva", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => apartment_entity_1.ApartmentEntity, (apartment) => apartment.owner),
    __metadata("design:type", Array)
], OwnerEntity.prototype, "apartments", void 0);
exports.OwnerEntity = OwnerEntity = __decorate([
    (0, typeorm_1.ChildEntity)('Owner')
], OwnerEntity);
//# sourceMappingURL=owner.entity.js.map