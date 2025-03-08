import styles from "./ProjectsPage.module.css";

import SliderComponent from "@/components/ui/Slider/Slider";
import AvailableApartaments from "../HomePage/AvailableApartaments/AvailableApartaments";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import { ProjectData } from "@/shared/api/projectsService.api";
import { IAvailable } from "@/shared/api/types/schemas";

interface ProjectsPagePropsType {
  projectPageData: ProjectData[];
  availableData: IAvailable[];
}
const ProjectsPage = ({
  projectPageData,
  availableData,
}: ProjectsPagePropsType) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <div className={styles.horizontalblock} />
          <InfoBlock />
        </div>
        <SliderComponent data={projectPageData} />
      </div>
      <AvailableApartaments availableData={availableData} />
    </>
  );
};

export default ProjectsPage;
