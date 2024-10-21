import { OrbitIcon } from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 800",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "RSC Workshop",
  description: "RSC Workshop",
};

const routes = {
  home: "/",
  "01-intro": "/01-intro",
  "02-streaming": "/02-streaming",
  "03-client-boundary": "/03-client-boundary",
  "04-server-functions": "/04-server-functions",
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
        <div className="w-64 bg-sky-100 p-8">
          <p className="flex items-center gap-2">
            <OrbitIcon className="size-8 text-primary" />
            <span className="font-extrabold">RSC Workshop</span>
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <SidebarLink href={routes.home}>Home</SidebarLink>
            <SidebarLink href={routes["01-intro"]}>01 - Intro</SidebarLink>
            <SidebarLink href={routes["02-streaming"]}>
              02 - Streaming
            </SidebarLink>
            <SidebarLink href={routes["03-client-boundary"]}>
              03 - Client boundary
            </SidebarLink>
            <SidebarLink href={routes["04-server-functions"]}>
              04 - Server Functions
            </SidebarLink>
          </div>
        </div>
        <div className="flex-1 bg-sky-50 p-8">{children}</div>
      </body>
    </html>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-sky-50 p-2 shadow-sm hover:bg-slate-200 active:bg-primary"
    >
      {children}
    </Link>
  );
}
