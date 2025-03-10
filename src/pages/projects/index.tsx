import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import ProjectsPage from "@/components/ProjectsPage/ProjectsPage";
import { ProjectData } from "@/shared/api/projectsService.api";
import { IAvailable } from "@/shared/api/types/schemas";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface ProjectsPropsType {
  projectsData: ProjectData[];
  availableData: IAvailable[];
}

export default function Projects({
  projectsData,
  availableData,
}: ProjectsPropsType) {
  return (
    <>
      <Head>
        <title>Nurazyan</title>
        <meta name="description" content="Our Projects Nurazyan Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <main style={{ flex: "1", textAlign: "center" }}>
          <ProjectsPage
            projectPageData={projectsData}
            availableData={availableData}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/projects`);
  const available = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/schema/available`
  );

  const projectsData = await projects.json();
  const availableData = await available.json();

  return {
    props: {
      projectsData,
      availableData,
    },
  };
};
