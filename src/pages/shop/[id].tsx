import React from "react";
import Head from "next/head";
import styles from "./shopPage.module.css";
import { Car, WithCarPageProps } from "@/types/global";
import { GetServerSideProps } from "next";
import { getCars } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";

const Shop: WithCarPageProps = ({ car }) => {
  return (
    <div>
      <Head>
        <title>Buying {car.modelName}</title>
        <meta
          name="description"
          content={`Buy ${car.modelName}. Is the best ${car.bodyType} on market.`}
        />
      </Head>

      <main className={styles.container}>
        <div className={styles.row}>
          <h2 className={styles.model}>Buy: {car.modelName}</h2>
          <p className={styles.modelType}>{car.modelType}</p>
        </div>
        <p className={styles.price}>Price: $80 000</p>
        <div className={styles.preview}>
          <Image src={car.imageUrl} alt={car.modelName} layout="fill" />
        </div>
        <Link className={styles.link} href="/">
          <a className={styles.link}>← Back to list</a>
        </Link>
      </main>
    </div>
  );
};

export default Shop;

export const getServerSideProps: GetServerSideProps<{
  car: Car | null;
}> = async (context) => {
  const cars = await getCars();
  let car: Car | null =
    cars.find((car) => car.id === context.params?.id) ?? null;

  if (!car) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      car,
    },
  };
};
