"use client";

import React from "react";
import styles from "./ImagesBlock.module.css";
import { ImagesBlockTypes } from "./types";

const ImagesBlock = ({ imageData }: ImagesBlockTypes) => {
  return (
    <div className={styles.images}>
      <img src={imageData[0]} alt="Main Image" className={styles.mainImage} />
      <div className={styles.bottomImages}>
        {imageData.slice(1, 4).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 2}`} />
        ))}
      </div>
    </div>
  );
};

export default ImagesBlock;
