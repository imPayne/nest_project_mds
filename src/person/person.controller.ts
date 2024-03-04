import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('person')
@ApiTags("person")
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  async findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
