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
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const owner_entity_1 = require("../@entities/owner.entity");
let OwnerService = exports.OwnerService = class OwnerService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createOwnerDto) {
        const newOwner = new owner_entity_1.OwnerEntity();
        Object.assign(newOwner, createOwnerDto);
        await this.repository.save(newOwner);
        return await this.repository.findOne({ where: { id: newOwner.id } });
    }
    async findAll() {
        return await this.repository.find();
    }
    async findOne(id) {
        return await this.repository.findOne({ where: { id } });
    }
    async update(id, updateOwnerDto) {
        const getOwner = await this.findOne(id);
        Object.assign(getOwner, updateOwnerDto);
        return await this.repository.findOne({ where: { id } });
    }
    async remove(id) {
        return await this.repository.softRemove({ id });
    }
};
exports.OwnerService = OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(owner_entity_1.OwnerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OwnerService);
//# sourceMappingURL=owner.service.js.map