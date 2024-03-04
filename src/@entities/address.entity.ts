import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BuildingEntity } from './building.entity';

@Entity("address")
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  streetNumber: string;
  @Column()
  street: string;
  @Column()
  zipCode: string;
  @Column()
  city: string;

  @OneToOne(() => BuildingEntity, (building) => building.address)
  building: BuildingEntity;
}
