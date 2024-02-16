import { Units } from "@/types";
import { getDegreeByMeasurement } from "@/helpers";

export function getUnitsByMeasurementUnits(unit: Units) {
  const speeds = {
    [Units.IMPERIAL]: "mph",
    [Units.METRIC]: "m/s",
  };

  const degrees = {
    [Units.IMPERIAL]: "°F",
    [Units.METRIC]: "°C",
  };

  const humidity = {
    [Units.IMPERIAL]: "°F",
    [Units.METRIC]: "°C",
  };

  return {
    degree: getDegreeByMeasurement(unit),
    speeds: speeds[unit],
    humidity: humidity[unit],
  };
}
