import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BuildingToCommonEquipment } from './building_common_equipment.entity';
import { ApartmentEntity } from './apartment.entity';
import { AddressEntity } from './address.entity';

@Entity("building")
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  constructionDate: Date;

  @OneToMany(
    () => BuildingToCommonEquipment,
    (buildingToCommonEquipment) => buildingToCommonEquipment.commonEquipment,
  )
  public buildingToCommonEquipments: BuildingToCommonEquipment[];

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.building)
  apartments: ApartmentEntity[];

  @OneToOne(() => AddressEntity, (address) => address.building)
  address: AddressEntity;
}
