import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingCommonEquipmentService } from './building_common_equipment.service';
import { CreateBuildingCommonEquipmentDto } from './dto/create-building_common_equipment.dto';

@Controller('building-common-equipment')
export class BuildingCommonEquipmentController {
  constructor(private readonly buildingCommonEquipmentService: BuildingCommonEquipmentService) {}

  @Post()
  create(@Body() createBuildingCommonEquipmentDto: CreateBuildingCommonEquipmentDto) {
    return this.buildingCommonEquipmentService.create(createBuildingCommonEquipmentDto);
  }

  @Get()
  findAll() {
    return this.buildingCommonEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingCommonEquipmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingCommonEquipmentDto) {
    return this.buildingCommonEquipmentService.update(+id, updateBuildingCommonEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingCommonEquipmentService.remove(+id);
  }
}
