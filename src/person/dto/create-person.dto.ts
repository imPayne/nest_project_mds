import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('persons')
export class CreatePersonDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phoneNumber: string;
}
