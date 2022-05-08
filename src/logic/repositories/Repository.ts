export interface Repository<T> {
  create(entity: T): Promise<T>;
}