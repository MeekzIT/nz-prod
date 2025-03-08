import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { AppartamentPageData } from "./AppartamentPageData";
import styles from "./Modal.module.scss";
import { IAppartement } from "@/shared/api/types/appartement";

export const AppartamentPage = ({
  appartamentPageData,
}: {
  appartamentPageData: IAppartement;
}) => {
  if (!appartamentPageData) return;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      <div className={styles.appartBox}>
        <div className={styles.appartSliderContainer}>
          <ReactCompareSlider
            position={75}
            itemOne={
              <ReactCompareSliderImage
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${appartamentPageData.image_black_white}`}
                alt="Image one"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${appartamentPageData.image_design}`}
                alt="Image two"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
            color="#2e4a34"
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.appartDataBox}>
          <AppartamentPageData
            data={appartamentPageData.AppartementData}
            floorId={appartamentPageData.floorId}
            square_meter={appartamentPageData.square_meter}
          />
        </div>
      </div>
    </div>
  );
};
