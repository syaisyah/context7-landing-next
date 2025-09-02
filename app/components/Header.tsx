
'use client';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="font-bold text-blue-600">Context7</a>
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
        <nav className={`${open ? 'block' : 'hidden'} md:flex space-x-4`}>
          <a href="#features">Fitur</a>
          <a href="#about">Tentang</a>
          <a href="#contact">Kontak</a>
          <a href="#cta" className="bg-blue-600 text-white px-3 py-1 rounded">Coba Sekarang</a>
        </nav>
      </div>
    </header>
  );
}
