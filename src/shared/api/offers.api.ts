import axiosInstance from "../utils/axios";

export interface IOffers {
  id: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export const Offers = {
  async getData(): Promise<IOffers[]> {
    const response = await axiosInstance.get(`/offer`);

    return (response.data ?? []) as IOffers[];
  },
};
