import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApartmentEntity } from './apartment.entity';
import { PersonEntity } from './person.entity';

@Entity()
export class OwnerEntity extends PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: string;

  @Column()
  is_tva: boolean;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.owner)
  apartments: ApartmentEntity[];
}
