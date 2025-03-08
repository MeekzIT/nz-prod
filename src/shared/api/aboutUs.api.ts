import axiosInstance from "../utils/axios";
import { IAboutUsShort, IAbout } from "./types/about";

export const AboutUsApi = {
  async getData(): Promise<IAboutUsShort> {
    const response = await axiosInstance.get(`/about-short`);

    return response.data[0]
  },
  async getAboutData(): Promise<IAbout> {
    const response = await axiosInstance.get(`/about-us`);

    return response.data[0]
  },
};
