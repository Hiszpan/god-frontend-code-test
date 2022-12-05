import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types/global";
import styles from "./CarSliderItem.module.css";
import Chevron from "~/docs/chevron-small.svg";

export interface CarSliderItemProps {
  car: Car;
}

export const CarSliderItem = (props: CarSliderItemProps) => {
  const { car } = props;

  return (
    <div className={styles.container}>
      <p className={styles.bodyType}>{car.bodyType}</p>
      <div className={styles.row}>
        <h2 className={styles.model}>{car.modelName}</h2>
        <p className={styles.modelType}>{car.modelType}</p>
      </div>
      <div className={styles.preview}>
        <Image src={car.imageUrl} alt={car.modelName} layout="fill" />
      </div>
      <div className={styles.actions}>
        <Link className={styles.link} href={`/learn/${car.id}`}>
          <a className={styles.link}>
            Learn <Chevron />
          </a>
        </Link>
        <Link className={styles.link} href={`/shop/${car.id}`}>
          <a className={styles.link}>
            Shop <Chevron />
          </a>
        </Link>
      </div>
    </div>
  );
};
