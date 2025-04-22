import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 border-b">
        <img src="logo.png" alt="Vita Lotus Logo" className="h-12" />
        <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="px-4 py-2 rounded bg-black text-white">
          {lang === "en" ? "ES" : "EN"}
        </button>
      </header>

      {/* HERO SECTION */}
      <section
        className="bg-cover bg-center text-white text-center py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154508-646beadb89a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Vita Lotus Realty Group</h1>
        <p className="text-2xl italic mb-6">Luxury Real Estate in Costa Rica</p>
        <p className="text-lg font-medium uppercase">Trust. Safety. Integrity.</p>
      </section>

      {/* WHY BUYERS TRUST US */}
      <section className="py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Buyers Trust Us</h2>
        <p className="text-gray-700 text-lg">
          We guide you through Costa Rica’s finest locations, ensuring every property is vetted, safe, and transparent. Our local expertise means no surprises — just informed, secure decisions.
        </p>
      </section>

      {/* WHY SELLERS WORK WITH US */}
      <section className="bg-gray-100 py-16 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Why Sellers Work With Us</h2>
        <p className="text-gray-700 text-lg">
          We connect high-integrity sellers with serious, qualified buyers. Every listing is curated, and every transaction handled with care, discretion, and precision.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; 2025 Vita Lotus Realty Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
