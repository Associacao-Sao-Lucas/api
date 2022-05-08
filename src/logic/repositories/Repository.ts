export interface Repository<T> {
  create(entity: Omit<T, "id">): Promise<T>;
  delete(entity_id: string): Promise<void>;
  update(entity: T): Promise<T>;
  show(entity_id: string): Promise<T>;
  index(): Promise<T[]>;
}