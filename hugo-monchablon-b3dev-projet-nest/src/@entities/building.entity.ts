import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { BuildingToCommonEquipment } from "./building_common_equipment.entity";

@Entity()
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BuildingToCommonEquipment, buildingToCommonEquipment => buildingToCommonEquipment.commonEquipment)
  public buildingToCommonEquipments: BuildingToCommonEquipment[];

  // un immeuble contient plusieurs appartement OneToMany avec apartment
  // un immeuble a une adresse OneToOne avec address
}
