import axiosInstance from "../utils/axios";

export interface ProjectData {
  id: number;
  titleAm: string;
  titleRu: string;
  titleEn: string;
  textAm_1: string;
  textAm_2: string;
  textRu_1: string;
  textRu_2: string;
  textEn_1: string;
  textEn_2: string;
  image_11: string;
  image_12: string;
  image_13: string;
  image_14: string;
  image_21: string;
  image_22: string;
  image_23: string;
  image_24: string;
}

export const ProjectsService = {
  async getAllProjectsData(): Promise<ProjectData[]> {
    try {
      const response = await axiosInstance.get("/projects");
      return response.data ?? [];
    } catch (error) {
      console.error("Ошибка при загрузке проектов:", error);
      return [];
    }
  },

  async getProjectData(id: number): Promise<ProjectData | undefined> {
    try {
      const response = await axiosInstance.get(`/projects/${id}`);
      return response.data ?? {};
    } catch (error) {
      console.error(`Ошибка при загрузке проекта с id ${id}:`, error);
    }
  },
};
