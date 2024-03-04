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

@Entity("apartment")
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doorNumber: string;

  @Column()
  floor: number;

  @Column()
  loan: number;

  @Column()
  apartmentNumber: string;

  @ManyToOne(() => OwnerEntity, (owner) => owner.apartments)
  owner: OwnerEntity;

  @ManyToOne(() => BuildingEntity, (building) => building.apartments)
  building: BuildingEntity;

  @ManyToOne(
    () => ApartmentTypeEntity,
    (apartmentType) => apartmentType.apartments,
  )
  apartmentType: ApartmentTypeEntity;

  @OneToMany(() => OptionEntity, (option) => option.apartment)
  options: OptionEntity[];

  @OneToMany(() => TenantEntity, (tenant) => tenant.apartment)
  tenants: TenantEntity[];
}
