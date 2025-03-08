import axiosInstance from "../utils/axios";
import { HomeFirstSliderTypes } from "./types/homeFirstSliderTypes";

import { IAvailable, IFloor } from "./types/schemas";

export const HomeSchemas = {
  homeSchemas: async (id: string) => {
    try {
      const response = await axiosInstance.get<IFloor[]>(`/schema`, {
        params: { id },
      });
      return response.data ?? [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};

export const HomeAvailableSchemas = {
  schemaAvailableHome: async (): Promise<IAvailable[]> => {
    try {
      const response = await axiosInstance.get<IAvailable[]>(
        "/schema/available"
      );
      return response.data || [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};

export const HomeFirstSlider = {
  homeFirstSlider: async (): Promise<HomeFirstSliderTypes[]> => {
    try {
      const response = await axiosInstance.get<{
        sliders: HomeFirstSliderTypes[];
        success: boolean;
      }>("/slider");

      return response.data.sliders || [];
    } catch (error) {
      console.error("Ошибка при загрузке схемы:", error);
      return [];
    }
  },
};
