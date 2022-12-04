import React from "react";
import Head from "next/head";
import styles from "./learnPage.module.css";
import { Car, WithCarPageProps } from "../../types/global";
import { GetServerSideProps, GetStaticProps } from "next";
import { getCars } from "../../helpers/utils";
import Image from "next/image";
import Link from "next/link";

const Learn: WithCarPageProps = ({ car }) => {
  return (
    <div>
      <Head>
        <title>Learn about {car.modelName}</title>
        <meta
          name="description"
          content={`With ${car.modelName} you can enjoy best ${car.bodyType} on market.`}
        />
      </Head>

      <main className={styles.container}>
        <p className={styles.bodyType}>{car.bodyType}</p>
        <div className={styles.row}>
          <h2 className={styles.model}>{car.modelName}</h2>
          <p className={styles.modelType}>{car.modelType}</p>
        </div>
        <div className={styles.preview}>
          <Image
            style={{ maxWidth: "100%" }}
            src={car.imageUrl}
            alt={car.modelName}
            layout="fill"
          />
        </div>
        <Link className={styles.link} href="/">
          <a className={styles.link}>← Back to list</a>
        </Link>
      </main>
    </div>
  );
};

export default Learn;

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
