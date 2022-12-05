import Head from "next/head";
import { CarSlider } from "@/components/domains/home/CarSlider/CarSlider";
import { getCars } from "@/helpers/utils";
import styles from "@/styles/Home.module.css";
import { Car, WithCarsPageProps } from "@/types/global";
import { GetServerSideProps } from "next";

const Home: WithCarsPageProps = ({ cars }) => {
  return (
    <div>
      <Head>
        <title>Volvo cars - the pure joy of driving</title>
        <meta
          name="description"
          content="View list of our cars. Learn, decide and buy."
        />
      </Head>

      <main className={styles.container}>
        <div>
          <CarSlider cars={cars} />
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  cars: Car[];
}> = async () => {
  let cars: Car[] = await getCars();

  return {
    props: {
      cars,
    },
  };
};
