import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressEntity } from './entities/address.entity';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service';
export declare class AddressService extends BaseService<AddressEntity> {
    protected readonly repository: Repository<AddressEntity>;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<AddressEntity>, dataSource: DataSource);
    create(createAddressDto: CreateAddressDto): Promise<AddressEntity>;
    findAll(): Promise<AddressEntity[]>;
    findOne(id: number): Promise<AddressEntity>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<AddressEntity>;
    deleteAddress(id: number): Promise<AddressEntity>;
}
