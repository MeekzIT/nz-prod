import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import React from "react";

const ContactUsPage = () => {
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
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
