import { CommonFacilityService } from './common-facility.service';
import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';
export declare class CommonFacilityController {
    private readonly commonFacilityService;
    constructor(commonFacilityService: CommonFacilityService);
    create(createCommonFacilityDto: CreateCommonFacilityDto): Promise<import("./entities/common-facility.entity").CommonFacilityEntity>;
    findAll(): Promise<import("./entities/common-facility.entity").CommonFacilityEntity[]>;
    findOne(id: string): Promise<import("./entities/common-facility.entity").CommonFacilityEntity>;
    update(id: string, updateCommonFacilityDto: UpdateCommonFacilityDto): Promise<import("./entities/common-facility.entity").CommonFacilityEntity>;
    remove(id: string): Promise<import("./entities/common-facility.entity").CommonFacilityEntity>;
}
