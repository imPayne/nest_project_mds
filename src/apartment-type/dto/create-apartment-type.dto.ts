import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('apartmentType')
export class CreateApartmentTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  maxOccupants: number;
}
