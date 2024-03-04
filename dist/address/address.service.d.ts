import { CreateAddressDto } from './dto/create-address.dto';
import { Repository } from 'typeorm';
import { AddressEntity } from '../@entities/address.entity';
export declare class AddressService {
    protected readonly repository: Repository<AddressEntity>;
    constructor(repository: Repository<AddressEntity>);
    create(newAddress: CreateAddressDto): Promise<AddressEntity>;
    findAll(): Promise<AddressEntity[]>;
    findOne(id: number): Promise<AddressEntity>;
    update(id: number, updateAddressDto: any): Promise<AddressEntity>;
    remove(id: number): Promise<AddressEntity>;
}
