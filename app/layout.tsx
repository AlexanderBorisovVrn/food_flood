import "./globals.css";
import type { Metadata } from "next";
import { Inter,Alegreya } from "next/font/google";
import React from "react";
import Notification from "@/components/Notification";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["cyrillic", "latin"] });
export const alegreya = Alegreya({ subsets: ["cyrillic"],style:'italic' });

export const metadata: Metadata = {
  title: "FoodFlood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Notification />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
