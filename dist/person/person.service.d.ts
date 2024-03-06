import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonEntity } from './entities/person.entity';
import { BaseService } from 'src/@core/base-service';
import { DataSource, Repository } from 'typeorm';
export declare class PersonService extends BaseService<PersonEntity> {
    protected readonly repository: Repository<PersonEntity>;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<PersonEntity>, dataSource: DataSource);
    create(createPersonDto: CreatePersonDto): Promise<PersonEntity>;
    findAll(): Promise<PersonEntity[]>;
    findOne(id: number): Promise<PersonEntity>;
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<PersonEntity>;
    remove(id: number): Promise<PersonEntity>;
}
