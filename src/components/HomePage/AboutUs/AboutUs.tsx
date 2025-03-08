"use client";

import React from "react";
import AboutUsTitle from "./AboutTitle";
import ImagesBlock from "@/components/ui/ImagesBlock/ImagesBlock";
import styles from "./AboutUs.module.css";
import { useHookI18HomeAbout } from "./useHookI18HomeAbout";
import { IAboutUsShort } from "@/shared/api/types/about";

interface IHomeAboutUs {
  aboutUsData: IAboutUsShort;
}

const AboutUs = ({ aboutUsData }: IHomeAboutUs) => {
  const { description1 } = useHookI18HomeAbout(aboutUsData);
  console.log(aboutUsData, "aboutUsData");

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <p className={styles.title}>
            <AboutUsTitle />
          </p>
          <div className={styles.description}>{description1}</div>
        </div>
        <ImagesBlock
          imageData={[
            aboutUsData.image_1,
            aboutUsData.image_2,
            aboutUsData.image_3,
            aboutUsData.image_4,
          ]}
        />
      </div>
    </div>
  );
};

export default AboutUs;
