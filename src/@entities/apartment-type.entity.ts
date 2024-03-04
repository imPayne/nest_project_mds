import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApartmentEntity } from './apartment.entity';

@Entity()
export class ApartmentTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  maxOccupants: number;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.apartmentType)
  apartments: ApartmentEntity[];
}
