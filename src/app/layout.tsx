
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/Menubar";
import { ReduxProvider } from './redux-provider';
import BackgroundGradient from "@/components/backgroundGradient";
import SmoothScroll from "@/components/SmoothScroll";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black-101 text-white`}
      >
        <SmoothScroll>
       <ReduxProvider>
        <BackgroundGradient />
        <div className="flex">
            <div className="fixed z-50">
              <Menubar />
            </div>
            <div className="flex-1 flex">
                <div className="flex-1 justify-center items-center">
                  {children}
                </div>
            </div>
        </div>
        
        </ReduxProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
