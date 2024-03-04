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
exports.CommonEquipmentController = void 0;
const common_1 = require("@nestjs/common");
const common_equipment_service_1 = require("./common_equipment.service");
const create_common_equipment_dto_1 = require("./dto/create-common_equipment.dto");
let CommonEquipmentController = exports.CommonEquipmentController = class CommonEquipmentController {
    constructor(commonEquipmentService) {
        this.commonEquipmentService = commonEquipmentService;
    }
    create(createCommonEquipmentDto) {
        return this.commonEquipmentService.create(createCommonEquipmentDto);
    }
    findAll() {
        return this.commonEquipmentService.findAll();
    }
    findOne(id) {
        return this.commonEquipmentService.findOne(+id);
    }
    update(id, updateCommonEquipmentDto) {
        return this.commonEquipmentService.update(+id, updateCommonEquipmentDto);
    }
    remove(id) {
        return this.commonEquipmentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_common_equipment_dto_1.CreateCommonEquipmentDto]),
    __metadata("design:returntype", void 0)
], CommonEquipmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommonEquipmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommonEquipmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommonEquipmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommonEquipmentController.prototype, "remove", null);
exports.CommonEquipmentController = CommonEquipmentController = __decorate([
    (0, common_1.Controller)('common-equipment'),
    __metadata("design:paramtypes", [common_equipment_service_1.CommonEquipmentService])
], CommonEquipmentController);
//# sourceMappingURL=common_equipment.controller.js.map