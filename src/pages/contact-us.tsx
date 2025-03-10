import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import React from "react";
import Head from "next/head";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Nurazyan</title>
        <meta name="description" content="Contact Us Nurazyan Construction" />
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
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;
