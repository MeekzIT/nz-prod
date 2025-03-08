"use client";

import styles from "./DetailsBlock.module.css";
import ImagesBlock from "@/components/ui/ImagesBlock/ImagesBlock";
import { ProjectData } from "@/shared/api/projectsService.api";
import { useHookI18Projects } from "./useHookI18Projects";

interface IDetailsBlockProps {
  data: ProjectData;
}

const DetailsBlock = ({ data }: IDetailsBlockProps) => {
  const { title, description1, description2 } = useHookI18Projects({
    data,
  });

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <p className={styles.title}>{title}</p>
          <div className={styles.description}>{description1}</div>
        </div>
        <ImagesBlock
          imageData={[
            data.image_11,
            data.image_12,
            data.image_13,
            data.image_14,
          ]}
        />
      </div>
      <div className={styles.block}>
        <ImagesBlock
          imageData={[
            data.image_21,
            data.image_22,
            data.image_23,
            data.image_24,
          ]}
        />
        <div>
          <div className={styles.description}>{description2}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
