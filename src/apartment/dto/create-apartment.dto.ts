import { ApiProperty } from '@nestjs/swagger';

export class CreateApartmentDto {
  @ApiProperty()
  loan: number;

  @ApiProperty()
  floor: number;

  @ApiProperty()
  apartmentNumber: string;

  @ApiProperty()
  doorNumber: string;
}
