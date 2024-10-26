import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-14">
        {children}{" "}
        {/* Konten yang akan ditampilkan di antara header dan footer */}
        <Footer />
      </main>
    </div>
  );
}
