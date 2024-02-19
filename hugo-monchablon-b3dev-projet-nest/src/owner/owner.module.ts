import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEntity } from '../@entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEntity])],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
