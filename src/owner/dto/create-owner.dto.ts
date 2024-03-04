import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
export class CreateOwnerDto {
  @ApiProperty()
  accountNumber: string;

  @Column()
  is_tva: boolean;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ type: [Number] })
  apartments: number[];
}
