import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { ApartmentEntity } from './apartment.entity';

class Apartments {}

@Entity()
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ApartmentEntity, (apartment) => apartment.options)
  apartments: ApartmentEntity[];
}
