'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSignup(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    setMessage(error ? error.message : 'Signup successful! Check your email.');
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white">Sign Up</button>
      </form>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
    </div>
  );
}