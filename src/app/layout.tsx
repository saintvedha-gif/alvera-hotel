import type { Metadata } from "next";
import "./globals.css";
import { hotel } from "@/config/hotel";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/hotel/WhatsAppButton";

export const metadata: Metadata = {
  title: `${hotel.name} — ${hotel.slogan}`,
  description: hotel.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
