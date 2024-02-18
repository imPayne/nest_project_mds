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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingService = void 0;
const common_1 = require("@nestjs/common");
const building_entity_1 = require("../@entities/building.entity");
const address_entity_1 = require("../@entities/address.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let BuildingService = class BuildingService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createBuilding) {
        const newAddress = new address_entity_1.AddressEntity();
        Object.assign(newAddress, createBuilding.createAddress);
        const newBuilding = new building_entity_1.BuildingEntity();
        Object.assign(newBuilding, createBuilding);
        return this.findOne(newBuilding.id);
    }
    async findAll() {
        return this.repository.find();
    }
    async findOne(id) {
        return this.repository.findOne({ where: { id } });
    }
    async update(id, updateBuildingDto) {
        const getBuilding = await this.findOne(id);
        Object.assign(getBuilding, updateBuildingDto);
        return this.repository.findOne({ where: { id } });
    }
    async remove(id) {
        return `This action removes a #${id} building`;
    }
};
exports.BuildingService = BuildingService;
exports.BuildingService = BuildingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(building_entity_1.BuildingEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BuildingService);
//# sourceMappingURL=building.service.js.map