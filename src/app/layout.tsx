import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RSC Workshop",
  description: "RSC Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen text-sky-800 antialiased`}
      >
        <div className="w-64 bg-sky-100 p-8 font-extrabold">RSC Workshop</div>
        <div className="flex-1 bg-sky-50 p-8">{children}</div>
      </body>
    </html>
  );
}
