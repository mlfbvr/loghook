'use client';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CatchSchema } from '@/data/schema';
import FormInput from '@/components/ui/input';
import { saveCatch } from '@/actions/catches.actions';

interface CatchFormData {
  species: string;
  length: number;
  weight: number;
  caughtBy?: string;
  location: string;
  released: boolean;
  dateCaught: string;
}
const NewCatchPage = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CatchFormData>({
    mode: 'all',
    resolver: zodResolver(CatchSchema),
  });

  useEffect(() => {
    // Get the location from the browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setValue('location', `${latitude}, ${longitude}`);
        },
        (error) => {
          console.info('Error getting location:', error.toString());
        }
      );
    } else {
      console.info('Geolocation is not supported by this browser.');
    }
  }, [setValue]);

  const onSubmit = async (data: CatchFormData, event: any) => {
    await saveCatch(data);
    event.target.reset();
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">New Catch</h1>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full max-w-md"
          method="POST"
        >
          <div className="mb-4">
            <label
              htmlFor="species"
              className="block text-gray-700 font-bold mb-2"
            >
              Species
            </label>
            <Controller
              name="species"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  {...field}
                  id="species"
                  placeholder="Enter species"
                />
              )}
            />
            <p>{errors.species?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="length"
              className="block text-gray-700 font-bold mb-2"
            >
              Length (inches)
            </label>
            <Controller
              name="length"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <FormInput
                  {...field}
                  id="length"
                  type="number"
                  placeholder="Enter length"
                />
              )}
            />
            <p>{errors.length?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-gray-700 font-bold mb-2"
            >
              Weight (lbs)
            </label>
            <Controller
              name="weight"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <FormInput
                  {...field}
                  id="weight"
                  type="number"
                  placeholder="Enter weight"
                />
              )}
            />
            <p>{errors.weight?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateCaught"
              className="block text-gray-700 font-bold mb-2"
            >
              Date Caught
            </label>
            <Controller
              name="dateCaught"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  {...field}
                  id="dateCaught"
                  type="date"
                  placeholder="Enter date caught"
                />
              )}
            />
            <p>{errors.dateCaught?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="released"
              className="block text-gray-700 font-bold mb-2"
            >
              Released{' '}
              <input id="released" type="checkbox" {...register('released')} />
            </label>

            <p>{errors.released?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="anglerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Angler Name
            </label>
            <Controller
              name="caughtBy"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  {...field}
                  id="anglerName"
                  placeholder="Enter angler name"
                  value={field.value || ''}
                />
              )}
            />
            <p>{errors.caughtBy?.message}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="locationLatitude"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label>
            <Controller
              name="location"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput {...field} id="location" type="text" readOnly />
              )}
            />
            <p>{errors.location?.message}</p>
          </div>
          <button
            type="submit"
            className="disabled:bg-gray-300 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        <div>
          {isSubmitting && <p>Submitting...</p>}
          {errors && Object.keys(errors).length > 0 && (
            <div className="mt-4 text-red-500">
              <h2 className="font-bold">Form Errors:</h2>
              <ul>
                {Object.entries(errors).map(([field, error]) => (
                  <li key={field}>
                    {field}: {(error as any).message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NewCatchPage;
