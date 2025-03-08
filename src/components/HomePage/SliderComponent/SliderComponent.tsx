import React from "react";
import SliderComponent from "@/components/ui/Slider/Slider";
import styles from "./SliderComponent.module.scss";
import { IOffers } from "@/shared/api/offers.api";

interface HomeSliderComponentPropsType {
  ofersPageData: IOffers[];
}

const HomeSliderComponent = ({
  ofersPageData,
}: HomeSliderComponentPropsType) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div className={styles.horizontalblock} />
        <div className={styles.textBlock}>
          <p className={styles.title}>Մենք առաջարկում ենք</p>
          <p className={styles.description}>
            քսաներկու վերգետնյա և չորս ստորգետնյա
            <br />
            հարկից բաղկացած համալիր է, որն ունի մի
            <br /> շարք հարմարություններ։ 
          </p>
        </div>
      </div>
      <SliderComponent data={ofersPageData} isRedirectable={false} />
    </div>
  );
};

export default HomeSliderComponent;
