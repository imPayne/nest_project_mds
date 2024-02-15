import { Test, TestingModule } from '@nestjs/testing';
import { CommonEquipmentService } from './common_equipment.service';

describe('CommonEquipmentService', () => {
  let service: CommonEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonEquipmentService],
    }).compile();

    service = module.get<CommonEquipmentService>(CommonEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
