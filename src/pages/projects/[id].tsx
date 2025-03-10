import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import DetailsBlock from "@/components/ProjectsPage/ProjectDetails/DetailsBlock/DetailsBlock";
import { ProjectData } from "@/shared/api/projectsService.api";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface ProjectDetailsProps {
  projectPageData: ProjectData;
}

export default function ProjectsDetails({
  projectPageData,
}: ProjectDetailsProps) {
  return (
    <>
      <Head>
        <title>Nurazyan</title>
        <meta name="description" content="Our Projects Nurazyan Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <DetailsBlock data={projectPageData} />
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/projects/${id}`
  );

  const data = await response.json();

  return {
    props: {
      projectPageData: data,
    },
  };
};
