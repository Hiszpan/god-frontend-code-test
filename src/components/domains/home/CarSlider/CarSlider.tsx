import React from "react";
import { Car } from "../../../../types/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "./CarSlider.module.css";
import { CarSliderItem } from "../CarSliderItem/CarSliderItem";

export interface CarSliderProps {
  cars?: Car[];
}

export const CarSlider = (props: CarSliderProps) => {
  const cars = props.cars || [];

  return (
    <Swiper
      className={styles.swiper}
      breakpoints={{
        "0": {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        "768": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "1600": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {cars.map((car) => (
        <SwiperSlide key={car.id}>
          <CarSliderItem car={car} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
