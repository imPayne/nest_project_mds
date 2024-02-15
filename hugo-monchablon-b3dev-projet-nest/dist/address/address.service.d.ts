import { CreateAddressDto } from './dto/create-address.dto';
export declare class AddressService {
    create(createAddressDto: CreateAddressDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAddressDto: any): string;
    remove(id: number): string;
}
