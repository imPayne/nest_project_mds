import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { changeOwnerDto } from './dto/change-owner.dto';
import { addTenantsDto } from './dto/add-tenants.dto';


@ApiTags('Appartments')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get()
  findAll() {
    return this.apartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(+id);
  }

  @Patch('/owner/:id')
  changeOwner(@Param('id') id: string, @Body() changeOwnerDto: changeOwnerDto){
    return this.apartmentService.changeOwner(+id, changeOwnerDto)
  }

  @Patch('/tenants/:id')
  addTenant(@Param('id') id: string, @Body() addTenantsDto: addTenantsDto){
    return this.apartmentService.addTenant(+id, addTenantsDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }
}
