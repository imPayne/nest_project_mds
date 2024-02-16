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
import { ApartmentEntity } from './@entities/apartment.entity';
import { BuildingToCommonEquipment } from './@entities/building_common_equipment.entity';
import { CommonEquipmentEntity } from './@entities/common_equipment.entity';
import { ApartmentTypeModule } from './apartment-type/apartment-type.module';
import { OwnerModule } from './owner/owner.module';
import { OwnerEntity } from './@entities/owner.entity';
import { TenantModule } from './tenant/tenant.module';
import { OptionModule } from './option/option.module';
import { PersonModule } from './person/person.module';
import { TenantEntity } from './@entities/tenant.entity';
import { ApartmentTypeEntity } from './@entities/apartment-type.entity';
import { OptionEntity } from './@entities/option.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'bXdYvx.b',
      database: 'apinest',
      entities: [
        AddressEntity,
        BuildingEntity,
        ApartmentEntity,
        BuildingToCommonEquipment,
        CommonEquipmentEntity,
        OwnerEntity,
        ApartmentTypeEntity,
        OwnerEntity,
        OptionEntity,
        TenantEntity,
      ],
      synchronize: true,
    }),
    BuildingModule,
    AddressModule,
    ApartmentModule,
    CommonEquipmentModule,
    BuildingCommonEquipmentModule,
    ApartmentTypeModule,
    OwnerModule,
    TenantModule,
    OptionModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
