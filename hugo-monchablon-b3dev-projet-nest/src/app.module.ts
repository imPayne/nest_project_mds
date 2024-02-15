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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'bXdYvx.b',
      database: 'apinest',
      entities: [AddressEntity, BuildingEntity],
      synchronize: true,
    }),
    BuildingModule,
    AddressModule,
    ApartmentModule,
    CommonEquipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
