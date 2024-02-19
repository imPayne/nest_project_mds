import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TenantEntity } from '../@entities/tenant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TenantEntity])],
  controllers: [TenantController],
  providers: [TenantService],
})
export class TenantModule {}
