import Link from 'next/link';
import InputSearch from './InputSearch';
import UserAction from './userAction';

export default function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-color-primary text-2xl">
          Back Cuy
        </Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  );
}
