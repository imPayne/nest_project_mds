import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    findAll(): Promise<import("./entities/address.entity").AddressEntity[]>;
    create(createAddressDto: CreateAddressDto): Promise<import("./entities/address.entity").AddressEntity>;
    findOne(id: string): Promise<import("./entities/address.entity").AddressEntity>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<import("./entities/address.entity").AddressEntity>;
    remove(id: string): Promise<import("./entities/address.entity").AddressEntity>;
}
