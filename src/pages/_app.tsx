
import type { AppProps } from "next/app";
import "@/app/globals.css";
import Menubar from "@/components/Menubar";
import BackgroundGradient from "@/components/backgroundGradient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-black-101 text-white">
      <Menubar />
      <BackgroundGradient />
      <Component {...pageProps} />
    </div>
  );
}
