import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingEntity } from './@entities/building.entity';
import { AddressEntity } from './@entities/address.entity';
import { BuildingModule } from './building/building.module';
import { AddressModule } from './address/address.module';
import { ApartmentModule } from './apartment/apartment.module';
import { CommonEquipmentModule } from './common_equipment/common_equipment.module';
import { BuildingCommonEquipmentModule } from './building_common_equipment/building_common_equipment.module';
import {ApartmentEntity} from "./@entities/apartment.entity";
import {BuildingToCommonEquipment} from "./@entities/building_common_equipment.entity";
import {CommonEquipmentEntity} from "./@entities/common_equipment.entity";
import { ApartmentTypeModule } from './apartment-type/apartment-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'apinest',
      entities: [AddressEntity, BuildingEntity, ApartmentEntity, BuildingToCommonEquipment, CommonEquipmentEntity],
      synchronize: true,
    }),
    BuildingModule,
    AddressModule,
    ApartmentModule,
    CommonEquipmentModule,
    BuildingCommonEquipmentModule,
    ApartmentTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
