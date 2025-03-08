"use client";

import React from "react";
import { useTranslation } from "next-i18next";

const AboutUsTitle = () => {
  const { t } = useTranslation();

  return <>{t("home.about")}</>;
};

export default AboutUsTitle;
