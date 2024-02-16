import { Units } from "@/types";

export function getDegreeByMeasurement(unit: Units) {
  const labels = {
    [Units.IMPERIAL]: "°F",
    [Units.METRIC]: "°C",
  };

  return labels[unit];
}
