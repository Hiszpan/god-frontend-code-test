import React, { SyntheticEvent, useState } from "react";
import { Car } from "@/types/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "./CarSlider.module.css";
import { CarSliderItem } from "@/components/domains/home/CarSliderItem/CarSliderItem";

export interface CarSliderProps {
  cars?: Car[];
}

export interface BodyType {
  text: String;
  value: String;
}

export const CarSlider = (props: CarSliderProps) => {
  const cars = props.cars || [];

  const bodyTypes = cars.reduce<BodyType[]>(
    (bodyTypes, car) => {
      if (!bodyTypes.find((bt) => bt.value === car.bodyType)) {
        bodyTypes.push({ value: car.bodyType, text: car.bodyType });
      }
      return bodyTypes;
    },
    [{ text: "All types", value: "" }]
  );

  const [bodyType, setBodyType] = useState("");
  const handleChangeBodyType = (event: SyntheticEvent) => {
    const target = event.target as HTMLSelectElement;
    setBodyType(target.value);
  };

  const filterByBodyType = (car: Car): boolean =>
    bodyType === "" || car.bodyType === bodyType;

  return (
    <>
      <div className={styles.filters}>
        Filter by body type:
        <select className={styles.filter} onChange={handleChangeBodyType}>
          {bodyTypes.map((bodyType, i) => (
            <option
              key={bodyType.value as string}
              value={bodyType.value as string}
            >
              {bodyType.text}
            </option>
          ))}
        </select>
      </div>
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
        {cars.filter(filterByBodyType).map((car) => (
          <SwiperSlide key={car.id}>
            <CarSliderItem car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
