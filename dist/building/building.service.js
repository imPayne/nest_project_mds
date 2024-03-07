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
const base_service_1 = require("../@core/base-service");
const building_entity_1 = require("./entities/building.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const address_service_1 = require("../address/address.service");
const common_facility_service_1 = require("../common-facility/common-facility.service");
const building_has_facility_service_1 = require("../building_has_facility/building_has_facility.service");
const building_has_facility_entity_1 = require("../building_has_facility/entities/building_has_facility.entity");
const apartment_service_1 = require("../apartment/apartment.service");
let BuildingService = class BuildingService extends base_service_1.BaseService {
    constructor(buildingRepository, apartmentService, addressService, facilityService, commonService, dataSource) {
        super(dataSource);
        this.buildingRepository = buildingRepository;
        this.apartmentService = apartmentService;
        this.addressService = addressService;
        this.facilityService = facilityService;
        this.commonService = commonService;
        this.dataSource = dataSource;
    }
    async createBuilding(createBuildingDto) {
        const building = new building_entity_1.BuildingEntity();
        Object.assign(building, createBuildingDto);
        const address = await this.addressService.create(createBuildingDto.createAddressDto);
        building.address = address;
        const createdBuilding = await this.saveEntities(building)?.[0];
        return createdBuilding;
    }
    async assignFacilitiesAndCreateTable(id, AddFacilityDto) {
        const building = await this.buildingRepository.findOne({ where: { id } });
        for (const f of AddFacilityDto.facilities) {
            const facility = await this.commonService.findOne(f.facilityId);
            if (facility) {
                const buildingHasFacility = new building_has_facility_entity_1.BuildingHasFacilityEntity();
                const data = f.renovationDate ? [f.renovationDate, building, facility] : [building.constructionDate, building, facility];
                Object.assign(buildingHasFacility, data);
                await this.facilityService.create(buildingHasFacility);
            }
            else {
                throw new common_1.NotFoundException(`Common Facility with ID ${f} not found`);
            }
        }
        return this.saveEntities(building)?.[0];
    }
    findAll() {
        return this.buildingRepository.find({
            relations: ['facilities', 'address'],
        });
    }
    findOne(id) {
        return this.buildingRepository.findOne({
            where: { id },
            relations: ['facilities', 'address', 'apartments'],
        });
    }
    async numberOfApart(id) {
        const building = await this.findOne(id);
        let numberAppartment = building.apartments.length;
        return numberAppartment;
    }
    async occupationPercentage(id) {
        const building = await this.findOne(id);
        let numberApartmentOccupy = 0;
        for (let i = 0; i < building.apartments.length; i++) {
            const apartment = await this.apartmentService.findOne(building.apartments[i].id);
            const numberTenants = apartment.tenants.length;
            if (numberTenants > 0) {
                numberApartmentOccupy++;
            }
        }
        const percentage = (numberApartmentOccupy * 100) / building.apartments.length;
        const percentageOccupy = `${Number(percentage.toFixed(1))}%`;
        return percentageOccupy;
    }
    async nbTenant(id) {
        const building = await this.findOne(id);
        let nbTenant = 0;
        for (let i = 0; i < building.apartments.length; i++) {
            const apartment = await this.apartmentService.findOne(building.apartments[i].id);
            const numberTenants = apartment.tenants.length;
            nbTenant = nbTenant + numberTenants;
        }
        return nbTenant;
    }
    async underOccupy(id) {
        const building = await this.findOne(id);
        let nbApartUnder = 0;
        for (let i = 0; i < building.apartments.length; i++) {
            const apartment = await this.apartmentService.findOne(building.apartments[i].id);
            if (apartment.type.capacity > apartment.tenants.length) {
                nbApartUnder++;
            }
        }
        return nbApartUnder;
    }
    async overOccupy(id) {
        const building = await this.findOne(id);
        let nbApartOver = 0;
        for (let i = 0; i < building.apartments.length; i++) {
            const apartment = await this.apartmentService.findOne(building.apartments[i].id);
            if (apartment.type.capacity < apartment.tenants.length) {
                nbApartOver++;
            }
        }
        return nbApartOver;
    }
    async update(id, updateBuildingDto) {
        const building = await this.buildingRepository.findOne({ where: { id } });
        if (!building) {
            throw new common_1.NotFoundException('Building not found');
        }
        Object.assign(building, updateBuildingDto);
        return this.buildingRepository.save(building);
    }
    async remove(id) {
        const result = await this.findOne(id);
        await this.buildingRepository.delete(id);
        return result;
    }
};
exports.BuildingService = BuildingService;
exports.BuildingService = BuildingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(building_entity_1.BuildingEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => apartment_service_1.ApartmentService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        apartment_service_1.ApartmentService,
        address_service_1.AddressService,
        building_has_facility_service_1.BuildingHasFacilityService,
        common_facility_service_1.CommonFacilityService,
        typeorm_2.DataSource])
], BuildingService);
//# sourceMappingURL=building.service.js.map