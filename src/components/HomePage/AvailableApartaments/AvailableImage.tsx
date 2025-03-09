"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";
import useIsMobile from "@/shared/hooks/isMobile";
import styles from "./AvailableApartaments.module.css";

export function AvailableImage() {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <button
      className={styles.imageWrapper}
      onClick={() => router.push("/schema")}
    >
      <Image
        className={styles.image}
        src="/assets/home-appartament.png"
        alt="Apartment"
        height={1000}
        width={883}
      />
    </button>
  );
}

export default AvailableImage;
