import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from 'typeorm';
import { ApartmentEntity } from './apartment.entity';

@Entity("option")
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ApartmentEntity, (apartment) => apartment.options)
  apartments: ApartmentEntity[];
}
