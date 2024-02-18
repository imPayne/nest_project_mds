import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
export declare class OwnerService {
    create(createOwnerDto: CreateOwnerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOwnerDto: UpdateOwnerDto): string;
    remove(id: number): string;
}
