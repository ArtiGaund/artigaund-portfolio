
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/Menubar";
import BackgroundGradient from "@/components/backgroundGradient";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arti Portfolio",
  description: "Arti Gaund Portfolio Website",
  icons: {
    icon: "/images/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Arti Gaund | Developer Portfolio</title>
        <meta property="og:title" content="Arti Gaund | Developer Portfolio" />
        <meta property="og:description" content="Explore my projects, tech skills, and more!" />
        <meta property="og:image" content="https://res.cloudinary.com/artigaund/image/upload/v1747236408/Portfolio/Web%20Development/Screenshot_500_yx7dqa.png" />
        <meta property="og:url" content="https://artigaund-portfolio.vercel.app/" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black-101 text-white min-h-screen flex flex-col`}
      >
        <SmoothScroll>
            <BackgroundGradient />
            <div className="flex flex-col flex-1">
              {/* Menubar */}
              <div className="fixed z-50">
                <Menubar />
              </div>

              {/* Main content area */}
              <main className="flex-grow">
                {children}
              </main>

              {/* Footer positioned at the bottom */}
              <div className="mt-[150px] z-50">
                <Footer />
              </div>
            </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
