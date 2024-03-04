import { ApiProperty } from '@nestjs/swagger';

export class CreateApartmentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  loan: number;

  @ApiProperty()
  floor: number;

  @ApiProperty()
  appartementNumber: string;
}
