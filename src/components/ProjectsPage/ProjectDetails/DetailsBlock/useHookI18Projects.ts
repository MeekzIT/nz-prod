"use client";

import { ProjectData } from "@/shared/api/projectsService.api";
import { IAbout } from "@/shared/api/types/about";
import { useTranslation } from "next-i18next";

interface IuseHookI18 {
  data: ProjectData;
}

export const useHookI18Projects = ({ data }: IuseHookI18) => {
  const { i18n } = useTranslation();

  console.log(data, "data");

  switch (i18n.language) {
    case "am":
      return {
        title: data.titleAm,
        description1: data.textAm_1,
        description2: data.textAm_2,
      };

    case "ru":
      return {
        title: data.titleRu,
        description1: data.textRu_1,
        description2: data.textRu_2,
      };
    case "en":
      return {
        title: data.titleEn,
        description1: data.textEn_1,
        description2: data.textEn_1,
      };
    default:
      break;
  }

  return {
    title: "",
    description1: "",
    description2: "",
  };
};
