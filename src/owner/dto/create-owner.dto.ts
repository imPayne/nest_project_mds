import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
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
