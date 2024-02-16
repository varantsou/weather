import { Property } from "@/components/Property";

import styles from "./Card.module.css";
import { Units } from "@/types";
import SwitchComponent from "@/kit/SwitchComponent/SwitchComponent";
import { useMemo, useState } from "react";
import { Typography } from "@/kit/Typography";
import { getUnitsByMeasurementUnits } from "@/helpers/getUnitsByMeasurementUnits";
import { getDegreeByMeasurement } from "@/helpers";
import { LoadingSkeleton } from "@/kit/Skeleton/Skeleton";

interface CardProps {
  loading: boolean;
  temp: number;
  toggleUnits: (units: Units) => void;
  humidity: number;
  windSpeed: number;
  weatherIcon: string;
  weatherDescription: string | undefined;
  city: string;
}

export function Card({
  loading = true,
  toggleUnits,
  currentUnit,
  temp,
  humidity,
  windSpeed,
  weatherIcon,
  weatherDescription,
  city,
}: CardProps) {
  const [isSwitchOn, setSwitchOn] = useState(!!Units.IMPERIAL);

  const toggleSwitch = (value: boolean) => {
    const unitValue = value ? Units.IMPERIAL : Units.METRIC;

    toggleUnits(unitValue);
    setSwitchOn(value);
  };

  const currentUnits = useMemo(() => {
    return getUnitsByMeasurementUnits(currentUnit);
  }, [currentUnit]);

  const imageUrl = useMemo(() => {
    return weatherIcon
      ? `${process.env.NEXT_PUBLIC_IMAGES_PATH}${weatherIcon}.png`
      : "";
  }, [weatherIcon]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LoadingSkeleton loading={loading} width={"100px"} height={"100px"}>
          <img src={imageUrl} alt="Weather icon" width={100} height="auto" />
        </LoadingSkeleton>
        <div className={styles.row}>
          <LoadingSkeleton
            loading={loading}
            height={"54px"}
            className={styles.imgOffset}
          >
            <>
              <Typography variant="h1" className={styles.imgOffset}>
                {temp}
                {currentUnits.degree}
              </Typography>
              <SwitchComponent
                isOn={isSwitchOn}
                onToggle={toggleSwitch}
                onTitle={getDegreeByMeasurement(Units.IMPERIAL)}
                offTitle={getDegreeByMeasurement(Units.METRIC)}
              />
            </>
          </LoadingSkeleton>
        </div>
        <LoadingSkeleton
          loading={loading}
          height={"39px"}
          className={styles.smallOffset}
        >
          <Typography variant="h2" className={styles.smallOffset}>
            {city}
          </Typography>
        </LoadingSkeleton>
        <LoadingSkeleton
          loading={loading}
          height={"24px"}
          className={styles.smallOffset}
        >
          <Typography variant="h5" className={styles.smallOffset}>
            {weatherDescription}
          </Typography>
        </LoadingSkeleton>
      </div>
      <div className={styles.footer}>
        <LoadingSkeleton loading={loading} height={"28px"}>
          <Property value={`${humidity}%`} name={"Humidity"} />
        </LoadingSkeleton>
        <LoadingSkeleton loading={loading} height={"28px"}>
          <Property
            value={`${windSpeed} ${currentUnits.speeds}`}
            name={"Wind Speed"}
          />
        </LoadingSkeleton>
      </div>
    </div>
  );
}
