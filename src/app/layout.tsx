"use client"; // Necesario porque Redux usa estado

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="es">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
            <main>
              {children}
            </main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
