import type { Catch } from '@/data/schema';
import CatchesRepository from '@/repositories/repository.json';
import { v4 as uuidv4 } from 'uuid';

class CatchesService {
  private catches: Catch[] = [];
  private repository: CatchesRepository;

  constructor() {
    this.repository = new CatchesRepository();
  }

  private async loadCatches() {
    const storedCatches = await this.repository.getAll();
    if (storedCatches) {
      this.catches = storedCatches;
    }
  }

  private async saveCatches() {
    await this.repository.saveAll(this.catches);
  }

  public async getAllCatches(): Promise<Catch[]> {
    await this.loadCatches();
    return this.catches;
  }

  public async addCatch(newCatch: Catch): Promise<void> {
    await this.loadCatches();
    this.catches.push({ id: uuidv4(), ...newCatch });
    this.saveCatches();
  }
}

export default CatchesService;
