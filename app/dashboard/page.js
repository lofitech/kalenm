'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>
      <p className="mb-2">✅ 42 Challenge Day 1</p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>English: 15 min</li>
        <li>CS50 / Odin lesson</li>
        <li>Mini project step</li>
        <li>Reflection in Notion or GitHub</li>
      </ul>
      <p className="mt-4 text-gray-500 text-sm">More AI features coming soon…</p>
    </div>
  );
}