import DetailsBlock from "./DetailsBlock/DetailsBlock";
import { ProjectsService } from "@/shared/api/projectsService.api";

const ProjectDetailsPage = async ({ id }: { id: string }) => {
  const data = await ProjectsService.getProjectData(Number(id));

  return (
    // <DetailsBlock data={data} />
    <></>
  );
};

export default ProjectDetailsPage;
