import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {OptionEntity} from "../@entities/option.entity";
import {ApartmentEntity} from "../@entities/apartment.entity";
import {ApartmentModule} from "../apartment/apartment.module";

@Module({
  imports: [TypeOrmModule.forFeature([OptionEntity, ApartmentEntity]), ApartmentModule],
  controllers: [OptionController],
  providers: [OptionService],
})
export class OptionModule {}
