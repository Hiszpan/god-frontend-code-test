import React from "react";
import Head from "next/head";
import styles from "./learnPage.module.css";
import { Car, WithCarPageProps } from "@/types/global";
import { GetServerSideProps } from "next";
import { getCars } from "@/helpers/utils";
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
          <Image src={car.imageUrl} alt={car.modelName} layout="fill" />
        </div>
        <p className={styles.description}>
          Curabitur commodo, nisi id vulputate ultricies, mauris est semper
          velit, vitae congue orci sapien in magna. Vivamus ligula erat,
          tincidunt ac consectetur vitae, feugiat id elit. Nam at leo dolor.
          Suspendisse hendrerit tellus ac lorem dignissim, id egestas quam
          congue. Curabitur dignissim tellus at erat consequat, a blandit nibh
          sagittis. Nunc vel nisl vel justo tempus viverra. Quisque non enim ut
          diam pulvinar condimentum sed eget neque. Maecenas hendrerit nisl non
          tortor tincidunt, vitae feugiat ante placerat. Praesent sodales
          ultrices lectus, et imperdiet lectus fringilla sed. Maecenas dui
          ligula, elementum non finibus in, fermentum imperdiet est. Nulla
          varius quam nulla. Quisque ullamcorper mattis ex, quis blandit nulla.
          Nulla facilisi. Nullam consequat erat vitae suscipit gravida.
          Curabitur suscipit at turpis ac viverra.
        </p>
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
