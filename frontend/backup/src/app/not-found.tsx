import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center">
      <div className="rounded-lg border border-slate-900 p-5">
        <h2 className="text-6xl">Not Found</h2>
        <p className="text-slate-500">Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
