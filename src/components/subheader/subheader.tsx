import Link from 'next/link';

const Subheader = () => {
  return (
    <div className="flex items-center justify-between py-2 flex md:hidden">
      <ul className="flex items-center justify-center w-full">
        <li className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer whitespace-nowrap">
          <Link
            href="/"
            className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer whitespace-nowrap">
          <Link
            href="/catches"
            className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer"
          >
            Catches
          </Link>
        </li>
        <li className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer whitespace-nowrap">
          <Link
            href="/catches/new"
            className="text-white px-4 py-2 hover:bg-[#2c5a8c] cursor-pointer"
          >
            New Catch
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Subheader;
