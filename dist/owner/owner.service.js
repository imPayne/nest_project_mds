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
const owner_entity_1 = require("./entities/owner.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../@core/base-service");
const person_service_1 = require("../person/person.service");
let OwnerService = class OwnerService extends base_service_1.BaseService {
    constructor(repository, personService, dataSource) {
        super(dataSource);
        this.repository = repository;
        this.personService = personService;
        this.dataSource = dataSource;
    }
    async create(createOwnerDto) {
        const owner = new owner_entity_1.OwnerEntity();
        Object.assign(owner, createOwnerDto);
        return await this.saveEntities(owner)?.[0];
        ;
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOne({ where: { id } });
    }
    async update(id, updateOwnerDto) {
        const owner = await this.repository.findOne({ where: { id } });
        if (!owner) {
            throw new common_1.NotFoundException('Owner found ');
        }
        Object.assign(owner, updateOwnerDto);
        return this.repository.save(owner);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.repository.delete(id);
        return result;
    }
};
exports.OwnerService = OwnerService;
exports.OwnerService = OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(owner_entity_1.OwnerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        person_service_1.PersonService,
        typeorm_2.DataSource])
], OwnerService);
//# sourceMappingURL=owner.service.js.map