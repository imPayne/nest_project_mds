import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BuildingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // un immeuble contient plusieurs appartement OneToMany avec apartment
  // un immeuble a une adresse OneToOne avec address
}
