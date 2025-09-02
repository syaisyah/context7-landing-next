
'use client';
import { useState } from 'react';

export default function CTA() {
  const [msg, setMsg] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('Terima kasih! (demo, tidak ada backend)');
  };
  return (
    <section id="cta" className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Siap mencoba Context7?</h2>
        <form onSubmit={handleSubmit} className="flex justify-center gap-2 max-w-md mx-auto">
          <input type="email" placeholder="email@contoh.com" required className="flex-1 border px-3 py-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Daftar</button>
        </form>
        {msg && <p className="mt-2 text-gray-600">{msg}</p>}
      </div>
    </section>
  );
}
