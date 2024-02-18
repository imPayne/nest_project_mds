import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { DataSource, Repository } from 'typeorm';
import { AddressEntity } from '../@entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    protected readonly repository: Repository<AddressEntity>,
  ) {}
  async create(newAddress: CreateAddressDto): Promise<AddressEntity> {
    const { id } = await this.repository.save({
      streetNumber: newAddress.streetNumber,
      street: newAddress.street,
      zipCode: newAddress.zipCode,
      city: newAddress.city,
    });

    return await this.findOne(id);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AddressEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateAddressDto): Promise<AddressEntity> {
    const getAddress = await this.findOne(id);
    Object.assign(getAddress, updateAddressDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const toRemove: AddressEntity = await this.findOne(id);
    const address: AddressEntity = toRemove;
    await this.repository.remove(toRemove);
    return address;
  }
}
