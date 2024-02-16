import Head from "next/head";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";

import { Col, Container, Row } from "react-bootstrap";
import { useMemo, useState } from "react";
import { WeatherCardContainer } from "@/components/WeatherCardContainer";
import { Error } from "@/components/Error";
import { useWeather } from "@/hooks";
import { Units } from "@/types";
import { Select } from "@/components/Select";
import { useCities } from "@/hooks/useCities";
import { getUnitsByMeasurementUnits } from "@/helpers/getUnitsByMeasurementUnits";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [units, setUnits] = useState<Units>(Units.IMPERIAL);
  const [location, setLocation] = useState<string>("warsaw");

  const { loading, error, data } = useWeather({ city: location, units });
  const { data: cities } = useCities();

  const handleUnits = (value: Units) => {
    setUnits(value);
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };

  const weather = useMemo(() => {
    const weatherData = data?.weather?.[0];

    return {
      icon: weatherData?.icon,
      description: weatherData?.description,
    };
  }, [data]);

  return (
    <>
      <Head>
        <title>Task Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`} id="main-container">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <WeatherCardContainer>
                <div
                  style={{
                    position: "absolute",
                    maxWidth: "100%",
                    top: "20px",
                    left: "20px",
                    right: "20px",
                  }}
                >
                  <Select
                    options={[
                      { value: "warsaw", label: "Warsaw" },
                      { value: "paris", label: "Paris" },
                      { value: "barcelona", label: "Barcelona" },
                    ]}
                    onChange={handleLocationChange}
                    value={location}
                  />
                </div>
                <Card
                  loading={loading}
                  city={data?.name}
                  weatherIcon={weather.icon}
                  weatherDescription={weather.description}
                  temp={data?.main?.temp}
                  currentUnit={units}
                  toggleUnits={handleUnits}
                  humidity={data?.main?.humidity}
                  windSpeed={data?.wind.speed}
                />
                {/* {!!error ? <Error message={error} /> : <Card />} */}
              </WeatherCardContainer>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
