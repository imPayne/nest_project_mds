import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApartmentEntity } from '../@entities/apartment.entity';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(ApartmentEntity)
    protected readonly repository: Repository<ApartmentEntity>,
  ) {}

  async create(createApartmentDto: CreateApartmentDto) {
    const newApartment = new ApartmentEntity();

    Object.assign(newApartment, createApartmentDto);
    return await this.repository.save(newApartment);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateApartmentDto) {
    const updateApartment = await this.findOne(id);

    Object.assign(updateApartment, updateApartmentDto);
    return await this.repository.save(updateApartment);
  }

  async remove(id: number) {
    return await this.repository.remove(await this.findOne(id));
  }
}
