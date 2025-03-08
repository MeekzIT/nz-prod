import axios from "axios";
import { IBid, IContactUs } from "./types/contactUs";

export const ContactUsService = {
  async aboutUs(data: IContactUs): Promise<any> {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  async Bit(data: IBid): Promise<any> {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bid`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error:", error);

      throw error;
    }
  },
};
