import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import SchemaPage from "@/components/Schema/Schema";
import { IFloor } from "@/shared/api/types/schemas";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface SchemaPropsType {
  schemaData: IFloor[];
  id: string;
}

export default function Schema({ schemaData, id }: SchemaPropsType) {
  return (
    <>
      <Head>
        <title>Nurazyan</title>
        <meta name="description" content="Schema Nurazyan Construction" />
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
          <SchemaPage data={schemaData} id={id} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const schema = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/schema?id=${id}`
  );
  const schemaData = await schema.json();

  return {
    props: {
      schemaData,
      id,
    },
  };
};
