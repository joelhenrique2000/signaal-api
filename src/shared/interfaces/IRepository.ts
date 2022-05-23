export interface IRepository<T> {
    create(t: T): Promise<boolean>;
    findAll(t: T): Promise<any>;
    findOne(id: string): Promise<T>;
    update(t: T): Promise<any>;
    remove(t: T): Promise<any>;
}
