import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommonEquipmentService } from './common_equipment.service';
import { CreateCommonEquipmentDto } from './dto/create-common_equipment.dto';

@Controller('common-equipment')
export class CommonEquipmentController {
  constructor(
    private readonly commonEquipmentService: CommonEquipmentService,
  ) {}

  @Post()
  create(@Body() createCommonEquipmentDto: CreateCommonEquipmentDto) {
    return this.commonEquipmentService.create(createCommonEquipmentDto);
  }

  @Get()
  findAll() {
    return this.commonEquipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commonEquipmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommonEquipmentDto) {
    return this.commonEquipmentService.update(+id, updateCommonEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commonEquipmentService.remove(+id);
  }
}
