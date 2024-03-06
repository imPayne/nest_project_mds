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
exports.ApartmentOptionController = void 0;
const common_1 = require("@nestjs/common");
const apartment_option_service_1 = require("./apartment-option.service");
const create_apartment_option_dto_1 = require("./dto/create-apartment-option.dto");
const update_apartment_option_dto_1 = require("./dto/update-apartment-option.dto");
const swagger_1 = require("@nestjs/swagger");
let ApartmentOptionController = class ApartmentOptionController {
    constructor(apartmentOptionService) {
        this.apartmentOptionService = apartmentOptionService;
    }
    create(createApartmentOptionDto) {
        return this.apartmentOptionService.create(createApartmentOptionDto);
    }
    findAll() {
        return this.apartmentOptionService.findAll();
    }
    findOne(id) {
        return this.apartmentOptionService.findOne(+id);
    }
    update(id, updateApartmentOptionDto) {
        return this.apartmentOptionService.update(+id, updateApartmentOptionDto);
    }
    remove(id) {
        return this.apartmentOptionService.remove(+id);
    }
};
exports.ApartmentOptionController = ApartmentOptionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apartment_option_dto_1.CreateApartmentOptionDto]),
    __metadata("design:returntype", void 0)
], ApartmentOptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApartmentOptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentOptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_apartment_option_dto_1.UpdateApartmentOptionDto]),
    __metadata("design:returntype", void 0)
], ApartmentOptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentOptionController.prototype, "remove", null);
exports.ApartmentOptionController = ApartmentOptionController = __decorate([
    (0, swagger_1.ApiTags)('Appartment option'),
    (0, common_1.Controller)('apartment-option'),
    __metadata("design:paramtypes", [apartment_option_service_1.ApartmentOptionService])
], ApartmentOptionController);
//# sourceMappingURL=apartment-option.controller.js.map