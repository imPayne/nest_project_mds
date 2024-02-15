import { Module } from '@nestjs/common';
import { BuildingCommonEquipmentService } from './building_common_equipment.service';
import { BuildingCommonEquipmentController } from './building_common_equipment.controller';

@Module({
  controllers: [BuildingCommonEquipmentController],
  providers: [BuildingCommonEquipmentService],
})
export class BuildingCommonEquipmentModule {}
