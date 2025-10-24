import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/">Personal</Link>
        <span>/</span>
        <Link href="/">Lifestyle</Link>
        <span>/</span>
        <Link href="/">Creative</Link>
        <span>/</span>
        <Link href="/">Travel</Link>
      </div>
    </>
  );
}
