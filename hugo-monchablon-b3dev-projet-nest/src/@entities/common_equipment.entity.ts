import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonEquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date', nullable: true })
  lastInspection?: string;
}
