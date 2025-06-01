import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">42 Challenge Dashboard – Mehrez Edition</h1>
      <p className="mb-4">Track your daily goals, progress, and ask GPT for help – all in one place.</p>
      <Link href="/login" className="text-blue-600 underline">Login</Link> or <Link href="/signup" className="text-blue-600 underline">Sign up</Link>
    </main>
  );
}