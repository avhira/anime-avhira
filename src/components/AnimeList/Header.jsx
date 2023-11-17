import Link from 'next/link';

export default function Header({ title, linkhref, linkTitle }) {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkTitle && linkhref ? (
        <Link
          href={linkhref}
          className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
