import { DataSource } from 'typeorm';
export declare abstract class BaseService<TModel> {
    protected readonly dataSource: DataSource;
    protected models: TModel[];
    constructor(dataSource: DataSource);
    saveEntities(...models: TModel[]): Promise<TModel[]>;
    saveEntity(model: TModel): Promise<TModel>;
}
