"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.models = [];
    }
    async saveEntities(...models) {
        let result;
        await this.dataSource.transaction(async (manager) => {
            result = await Promise.all(models?.map(async (m) => await manager.save(m)));
        });
        return result;
    }
    async saveEntity(model) {
        const result = (await this.saveEntities(model))?.[0];
        return result;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base-service.js.map