import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    create(createOwnerDto: CreateOwnerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOwnerDto: UpdateOwnerDto): string;
    remove(id: string): string;
}
