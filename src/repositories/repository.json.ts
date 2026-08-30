import type { Catch } from '@/data/schema';
import { Repository } from './repository';
import * as fs from 'fs/promises';

class JSONRepository implements Repository<Catch> {
  private filename: string;

  constructor(filename: string | undefined = undefined) {
    this.filename = filename ?? 'catches.json';
  }

  async getAll(): Promise<Catch[]> {
    try {
      const data = await fs.readFile(`/tmp/${this.filename}`, 'utf-8');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading data from file:', error);
      return [];
    }
  }

  async saveAll(items: Catch[]): Promise<void> {
    const newData = JSON.stringify(items, null, 2);

    await fs.writeFile(`/tmp/${this.filename}`, newData, 'utf-8');
  }

  async getOne(id: string): Promise<Catch | null> {
    const allCatches = await this.getAll();
    const foundCatch = allCatches.find((catchItem) => catchItem.id === id);
    return foundCatch || null;
  }
}

export default JSONRepository;
