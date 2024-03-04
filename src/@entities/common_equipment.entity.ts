import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BuildingToCommonEquipment } from './building_common_equipment.entity';

@Entity()
export class CommonEquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => BuildingToCommonEquipment,
    (buildingToCommonEquipment) => buildingToCommonEquipment.building,
  )
  public buildingToCommonEquipments: BuildingToCommonEquipment[];
}
