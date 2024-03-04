import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from '../@entities/person.entity';
import { Repository } from 'typeorm';
export declare class PersonService {
    protected readonly repository: Repository<PersonEntity>;
    constructor(repository: Repository<PersonEntity>);
    create(createPersonDto: CreatePersonDto): Promise<PersonEntity>;
    findAll(): Promise<PersonEntity[]>;
    findOne(id: number): Promise<PersonEntity>;
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<PersonEntity>;
    remove(id: number): Promise<{
        id: number;
    } & PersonEntity>;
}
