import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from '../@entities/person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    protected readonly repository: Repository<PersonEntity>,
  ) {}
  async create(createPersonDto: CreatePersonDto) {
    const newPerson = new PersonEntity();
    Object.assign(newPerson, createPersonDto);
    return await this.repository.save(newPerson);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const getPerson = await this.findOne(id);
    Object.assign(getPerson, updatePersonDto);
    return await this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.repository.softRemove({ id });
  }
}
