import {Inject, Injectable} from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import {OptionEntity} from "../@entities/option.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {ApartmentService} from "../apartment/apartment.service";

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionEntity)
    private repository: Repository<OptionEntity>,
    @Inject(ApartmentService)
    private readonly apartmentService: ApartmentService,
  ) {}
  async create(createOptionDto: CreateOptionDto) {
    const option = new OptionEntity();
    option.name = createOptionDto.name;
    option.apartment = await this.apartmentService.findOne(createOptionDto.apartment);
    await this.repository.save(option);

    return await this.findOne(option.id);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } })
  }

  async update(id: number, updateOptionDto) {
    return `This action updates a #${id} option`;
  }

  async remove(id: number) {
    return await this.repository.remove(await this.findOne(id));
  }
}
