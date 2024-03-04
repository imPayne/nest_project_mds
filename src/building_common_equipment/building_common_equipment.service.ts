import { Injectable } from '@nestjs/common';
import { CreateBuildingCommonEquipmentDto } from './dto/create-building_common_equipment.dto';

@Injectable()
export class BuildingCommonEquipmentService {
  create(createBuildingCommonEquipmentDto: CreateBuildingCommonEquipmentDto) {
    return 'This action adds a new buildingCommonEquipment';
  }

  findAll() {
    return `This action returns all buildingCommonEquipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingCommonEquipment`;
  }

  update(id: number, updateBuildingCommonEquipmentDto) {
    return `This action updates a #${id} buildingCommonEquipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingCommonEquipment`;
  }
}
