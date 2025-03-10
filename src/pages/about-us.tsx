import { GetServerSideProps } from "next";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import AboutDetailsBlock from "@/components/AboutUs/DetailsBlock/AboutDetailsBlock";
import Head from "next/head";

const AboutUsPage = ({ aboutUsPagedata }: { aboutUsPagedata: any }) => {
  return (
    <>
      <Head>
        <title>Nurazyan</title>
        <meta name="description" content="About Us Nurazyan Construction" />
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
          <AboutDetailsBlock aboutUsPagedata={aboutUsPagedata} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/about-us`);
  const data = await response.json();
  return {
    props: {
      aboutUsPagedata: data[0], // передаем JSON в компонент как props
    },
  };
};

export default AboutUsPage;
