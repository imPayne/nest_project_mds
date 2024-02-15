import { Module } from '@nestjs/common';
import { CommonEquipmentService } from './common_equipment.service';
import { CommonEquipmentController } from './common_equipment.controller';

@Module({
  controllers: [CommonEquipmentController],
  providers: [CommonEquipmentService],
})
export class CommonEquipmentModule {}
