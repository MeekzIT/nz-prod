import Head from "next/head";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import AvailableApartaments from "@/components/HomePage/AvailableApartaments/AvailableApartaments";
import ContactUsHome from "@/components/HomePage/ContactUs/ContactUs";
import GoogleMap from "@/components/HomePage/Map/Map";
import HomeSliderComponent from "@/components/HomePage/SliderComponent/SliderComponent";
import { GetServerSideProps } from "next";
import { IAboutUsShort } from "@/shared/api/types/about";
import { HomeFirstSliderTypes } from "@/shared/api/types/homeFirstSliderTypes";
import { IAvailable } from "@/shared/api/types/schemas";
import FirstSlider from "@/components/HomePage/HomeFirstSLider/components/FirstSlider/FirstSlider";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import { IOffers } from "@/shared/api/offers.api";

interface HomePageTypes {
  aboutUsPage: IAboutUsShort;
  sliderPageData: HomeFirstSliderTypes[];
  availableApartamentsPageData: IAvailable[];
  ofersPageData: IOffers[];
}

export default function Home({
  aboutUsPage,
  sliderPageData,
  availableApartamentsPageData,
  ofersPageData,
}: HomePageTypes) {
  return (
    <>
      <Head>
        <title>Nurazyan</title>
        <meta name="description" content="Home Nurazyan Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <main style={{ flex: "1", textAlign: "center" }}>
          <FirstSlider sliderData={sliderPageData} />
          <AboutUs aboutUsData={aboutUsPage} />
          <div id="available-apartments">
            <AvailableApartaments
              availableData={availableApartamentsPageData}
            />
          </div>
          <HomeSliderComponent ofersPageData={ofersPageData} />
          <GoogleMap />
          <ContactUsHome />
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const aboutUs = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/about-short`);
  const sliderData = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/slider`);
  const ofersData = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/offer`);
  const availableApartamentsData = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/schema/available`
  );

  const aboutUsPageData = await aboutUs.json();
  const { sliders } = await sliderData.json();
  const availableApartamentsPageData = await availableApartamentsData.json();
  const ofersPageData = await ofersData.json();

  return {
    props: {
      aboutUsPage: aboutUsPageData[0],
      sliderPageData: sliders,
      availableApartamentsPageData,
      ofersPageData,
    },
  };
};
