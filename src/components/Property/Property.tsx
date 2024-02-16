import styles from "./Property.module.css";
import { Typography } from "@/kit/Typography";

interface PropertyProps {
  name: string;
  value: string;
}

export function Property({ value, name }: PropertyProps) {
  return (
    <div className={styles.property}>
      <Typography variant="h4">{value}</Typography>
      <Typography variant="body2">{name}</Typography>
    </div>
  );
}
