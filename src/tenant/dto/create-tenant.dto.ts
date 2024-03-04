import { ApiProperty } from '@nestjs/swagger';

export class CreateTenantDto {
  @ApiProperty()
  accountNumber: string;

  @ApiProperty()
  isPrimaryTenant: boolean;
}
