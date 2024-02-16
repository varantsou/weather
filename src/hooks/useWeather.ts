import { useEffect, useState } from "react";
import { Units, UseWeatherProps } from "@/types";
import { useApi } from "@/hooks/useApi";

export const useWeather = ({ city, units = Units.METRIC }: UseWeatherProps) => {
  const apiKey = process.env.NEXT_PUBLIC_API_WETHER_KEY;
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (city.trim() === "") {
      setUrl(null);
      return;
    }

    setUrl(
      `${process.env.NEXT_PUBLIC_WEHER_API}/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`,
    );
  }, [city, units]);

  const { data, error, loading } = useApi(url);

  return { data, error, loading };
};
