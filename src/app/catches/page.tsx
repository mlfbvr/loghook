import CatchesService from '@/services/catches';
import type { Catch } from '@/data/schema';

const CatchesPage = async () => {
  const catchesService = new CatchesService();

  const catches: Catch[] = await catchesService.getAllCatches();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Catches</h1>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {catches.length === 0 ? (
          <p>
            No catches found. You can add a new catch using the "New Catch" link
            in the header.
          </p>
        ) : (
          <ul>
            {catches.map((catchItem, index) => (
              <li key={index}>
                {catchItem.species} - {catchItem.weight} lbs -{' '}
                {catchItem.dateCaught}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default CatchesPage;
