import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<import("../@entities/address.entity").AddressEntity>;
    findAll(): Promise<import("../@entities/address.entity").AddressEntity[]>;
    findOne(id: string): Promise<import("../@entities/address.entity").AddressEntity>;
    update(id: string, updateAddressDto: any): Promise<import("../@entities/address.entity").AddressEntity>;
    remove(id: string): Promise<import("../@entities/address.entity").AddressEntity>;
}
