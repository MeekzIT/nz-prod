"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AppartamentModal from "./AppartmentModal";
import CustomModal from "@/components/ui/Modal/Modal";
import { ContactUsService } from "@/shared/api/contactUs.api";
import styles from "./Modal.module.scss";
import { IBid } from "@/shared/api/types/contactUs";
interface AppartementDatum {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export const AppartamentPageData = ({
  data,
  floorId,
  square_meter,
}: {
  data: AppartementDatum[];
  floorId: number;
  square_meter: string;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openRet, setOpenRet] = useState(false);
  const [status, setStatus] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmitForm = (data: IBid) => {
    ContactUsService.Bit(data)
      .then((res) => {
        setOpen(false);
        setStatus(true);
        setOpenRet(true);
      })
      .catch((err) => {
        setOpen(false);
        setStatus(false);
        setOpenRet(true);
      });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        gap: "20px",
        padding: "25px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p className={styles.appartamentDataTitles}>
          {t("appartament.floorId")}
        </p>
        <p className={styles.appartamentDataValues}>{floorId}</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p className={styles.appartamentDataTitles}>
          {t("appartament.square_meter")}
        </p>
        <p className={styles.appartamentDataValues}>
          {t("appartament.value", { value: square_meter })}
        </p>
      </div>
      {data.map((i) => {
        return (
          <div
            key={i.id}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.appartamentDataValues}>
              {t(`appartament.${i.name}`)}
            </p>
            <p className={styles.appartamentDataValues}>
              {t("appartament.value", { value: i.value })}
            </p>
          </div>
        );
      })}
      <button onClick={handleOpen} className={styles.button}>
        {t("appartament.order")}
      </button>
      <CustomModal
        open={openRet}
        setOpen={setOpenRet}
        title={t("modal.title")}
        description={t("modal.description")}
        status={status}
      />
      <AppartamentModal
        open={open}
        setOpen={setOpen}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};
