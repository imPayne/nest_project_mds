import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { OwnerEntity } from './owner.entity';
import { BuildingEntity } from './building.entity';
import { ApartmentTypeEntity } from './apartment-type.entity';
import { OptionEntity } from './option.entity';
import { TenantEntity } from './tenant.entity';

@Entity()
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doorNumber: string;

  @Column()
  floor: number;

  @ManyToOne(() => OwnerEntity, (owner) => owner.apartments)
  owner: OwnerEntity;

  @ManyToOne(() => BuildingEntity, (building) => building.apartments)
  building: BuildingEntity;

  @ManyToOne(
    () => ApartmentTypeEntity,
    (apartmentType) => apartmentType.apartments,
  )
  apartmentType: ApartmentTypeEntity;

  @ManyToMany(() => OptionEntity, (option) => option.apartments)
  options: OptionEntity[];

  @OneToMany(() => TenantEntity, (tenant) => tenant.apartment)
  tenants: TenantEntity[];
}
