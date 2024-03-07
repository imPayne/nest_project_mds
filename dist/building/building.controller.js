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
exports.BuildingController = void 0;
const common_1 = require("@nestjs/common");
const building_service_1 = require("./building.service");
const create_building_dto_1 = require("./dto/create-building.dto");
const update_building_dto_1 = require("./dto/update-building.dto");
const add_facilities_dto_1 = require("./dto/add-facilities.dto");
const swagger_1 = require("@nestjs/swagger");
let BuildingController = class BuildingController {
    constructor(buildingService) {
        this.buildingService = buildingService;
    }
    create(createBuildingDto) {
        return this.buildingService.createBuilding(createBuildingDto);
    }
    addFacilities(id, AddFacilityDto) {
        return this.buildingService.assignFacilitiesAndCreateTable(id, AddFacilityDto);
    }
    findAll() {
        return this.buildingService.findAll();
    }
    findOne(id) {
        return this.buildingService.findOne(+id);
    }
    update(id, updateBuildingDto) {
        return this.buildingService.update(+id, updateBuildingDto);
    }
    occupationPercentage(id) {
        return this.buildingService.occupationPercentage(+id);
    }
    numberOfApart(id) {
        return this.buildingService.numberOfApart(+id);
    }
    nbTenants(id) {
        return this.buildingService.nbTenant(+id);
    }
    underOccupy(id) {
        return this.buildingService.underOccupy(+id);
    }
    overOccupy(id) {
        return this.buildingService.overOccupy(+id);
    }
    remove(id) {
        return this.buildingService.remove(+id);
    }
};
exports.BuildingController = BuildingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_dto_1.CreateBuildingDto]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_facilities_dto_1.AddFacilityDto]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "addFacilities", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_building_dto_1.UpdateBuildingDto]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/percentage/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "occupationPercentage", null);
__decorate([
    (0, common_1.Get)('/number/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "numberOfApart", null);
__decorate([
    (0, common_1.Get)('/tenants/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "nbTenants", null);
__decorate([
    (0, common_1.Get)('/under/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "underOccupy", null);
__decorate([
    (0, common_1.Get)('/over/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "overOccupy", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingController.prototype, "remove", null);
exports.BuildingController = BuildingController = __decorate([
    (0, swagger_1.ApiTags)('buildings'),
    (0, common_1.Controller)('building'),
    __metadata("design:paramtypes", [building_service_1.BuildingService])
], BuildingController);
//# sourceMappingURL=building.controller.js.map