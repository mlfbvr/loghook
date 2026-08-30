export interface Repository<T> {
  getAll(): Promise<T[]>;
  saveAll(items: T[]): Promise<void>;
  getOne(id: string): Promise<T | null>;
}
