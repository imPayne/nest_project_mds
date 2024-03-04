import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany, ManyToOne,
} from 'typeorm';
import { ApartmentEntity } from './apartment.entity';

@Entity("option")
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.options)
  apartment: ApartmentEntity;
}