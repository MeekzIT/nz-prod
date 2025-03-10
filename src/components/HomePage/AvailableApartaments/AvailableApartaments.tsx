import styles from "./AvailableApartaments.module.css";
import Image from "next/image";
import { AvaiableHomesButtonLInk } from "@/components/ui/AvaiableHomesButtonLInk/AvaiableHomesButtonLInk";
import { IAvailable } from "@/shared/api/types/schemas";
import { useTranslation } from "next-i18next";
import AvailableImage from "./AvailableImage";

interface ProjectsPagePropsType {
  availableData: IAvailable[];
}

export function AvailableApartaments({ availableData }: ProjectsPagePropsType) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.appartmentWrapper}>
        <AvailableImage floors={availableData} />
        <div className={styles.contents}>
          <div className={styles.titleWrapper}>
            <h3>{t("avvailable.title")}</h3>
            <p>{t("avvailable.desc")}</p>
          </div>
          <Image
            src="/assets/cuted-house.svg"
            alt="Apartment"
            width={737}
            height={492}
          />
        </div>
        <div className={styles.background} />
      </div>
    </div>
  );
}

export default AvailableApartaments;
