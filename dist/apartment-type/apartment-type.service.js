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
exports.ApartmentTypeService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../@core/base-service");
const apartment_type_entity_1 = require("./entities/apartment-type.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ApartmentTypeService = class ApartmentTypeService extends base_service_1.BaseService {
    constructor(repository, dataSource) {
        super(dataSource);
        this.repository = repository;
        this.dataSource = dataSource;
    }
    async create(createApartmentTypeDto) {
        const apartmentType = new apartment_type_entity_1.ApartmentTypeEntity();
        Object.assign(apartmentType, createApartmentTypeDto);
        return (await this.saveEntities(apartmentType))?.[0];
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, updateApartmentTypeDto) {
        const apartmentType = await this.repository.findOne({ where: { id } });
        if (!apartmentType) {
            throw new common_1.NotFoundException("Type d'appartement introuvalbe");
        }
        Object.assign(apartmentType, updateApartmentTypeDto);
        return await this.repository.save(apartmentType);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.repository.delete(id);
        return result;
    }
};
exports.ApartmentTypeService = ApartmentTypeService;
exports.ApartmentTypeService = ApartmentTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apartment_type_entity_1.ApartmentTypeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], ApartmentTypeService);
//# sourceMappingURL=apartment-type.service.js.map