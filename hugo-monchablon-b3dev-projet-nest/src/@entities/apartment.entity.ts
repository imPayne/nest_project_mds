import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApartmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numberApartment: number;

  @Column()
  floor: number;
}
