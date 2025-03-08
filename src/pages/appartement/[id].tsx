import { GetServerSideProps } from "next";
import { AppartamentPage } from "@/components/Appartament/AppartamentPage";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { IAppartement } from "@/shared/api/types/appartement";

interface AppartementDetailsProps {
  appartamentPageData: IAppartement;
}

export default function AppartementDetails({
  appartamentPageData,
}: AppartementDetailsProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: "1", textAlign: "center" }}>
        <AppartamentPage appartamentPageData={appartamentPageData} />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/schema/single/${id}`
  );
  const data = await response.json();

  return {
    props: {
      appartamentPageData: data,
    },
  };
};
