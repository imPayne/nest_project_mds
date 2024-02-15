import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApartmentTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  maxOccupants: number;
}
