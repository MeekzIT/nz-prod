import { AboutUsApi } from "@/shared/api/aboutUs.api";
import AboutDetailsBlock from "./DetailsBlock/AboutDetailsBlock";

const AboutUs = async () => {
  const aboutUsPagedata = await AboutUsApi.getAboutData();

  return (
    <AboutDetailsBlock aboutUsPagedata={aboutUsPagedata} />
  );
};

export default AboutUs;
