import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { AddFacilityDto } from './dto/add-facilities.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('buildings')
@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingService.createBuilding(createBuildingDto);
  }

  @Post(':id')
  addFacilities(@Param('id') id:number, @Body() AddFacilityDto: AddFacilityDto){
    return this.buildingService.assignFacilitiesAndCreateTable(id,AddFacilityDto)
  }

  @Get()
  findAll() {
    return this.buildingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingDto: UpdateBuildingDto) {
    return this.buildingService.update(+id, updateBuildingDto);
  }

  @Get('/percentage/:id')
  occupationPercentage(@Param('id') id:string){
    return this.buildingService.occupationPercentage(+id);
  }

  @Get('/number/:id')
  numberOfApart(@Param('id') id:string){
    return this.buildingService.numberOfApart(+id);
  }

  @Get('/tenants/:id')
  nbTenants(@Param('id') id:string){
    return this.buildingService.nbTenant(+id);
  }

  @Get('/under/:id')
  underOccupy(@Param('id') id:string){
    return this.buildingService.underOccupy(+id);
  }

  @Get('/over/:id')
  overOccupy(@Param('id') id:string){
    return this.buildingService.overOccupy(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingService.remove(+id);
  }
}
