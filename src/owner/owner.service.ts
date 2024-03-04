import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerEntity } from '../@entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(OwnerEntity)
    protected readonly repository: Repository<OwnerEntity>,
  ) {}
  async create(createOwnerDto: CreateOwnerDto) {
    const newOwner = new OwnerEntity();

    Object.assign(newOwner, createOwnerDto);

    newOwner.is_tva = true;
    await this.repository.save(newOwner);
    return await this.repository.findOne({ where: { id: newOwner.id } });
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateOwnerDto) {
    const getOwner = await this.findOne(id);
    Object.assign(getOwner, updateOwnerDto);

    return await this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return await this.repository.softRemove({ id });
  }
}
