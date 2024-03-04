import { ApiProperty } from "@nestjs/swagger";
import {IsOptional} from "class-validator";

export class CreateOptionDto {
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({type: [Number]})
  @IsOptional()
  apartments?: number[];
}
