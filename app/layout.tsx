import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const _ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Camino Pharmacy",
  description:
    "El Camino Pharmacy is a locally owned community pharmacy in North Hollywood offering fast, accurate refills, easy transfers, medication therapy management, and a special focus on mental health medications. $5 delivery within 5 miles. Most major insurance plans accepted.",
  keywords: [
    "pharmacy",
    "North Hollywood pharmacy",
    "prescription refills",
    "prescription transfers",
    "medication therapy management",
    "mental health medications",
    "local pharmacy delivery",
    "independent pharmacy",
  ],
  authors: [{ name: "El Camino Pharmacy" }],
  openGraph: {
    title: "El Camino Pharmacy — North Hollywood, CA",
    description:
      "Independent care. Expert guidance. Fast, accurate fills. Your neighborhood pharmacy in North Hollywood — refills, transfers, and expert medication management with $5 local delivery.",
    type: "website",
    url: "https://elcaminopharmacy.com",
    siteName: "El Camino Pharmacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Camino Pharmacy — North Hollywood, CA",
    description:
      "Independent care. Expert guidance. Fast, accurate fills. Your neighborhood pharmacy in North Hollywood.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
