import styles from "./WeatherCardContainer.module.css";

export function WeatherCardContainer({ children }: { children: JSX.Element }) {
  return <div className={styles.container}>{children}</div>;
}
