import { CreateOwnerDto } from './dto/create-owner.dto';
import { Repository } from 'typeorm';
import { OwnerEntity } from '../@entities/owner.entity';
export declare class OwnerService {
    protected readonly repository: Repository<OwnerEntity>;
    constructor(repository: Repository<OwnerEntity>);
    create(createOwnerDto: CreateOwnerDto): Promise<OwnerEntity>;
    findAll(): Promise<OwnerEntity[]>;
    findOne(id: number): Promise<OwnerEntity>;
    update(id: number, updateOwnerDto: any): Promise<OwnerEntity>;
    remove(id: number): Promise<{
        id: number;
    } & OwnerEntity>;
}
