import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const geist = localFont({
  src: "../public/fonts/GeistVF.woff2",
  variable: "--font-geist",
  display: "swap",
  // Note: Download Geist from https://vercel.com/font
  // Place GeistVF.woff2 in /public/fonts/
});

export const metadata: Metadata = {
  title: "MLX Consulting",
  description:
    "Leadership in Real Estate Development, Design and Construction. A passion to deliver authentic, remarkable, sustainable and profitable environments.",
  openGraph: {
    title: "MLX Consulting",
    description:
      "Leadership in Real Estate Development, Design and Construction.",
    url: "https://mlxconsulting.com",
    siteName: "MLX Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
