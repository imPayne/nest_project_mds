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
exports.CommonFacilityService = void 0;
const common_1 = require("@nestjs/common");
const common_facility_entity_1 = require("./entities/common-facility.entity");
const base_service_1 = require("../@core/base-service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CommonFacilityService = class CommonFacilityService extends base_service_1.BaseService {
    constructor(repository, dataSource) {
        super(dataSource);
        this.repository = repository;
        this.dataSource = dataSource;
    }
    async create(createCommonFacilityDto) {
        const facilitie = new common_facility_entity_1.CommonFacilityEntity();
        Object.assign(facilitie, createCommonFacilityDto);
        return (await this.saveEntities(facilitie))?.[0];
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, updateCommonFacilityDto) {
        const facilitie = await this.repository.findOne({ where: { id } });
        if (!facilitie) {
            throw new common_1.NotFoundException('Facilitie not found');
        }
        Object.assign(facilitie, updateCommonFacilityDto);
        return await this.repository.save(facilitie);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.repository.delete(id);
        return result;
    }
};
exports.CommonFacilityService = CommonFacilityService;
exports.CommonFacilityService = CommonFacilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(common_facility_entity_1.CommonFacilityEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], CommonFacilityService);
//# sourceMappingURL=common-facility.service.js.map