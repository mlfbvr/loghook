export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold">Welcome to LogHook!</h1>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Welcome to LogHook! This is the home page of the application. You can
        navigate to the Catches page or create a new catch using the links in
        the header.
      </main>
    </div>
  );
}
