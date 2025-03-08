import axiosInstance from "../utils/axios";
import { IAppartement } from "./types/appartement";

export const SingleAppartament = {
  async getSingle(id: string): Promise<IAppartement> {
    const response = await axiosInstance.get(`/schema/single/${id}`);

    return (response.data ?? []) as IAppartement;
  },
};
