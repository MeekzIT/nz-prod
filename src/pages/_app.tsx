import Providers from "@/components/Providers/Providers";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "./styles/reset.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/ui/Slider/Slider.css";

export const metadata: Metadata = {
  title: "Nurazyan Construction",
  // description:
  //   "A2RL set to take place at Yas Marina Circuit in Abu Dhabi. Inaugural league event in Q2 2024 with Autonomous Car Racing.",
  icons: {
    icon: "/icon.png",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
