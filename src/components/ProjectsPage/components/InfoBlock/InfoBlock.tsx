"use client";

import styles from "./InfoBlock.module.css";
import { useTranslation } from "next-i18next";

const InfoBlock = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.textBlock}>
      <p className={styles.title}>{t("project.title")}</p>
      <p className={styles.description}>{t("project.description")}</p>
    </div>
  );
};

export default InfoBlock;
