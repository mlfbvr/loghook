export interface Repository<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T | null>;
  saveOne(item: T): Promise<void>;
}
