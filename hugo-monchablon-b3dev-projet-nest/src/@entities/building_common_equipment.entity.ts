import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {BuildingEntity} from "./building.entity";
import {CommonEquipmentEntity} from "./common_equipment.entity";

@Entity()
export class BuildingToCommonEquipment {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => BuildingEntity, (building) => building.buildingToCommonEquipments)
  public building: BuildingEntity

  @ManyToOne(() => CommonEquipmentEntity, (commonEquipment) => commonEquipment.buildingToCommonEquipments)
  public commonEquipment: CommonEquipmentEntity

  @Column({ type: 'date', nullable: true })
  lastInspection?: string;
}
