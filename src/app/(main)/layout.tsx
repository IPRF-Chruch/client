import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "sal.js/dist/sal.css";
import NavigationBar from "@/shared/components/navigation/navigation";
import Footer from "@/shared/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPRF Church",
  description: "Indonesian Pentecostal revival fellowship minnesota church",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <NavigationBar />
        <section className="pt-24 lg:pt-38 min-h-screen">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
