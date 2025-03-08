import React from "react";
import styles from "./HomePage.module.css";
import AvailableApartaments from "./AvailableApartaments/AvailableApartaments";
import ContactUsHome from "./ContactUs/ContactUs";
import GoogleMap from "./Map/Map";
import AboutUs from "./AboutUs/AboutUs";
import AboutUsTitle from "./AboutUs/AboutTitle";
import HomeSliderComponent from "./SliderComponent/SliderComponent";
import HomeFirstSLider from "./HomeFirstSLider/HomeFirstSLider";
import { AboutUsApi } from "@/shared/api/aboutUs.api";

export default async function HomePage() {
  const aboutUsData = await AboutUsApi.getData();

  return (
    <div className={styles.root}>
      {/* <HomeFirstSLider />
      <AboutUs aboutUsData={aboutUsData}/>
      <AvailableApartaments />
      <HomeSliderComponent />
      <GoogleMap />
      <ContactUsHome /> */}
    </div>
  );
}
