import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-[#427cbc] h-16 flex items-center justify-center">
      <div className="flex items-center justify-center md:justify-between w-full max-w-6xl px-4">
        <h1 className="text-white text-2xl font-bold">LogHook</h1>
        <ul className="space-x-4 md:space-x-6 lg:space-x-8 hidden md:flex">
          <li className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer">
            <Link
              href="/"
              className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer">
            <Link
              href="/catches"
              className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer"
            >
              Catches
            </Link>
          </li>
          <li className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer">
            <Link
              href="/catches/new"
              className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer"
            >
              New Catch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
