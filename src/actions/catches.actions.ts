'use server';
import type { Catch } from '@/data/schema';
import CatchesService from '@/services/catches';

const catchesService = new CatchesService();

export const saveCatch = async (catchData: Catch) => {
  try {
    catchesService.addCatch(catchData);
  } catch (error) {
    console.error('Error saving catch:', error);
  }
};
