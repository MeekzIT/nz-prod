import Providers from "@/components/Providers/Providers";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "./styles/reset.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/ui/Slider/Slider.css";

export const metadata: Metadata = {
  title: "Nurazyan Construction",
  description: "Nurazyan Construction",
  icons: {
    icon: "/icon.png",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
