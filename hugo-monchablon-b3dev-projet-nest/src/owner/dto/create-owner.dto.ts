import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import {Column} from "typeorm";
import {ApartmentEntity} from "../../@entities/apartment.entity";
export class CreateOwnerDto {
  @ApiProperty()
  accountNumber: string;

  @Column()
  is_tva: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [Number] })
  createAddress: number[];
}
