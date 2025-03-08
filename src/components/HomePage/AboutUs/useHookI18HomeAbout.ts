"use client";

import { IAboutUsShort } from "@/shared/api/types/about";
import { useTranslation } from "next-i18next";

export const useHookI18HomeAbout = (aboutUsData: IAboutUsShort) => {
  const { i18n } = useTranslation();

  switch (i18n.language) {
    case "am":
      return {
        description1: aboutUsData.textAm,
      };

    case "ru":
      return {
        description1: aboutUsData.textRu,
      };
    case "en":
      return {
        description1: aboutUsData.textEn,
      };
    default:
      break;
  }

  return {
    description1: "",
  };
};
