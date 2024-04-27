import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E.B.N. Carmen Maizo de Bello.",
  description: "Excelencia académica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
