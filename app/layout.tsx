import "./globals.css";
import type { Metadata } from "next";
import { Inter, Alegreya } from "next/font/google";
import React from "react";
import Notification from "@/components/Notification";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["cyrillic", "latin"] });
export const alegreya = Alegreya({ subsets: ["cyrillic"], style: 'italic' });

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
      <AuthProvider>
        <body className={inter.className}>
          <Notification />
          <NavBar />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
