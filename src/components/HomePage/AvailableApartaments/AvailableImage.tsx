// "use client";

// import styles from "./AvailableApartaments.module.css";
// import { useState } from "react";

// const apartments = [
//   { id: 3, coords: "1181,65 5,65 5,180 1181,180" },
//   { id: 4, coords: "1182,199 6,199 6,312 1182,312" },
//   { id: 5, coords: "1178,337 8,337 8,443 1178,443" },
//   { id: 6, coords: "1179,474 6,474 6,584 1179,584" },
//   { id: 7, coords: "1178,607 5,607 5,719 1178,719" },
//   { id: 8, coords: "1179,745 7,745 7,851 1179,851" },
//   { id: 9, coords: "1178,880 9,880 9,991 1178,991" },
//   { id: 10, coords: "1178,1017 11,1017 11,1126 1178,1126" },
// ];

// interface IFloor {
//   floor: number;
//   count: number;
// }
// interface IAvailableImage {
//   floors: IFloor[];
// }
// export function AvailableImage({ floors }: IAvailableImage) {
//   const [hoveredId, setHoveredId] = useState<null | number>(null);
//   console.log(floors, "floor");

//   return (
//     <div className={styles.AvailableImage}>
//       <img
//         src="/assets/home-appartament.png"
//         alt="Floor Plan"
//         className={styles.apartmentImg}
//       />
//       <svg className={styles.svgOverlay} viewBox="0 0 1250 1405">
//         {apartments.map(({ id, coords }) => (
//           <polygon
//             key={id}
//             points={coords}
//             fill={hoveredId === id ? "rgba(8, 65, 46, 0.5)" : "transparent"}
//             stroke={hoveredId === id ? "#FFC107" : "transparent"}
//             strokeWidth={3}
//             onMouseEnter={() => setHoveredId(id)}
//             onMouseLeave={() => setHoveredId(null)}
//             style={{ cursor: "pointer" }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }

// export default AvailableImage;
"use client";

import { useTranslation } from "next-i18next";
import styles from "./AvailableApartaments.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useIsMobile from "@/shared/hooks/isMobile";

const apartments = [
  { id: 10, coords: "1181,65 5,65 5,180 1181,180" },
  { id: 9, coords: "1182,199 6,199 6,312 1182,312" },
  { id: 8, coords: "1178,337 8,337 8,443 1178,443" },
  { id: 7, coords: "1179,474 6,474 6,584 1179,584" },
  { id: 6, coords: "1178,607 5,607 5,719 1178,719" },
  { id: 5, coords: "1179,745 7,745 7,851 1179,851" },
  { id: 4, coords: "1178,880 9,880 9,991 1178,991" },
  { id: 3, coords: "1178,1017 11,1017 11,1126 1178,1126" },
];

interface IFloor {
  floor: number;
  count: number;
}

interface IAvailableImage {
  floors: IFloor[];
}

export function AvailableImage({ floors }: IAvailableImage) {
  const { t } = useTranslation();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [hoveredId, setHoveredId] = useState<null | number>(null);

  const getFloorLabel = (id: number) => {
    return floors.find((f) => f.floor === id)
      ? t("avvailable.floor", { count: id })
      : "";
  };

  const getFloorDesc = (id: number) => {
    const klir = floors.find((f) => f.floor === id);
    return klir?.count;
  };

  const getPolygonCenter = (coords: string) => {
    const points = coords
      .split(" ")
      .map((point) => point.split(",").map(Number));
    const xCoords = points.map(([x]) => x);
    const yCoords = points.map(([, y]) => y);
    const centerX = xCoords.reduce((a, b) => a + b, 0) / xCoords.length;
    const centerY = yCoords.reduce((a, b) => a + b, 0) / yCoords.length;
    return { x: centerX, y: centerY };
  };

  return (
    <div className={styles.AvailableImage}>
      <img
        src="/assets/home-appartament.png"
        alt="Floor Plan"
        className={styles.apartmentImg}
      />
      <svg className={styles.svgOverlay} viewBox="0 0 1250 1405">
        {apartments.map(({ id, coords }) => {
          const isHovered = hoveredId === id;
          const floorLabel = getFloorLabel(id);
          const floorDesc = getFloorDesc(id);
          const { x, y } = getPolygonCenter(coords);

          return (
            <g key={id}>
              <polygon
                points={coords}
                fill={isHovered ? "rgba(8, 65, 46, 0.5)" : "transparent"}
                strokeWidth={3}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                onMouseDown={() =>
                  isMobile
                    ? router.push(`/schema/${id}`)
                    : router.push(`/schema/${hoveredId}`)
                }
                style={{ cursor: "pointer" }}
                className={styles.polygon}
              />
              {isHovered && floorLabel && (
                <>
                  <text
                    x={x}
                    y={y}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize="40"
                    fill="white"
                  >
                    {`${floorLabel}`}, {"  "}
                    {t("avvailable.avvail", { count: floorDesc })}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default AvailableImage;
