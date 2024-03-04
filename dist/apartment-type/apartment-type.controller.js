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
exports.ApartmentTypeController = void 0;
const common_1 = require("@nestjs/common");
const apartment_type_service_1 = require("./apartment-type.service");
const create_apartment_type_dto_1 = require("./dto/create-apartment-type.dto");
const update_apartment_type_dto_1 = require("./dto/update-apartment-type.dto");
let ApartmentTypeController = exports.ApartmentTypeController = class ApartmentTypeController {
    constructor(apartmentTypeService) {
        this.apartmentTypeService = apartmentTypeService;
    }
    create(createApartmentTypeDto) {
        return this.apartmentTypeService.create(createApartmentTypeDto);
    }
    findAll() {
        return this.apartmentTypeService.findAll();
    }
    findOne(id) {
        return this.apartmentTypeService.findOne(+id);
    }
    update(id, updateApartmentTypeDto) {
        return this.apartmentTypeService.update(+id, updateApartmentTypeDto);
    }
    remove(id) {
        return this.apartmentTypeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apartment_type_dto_1.CreateApartmentTypeDto]),
    __metadata("design:returntype", void 0)
], ApartmentTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApartmentTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_apartment_type_dto_1.UpdateApartmentTypeDto]),
    __metadata("design:returntype", void 0)
], ApartmentTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentTypeController.prototype, "remove", null);
exports.ApartmentTypeController = ApartmentTypeController = __decorate([
    (0, common_1.Controller)('apartment-type'),
    __metadata("design:paramtypes", [apartment_type_service_1.ApartmentTypeService])
], ApartmentTypeController);
//# sourceMappingURL=apartment-type.controller.js.map