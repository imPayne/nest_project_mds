import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { BuildingEntity } from '../@entities/building.entity';
import { AddressEntity } from '../@entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressService } from '../address/address.service';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(BuildingEntity)
    protected readonly repository: Repository<BuildingEntity>,
    private readonly addressService: AddressService,
  ) {}
  async create(createBuilding: CreateBuildingDto): Promise<BuildingEntity> {
    const newAddress = new AddressEntity();
    Object.assign(newAddress, createBuilding.createAddress);
    const newBuilding = new BuildingEntity();
    Object.assign(newBuilding, createBuilding);

    newBuilding.address = newAddress;
    await this.repository.save(newBuilding);
    await this.addressService.create(newAddress);
    return this.findOne(newBuilding.id);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BuildingEntity> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateBuildingDto) {
    const getBuilding = await this.findOne(id);
    Object.assign(getBuilding, updateBuildingDto);

    return await this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
