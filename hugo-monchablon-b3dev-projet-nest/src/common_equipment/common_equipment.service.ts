import { Injectable } from '@nestjs/common';
import { CreateCommonEquipmentDto } from './dto/create-common_equipment.dto';
import { UpdateCommonEquipmentDto } from './dto/update-common_equipment.dto';

@Injectable()
export class CommonEquipmentService {
  create(createCommonEquipmentDto: CreateCommonEquipmentDto) {
    return 'This action adds a new commonEquipment';
  }

  findAll() {
    return `This action returns all commonEquipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commonEquipment`;
  }

  update(id: number, updateCommonEquipmentDto: UpdateCommonEquipmentDto) {
    return `This action updates a #${id} commonEquipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} commonEquipment`;
  }
}
