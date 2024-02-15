import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentService {
  create(createApartmentDto: CreateApartmentDto) {
    return 'This action adds a new apartment';
  }

  findAll() {
    return `This action returns all apartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartment`;
  }

  update(id: number, updateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
