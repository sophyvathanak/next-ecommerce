import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Double N School & Office Essentials",
  description:
    "Named after Nak & Nea — our story begins here, and your journey through learning, writing, and organizing starts too. At Double N, we bring you quality books, stationery, and office supplies that make school and work life easier, neater, and more enjoyable. Whether you're preparing for class, setting up your workspace, or looking for the perfect gift — we’ve got something special for every note-taker, writer, and dreamer. Thank you for choosing Double N — where every page turns with care.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
