import styles from "./AboutDetailsBlock.module.css";
import ImagesBlock from "@/components/ui/ImagesBlock/ImagesBlock";
import AboutUsTitle from "@/components/HomePage/AboutUs/AboutTitle";
import { AboutDetailsBlockType } from "./AboutDetailsBlockTypes";
import { useHookI18 } from "../useHookI18";

const AboutDetailsBlock = ({ aboutUsPagedata }: AboutDetailsBlockType) => {
  const { description1, description2 } = useHookI18({ data: aboutUsPagedata });

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <p className={styles.title}>
            <AboutUsTitle />
          </p>
          <div className={styles.description}>{description1}</div>
        </div>
        <ImagesBlock
          imageData={[
            aboutUsPagedata.image_11,
            aboutUsPagedata.image_12,
            aboutUsPagedata.image_13,
            aboutUsPagedata.image_14,
          ]}
        />
      </div>
      <div className={styles.block}>
        <ImagesBlock
          imageData={[
            aboutUsPagedata.image_21,
            aboutUsPagedata.image_22,
            aboutUsPagedata.image_23,
            aboutUsPagedata.image_24,
          ]}
        />
        <div>
          <div className={styles.description}>{description2}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetailsBlock;
