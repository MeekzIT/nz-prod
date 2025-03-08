import styles from "./HomeFirstSLider.module.css";
import { HomeFirstSlider } from "@/shared/api/schemas.api";
import FirstSLider from "./components/FirstSlider/FirstSlider";
import { HomeFirstSliderTypes } from "@/shared/api/types/homeFirstSliderTypes";

interface HomeFirstSLiderPropsTypes {
  sliderPageData: HomeFirstSliderTypes[];
}

const HomeFirstSLider = ({ sliderPageData }: HomeFirstSLiderPropsTypes) => {
  return <FirstSLider sliderData={sliderPageData} />;
};

export default HomeFirstSLider;
