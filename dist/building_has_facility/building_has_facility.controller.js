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
exports.BuildingHasFacilityController = void 0;
const common_1 = require("@nestjs/common");
const building_has_facility_service_1 = require("./building_has_facility.service");
const create_building_has_facility_dto_1 = require("./dto/create-building_has_facility.dto");
const update_building_has_facility_dto_1 = require("./dto/update-building_has_facility.dto");
const swagger_1 = require("@nestjs/swagger");
let BuildingHasFacilityController = class BuildingHasFacilityController {
    constructor(buildingHasFacilityService) {
        this.buildingHasFacilityService = buildingHasFacilityService;
    }
    create(createBuildingHasFacilityDto) {
        return this.buildingHasFacilityService.createwithDto(createBuildingHasFacilityDto);
    }
    findAll() {
        return this.buildingHasFacilityService.findAll();
    }
    findOne(id) {
        return this.buildingHasFacilityService.findOne(+id);
    }
    update(id, updateBuildingHasFacilityDto) {
        return this.buildingHasFacilityService.update(+id, updateBuildingHasFacilityDto);
    }
    remove(id) {
        return this.buildingHasFacilityService.remove(+id);
    }
};
exports.BuildingHasFacilityController = BuildingHasFacilityController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_building_has_facility_dto_1.CreateBuildingHasFacilityDto]),
    __metadata("design:returntype", void 0)
], BuildingHasFacilityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildingHasFacilityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingHasFacilityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_building_has_facility_dto_1.UpdateBuildingHasFacilityDto]),
    __metadata("design:returntype", void 0)
], BuildingHasFacilityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildingHasFacilityController.prototype, "remove", null);
exports.BuildingHasFacilityController = BuildingHasFacilityController = __decorate([
    (0, swagger_1.ApiTags)('Facility By Building'),
    (0, common_1.Controller)('building-has-facility'),
    __metadata("design:paramtypes", [building_has_facility_service_1.BuildingHasFacilityService])
], BuildingHasFacilityController);
//# sourceMappingURL=building_has_facility.controller.js.map