import { Test, TestingModule } from '@nestjs/testing';
import { BuildingCommonEquipmentService } from './building_common_equipment.service';

describe('BuildingCommonEquipmentService', () => {
  let service: BuildingCommonEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingCommonEquipmentService],
    }).compile();

    service = module.get<BuildingCommonEquipmentService>(BuildingCommonEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
