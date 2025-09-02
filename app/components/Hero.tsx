
export default function Hero() {
  return (
    <section id="home" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Context7 — Landing Page</h1>
          <p className="mb-6 text-gray-600">Template Next.js + Tailwind untuk membuat landing page dengan cepat.</p>
          <a href="#cta" className="bg-blue-600 text-white px-4 py-2 rounded">Mulai Sekarang</a>
        </div>
        <div className="flex-1 bg-white border rounded-lg p-8 shadow text-center">Preview / Screenshot</div>
      </div>
    </section>
  );
}
