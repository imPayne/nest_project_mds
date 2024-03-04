import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('owner')
@ApiTags("owner")
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  async ccreate(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  async cfindAll() {
    return this.ownerService.findAll();
  }

  @Get(':id')
  async cfindOne(@Param('id') id: string) {
    return this.ownerService.findOne(+id);
  }

  @Patch(':id')
  async cupdate(@Param('id') id: string, @Body() updateOwnerDto) {
    return this.ownerService.update(+id, updateOwnerDto);
  }

  @Delete(':id')
  async cremove(@Param('id') id: string) {
    return this.ownerService.remove(+id);
  }
}
