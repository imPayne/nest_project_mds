import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  streetNumber: string;
  @ApiProperty()
  street: string;
  @ApiProperty()
  zipCode: string;
  @ApiProperty()
  city: string;
}
