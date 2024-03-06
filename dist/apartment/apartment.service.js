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
exports.ApartmentService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../@core/base-service");
const apartment_entity_1 = require("./entities/apartment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const building_service_1 = require("../building/building.service");
const apartment_type_service_1 = require("../apartment-type/apartment-type.service");
const apartment_option_service_1 = require("../apartment-option/apartment-option.service");
const owner_service_1 = require("../owner/owner.service");
const tenant_service_1 = require("../tenant/tenant.service");
let ApartmentService = class ApartmentService extends base_service_1.BaseService {
    constructor(repository, buildingService, apartmentTypeService, apartmentOptionService, ownerService, tenantService, dataSource) {
        super(dataSource);
        this.repository = repository;
        this.buildingService = buildingService;
        this.apartmentTypeService = apartmentTypeService;
        this.apartmentOptionService = apartmentOptionService;
        this.ownerService = ownerService;
        this.tenantService = tenantService;
        this.dataSource = dataSource;
    }
    async create(createApartmentDto) {
        const apartment = new apartment_entity_1.ApartmentEntity();
        Object.assign(apartment, createApartmentDto);
        const building = await this.buildingService.findOne(createApartmentDto.buildingId);
        const apartmentType = await this.apartmentTypeService.findOne(createApartmentDto.apartmentTypeId);
        const options = [];
        for (const optionId of createApartmentDto.options) {
            const option = await this.apartmentOptionService.findOne(optionId);
            if (option) {
                options.push(option);
            }
            else {
                throw new common_1.NotFoundException(`Apartment option with ID ${optionId} not found`);
            }
        }
        if (!building) {
            throw new Error('Building not found');
        }
        if (!apartmentType) {
            throw new Error('Apartment type not found');
        }
        apartment.building = building;
        apartment.type = apartmentType;
        apartment.options = options;
        return (await this.saveEntities(apartment))?.[0];
    }
    async changeOwner(id, changeOwnerDto) {
        const apartment = await this.repository.findOne({
            where: { id },
        });
        const owner = await this.ownerService.findOne(changeOwnerDto.ownerId);
        apartment.owner = owner;
        return await this.saveEntities(apartment)?.[0];
    }
    async addTenant(id, addTenant) {
        const apartment = await this.findOne(id);
        const tenant = await this.tenantService.create(addTenant);
        apartment.tenants.push(tenant);
        if (apartment.principalTenant === null) {
            apartment.principalTenant = tenant;
        }
        await this.saveEntities(apartment)?.[0];
        return apartment;
    }
    async findAll() {
        try {
            const apartments = await this.repository.find({
                relations: [
                    'building',
                    'type',
                    'options',
                    'owner',
                    'tenants',
                    'principalTenant',
                ],
            });
            return apartments;
        }
        catch (error) {
            console.error("Une erreur s'est produite lors de la récupération de tous les appartements avec les relations :", error);
            throw error;
        }
    }
    async findOne(id) {
        const result = await this.repository.findOne({
            where: { id },
            relations: [
                'building',
                'type',
                'options',
                'owner',
                'tenants',
                'principalTenant',
            ],
        });
        return result;
    }
    async update(id, updateApartmentDto) {
        const apartment = await this.repository.findOne({
            where: { id },
        });
        if (!apartment) {
            throw new common_1.NotFoundException('Apartment not found');
        }
        if (updateApartmentDto.buildingId &&
            (!apartment.building ||
                updateApartmentDto.buildingId !== apartment.building.id)) {
            const building = await this.buildingService.findOne(updateApartmentDto.buildingId);
            apartment.building = building;
        }
        if (updateApartmentDto.apartmentTypeId &&
            (!apartment.type ||
                updateApartmentDto.apartmentTypeId !== apartment.type.id)) {
            const type = await this.apartmentTypeService.findOne(updateApartmentDto.apartmentTypeId);
            apartment.type = type;
        }
        Object.assign(apartment, updateApartmentDto);
        return await this.repository.save(apartment);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.repository.delete(id);
        return result;
    }
};
exports.ApartmentService = ApartmentService;
exports.ApartmentService = ApartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apartment_entity_1.ApartmentEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => building_service_1.BuildingService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        building_service_1.BuildingService,
        apartment_type_service_1.ApartmentTypeService,
        apartment_option_service_1.ApartmentOptionService,
        owner_service_1.OwnerService,
        tenant_service_1.TenantService,
        typeorm_2.DataSource])
], ApartmentService);
//# sourceMappingURL=apartment.service.js.map