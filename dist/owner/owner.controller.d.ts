import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    create(createOwnerDto: CreateOwnerDto): Promise<import("./entities/owner.entity").OwnerEntity>;
    findAll(): Promise<import("./entities/owner.entity").OwnerEntity[]>;
    findOne(id: string): Promise<import("./entities/owner.entity").OwnerEntity>;
    update(id: string, updateOwnerDto: UpdateOwnerDto): Promise<import("./entities/owner.entity").OwnerEntity>;
    remove(id: string): Promise<import("./entities/owner.entity").OwnerEntity>;
}
