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
exports.ApartmentOptionService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../@core/base-service");
const apartment_option_entity_1 = require("./entities/apartment-option.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ApartmentOptionService = class ApartmentOptionService extends base_service_1.BaseService {
    constructor(repository, dataSource) {
        super(dataSource);
        this.repository = repository;
        this.dataSource = dataSource;
    }
    async create(createApartmentOptionDto) {
        const option = new apartment_option_entity_1.ApartmentOptionEntity();
        Object.assign(option, createApartmentOptionDto);
        return (await this.saveEntities(option))?.[0];
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, updateApartmentOptionDto) {
        const option = await this.repository.findOne({ where: { id } });
        if (!option) {
            throw new common_1.NotFoundException('Option not found');
        }
        Object.assign(option, updateApartmentOptionDto);
        return await this.repository.save(option);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.repository.delete(id);
        return result;
    }
};
exports.ApartmentOptionService = ApartmentOptionService;
exports.ApartmentOptionService = ApartmentOptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apartment_option_entity_1.ApartmentOptionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], ApartmentOptionService);
//# sourceMappingURL=apartment-option.service.js.map