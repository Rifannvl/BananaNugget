import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-yellow-100">
      <h1 className="text-4xl font-bold mb-4">
        Selamat datang di BananaNugget!
      </h1>
      <p className="text-lg mb-6">Nikmati kelezatan dalam setiap gigitan.</p>
      <img
        src="https://picsum.photos/400" // Ganti dengan path gambar produk utama Anda
        alt="Banana Nugget"
        className="max-w-full h-auto rounded-lg mb-6"
      />
      <div className="space-x-4">
        <button
          className="px-6 py-3 text-white bg-yellow-500 rounded hover:bg-yellow-600 transition"
          onClick={() => (window.location.href = "/menu")}
        >
          Jelajahi Menu
        </button>
        <button
          className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600 transition"
          onClick={() => (window.location.href = "/order")}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}
