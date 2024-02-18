import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApartmentEntity } from './apartment.entity';
import { CreateTenantDto } from '../tenant/dto/create-tenant.dto';
import { PersonEntity } from './person.entity';

@Entity()
export class TenantEntity extends PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isPrimaryTenant: boolean;

  @ManyToOne(() => ApartmentEntity, (apartment) => apartment.tenants)
  apartment: ApartmentEntity;
}
