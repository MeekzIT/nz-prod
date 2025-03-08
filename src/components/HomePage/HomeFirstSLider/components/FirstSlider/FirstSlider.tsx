"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./FirstSlider.module.css";
import clsx from "clsx";
import { HomeFirstSliderTypes } from "@/shared/api/types/homeFirstSliderTypes";
import { FaArrowDown } from "react-icons/fa";
import { useTranslation } from "next-i18next";

interface FirstSliderProps {
  sliderData: HomeFirstSliderTypes[];
}

const FirstSlider = ({ sliderData }: FirstSliderProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop
        direction="vertical"
        className={clsx(styles.swiper, styles.verticalSlider)}
        style={{
          gap: "0 !important",
        }}
      >
        {sliderData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={styles.slide}
            style={{
              height: "528px !important",
            }}
          >
            <img
              src={slide.image}
              alt={slide.titleEn}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{slide.titleAm}</h2>
              <p className={styles.subtitle}>{slide.subTitleAm}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.ctaContainer}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text
            fontSize="19"
            letter-spacing="2px"
            fill="white"
            fontWeight="bold"
          >
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              {t("home.slider")}
            </textPath>
          </text>
        </svg>
        <FaArrowDown className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default FirstSlider;
