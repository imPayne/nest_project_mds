import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantEntity } from '../@entities/tenant.entity';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(TenantEntity)
    protected readonly repository: Repository<TenantEntity>,
  ) {}
  async create(createTenantDto: CreateTenantDto) {
    const newTenant = new TenantEntity();

    Object.assign(newTenant, createTenantDto);
    await this.repository.save(newTenant);
    return newTenant;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.find({ where: { id: id } });
  }

  async update(id: number, updateTenantDto) {
    return await this.repository.save({
      id: updateTenantDto.id,
      isPrimaryTenant: updateTenantDto.isPrimaryTenant,
      apartment: updateTenantDto.apartment,
    });
  }

  async remove(id: number) {
    return await this.repository.softRemove({ id: id });
  }
}
