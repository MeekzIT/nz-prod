import styles from "./Schema.module.css";
import CirculeButtonNumber from "@/components/ui/CirculeButtonNumber/CirculeButtonNumber";
import { foolNumbers } from "./constants";
import Link from "next/link";
import TooltipPolygon from "@/components/ui/TooltipPolygon/TooltipPolygon";
import { HomeSchemas } from "@/shared/api/schemas.api";
import { IFloor } from "@/shared/api/types/schemas";

interface SchemaPagePropsType {
  data: IFloor[];
  id: string;
}

const SchemaPage = ({ data, id }: SchemaPagePropsType) => {
  return (
    <div className={styles.schema}>
      {data.length && (
        <>
          <div className={styles.schemaContainer}>
            <p className={styles.title}>ԱՆՏԱՌԱՅԻՆ</p>
            <div className={styles.schemaBlock}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={data[0].imageUrl}
                  alt={`Floor Plan`}
                  width={data[0].width}
                  height={data[0].height}
                  className={styles.floorImage}
                />
                <svg
                  viewBox={`0 0 ${data[0].width} ${data[0].height}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {data[0].Appartements.map(
                    ({
                      id,
                      coordinates,
                      in_stock,
                      room_count,
                      square_meter,
                    }) => (
                      <Link key={id} href={`/appartement/${id}`}>
                        <TooltipPolygon
                          id={id}
                          coordinates={coordinates}
                          in_stock={in_stock}
                          room_count={room_count}
                          square_meter={square_meter}
                        />
                      </Link>
                    )
                  )}
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.floorBlock}>
              <p className={styles.floorNumber}>{id}</p>
              <p className={styles.floorText}>Հարկ</p>
            </div>
            <div className={styles.gridContainer}>
              {foolNumbers.map((number) => (
                <CirculeButtonNumber
                  key={number}
                  numberData={number}
                  isChoiseNumber={id === number}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SchemaPage;
