import { Test, TestingModule } from '@nestjs/testing';
import { BuildingCommonEquipmentController } from './building_common_equipment.controller';
import { BuildingCommonEquipmentService } from './building_common_equipment.service';

describe('BuildingCommonEquipmentController', () => {
  let controller: BuildingCommonEquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingCommonEquipmentController],
      providers: [BuildingCommonEquipmentService],
    }).compile();

    controller = module.get<BuildingCommonEquipmentController>(BuildingCommonEquipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
