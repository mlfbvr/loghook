import type { Catch } from '@/data/schema';
import CatchesRepository from '@/repositories/catches.repository.mysql';

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

  public async getAllCatches(): Promise<Catch[]> {
    await this.loadCatches();
    return this.catches;
  }

  public async addCatch(newCatch: Catch): Promise<void> {
    await this.repository.saveOne(newCatch);
    this.catches.push(newCatch);
  }
}

export default CatchesService;
