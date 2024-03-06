import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerEntity } from './entities/owner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service'; 
import { PersonEntity } from 'src/person/entities/person.entity';
import { PersonModule } from 'src/person/person.module';
import { PersonService } from 'src/person/person.service';

@Injectable()
export class OwnerService extends BaseService<OwnerEntity> {

  constructor(
    @InjectRepository(OwnerEntity)
    private readonly repository: Repository<OwnerEntity>,
    private readonly personService:PersonService, 
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }

  async create(createOwnerDto: CreateOwnerDto): Promise<OwnerEntity> {
    const owner:OwnerEntity = new OwnerEntity();
    Object.assign(owner, createOwnerDto);
    return await this.saveEntities(owner)?.[0];;
  }

  findAll(): Promise<OwnerEntity[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<OwnerEntity> {
    return this.repository.findOne({where: { id }});
  }

  async update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<OwnerEntity> {
    const owner = await this.repository.findOne({ where: { id } });
    if (!owner){
      throw new NotFoundException('Owner found ');
    }
    Object.assign(owner,updateOwnerDto)
    return this.repository.save(owner);
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}


