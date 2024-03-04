import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    create(createPersonDto: CreatePersonDto): Promise<import("../@entities/person.entity").PersonEntity>;
    findAll(): Promise<import("../@entities/person.entity").PersonEntity[]>;
    findOne(id: string): Promise<import("../@entities/person.entity").PersonEntity>;
    update(id: string, updatePersonDto: UpdatePersonDto): Promise<import("../@entities/person.entity").PersonEntity>;
    remove(id: string): Promise<{
        id: number;
    } & import("../@entities/person.entity").PersonEntity>;
}
