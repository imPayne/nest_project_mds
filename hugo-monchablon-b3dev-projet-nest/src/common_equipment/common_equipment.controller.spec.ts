import { Test, TestingModule } from '@nestjs/testing';
import { CommonEquipmentController } from './common_equipment.controller';
import { CommonEquipmentService } from './common_equipment.service';

describe('CommonEquipmentController', () => {
  let controller: CommonEquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonEquipmentController],
      providers: [CommonEquipmentService],
    }).compile();

    controller = module.get<CommonEquipmentController>(CommonEquipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
