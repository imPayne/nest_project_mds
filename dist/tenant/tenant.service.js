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
exports.TenantService = void 0;
const common_1 = require("@nestjs/common");
const tenant_entity_1 = require("./entities/tenant.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../@core/base-service");
const person_service_1 = require("../person/person.service");
let TenantService = class TenantService extends base_service_1.BaseService {
    constructor(repository, personService, dataSource) {
        super(dataSource);
        this.repository = repository;
        this.personService = personService;
        this.dataSource = dataSource;
    }
    async create(createTenantDto) {
        const tenant = new tenant_entity_1.TenantEntity();
        Object.assign(tenant, createTenantDto);
        await this.saveEntities(tenant)?.[0];
        return tenant;
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOne({ where: { id } });
    }
    async update(id, updateTenantDto) {
        const tenant = await this.repository.findOne({ where: { id } });
        if (!tenant) {
            throw new common_1.NotFoundException('Tenant found ');
        }
        Object.assign(tenant, updateTenantDto);
        return this.repository.save(tenant);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.repository.delete(id);
        return result;
    }
};
exports.TenantService = TenantService;
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tenant_entity_1.TenantEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        person_service_1.PersonService,
        typeorm_2.DataSource])
], TenantService);
//# sourceMappingURL=tenant.service.js.map