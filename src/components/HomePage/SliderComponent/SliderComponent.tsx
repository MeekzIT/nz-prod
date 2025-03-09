import React from "react";
import SliderComponent from "@/components/ui/Slider/Slider";
import styles from "./SliderComponent.module.scss";
import { IOffers } from "@/shared/api/offers.api";
import { useTranslation } from "next-i18next";

interface HomeSliderComponentPropsType {
  ofersPageData: IOffers[];
}

const HomeSliderComponent = ({
  ofersPageData,
}: HomeSliderComponentPropsType) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div className={styles.horizontalblock} />
        <div className={styles.textBlock}>
          <p className={styles.title}>{t("offer.title")}</p>
          <p className={styles.description}>
            {t("offer.desc1")}
            <br />
            {t("offer.desc2")}
            <br /> {t("offer.desc3")}
          </p>
        </div>
      </div>
      <SliderComponent data={ofersPageData} isRedirectable={false} />
    </div>
  );
};

export default HomeSliderComponent;
