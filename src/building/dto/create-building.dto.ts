import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';

export class CreateBuildingDto {
  @ApiProperty()
  constructionDate: Date;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: CreateAddressDto })
  createAddress: CreateAddressDto;
}
