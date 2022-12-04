import { Car } from "../types/global";

export const getCars = async (): Promise<Car[]> => {
  let cars: Car[] = [];

  try {
    const res = await fetch(`${process.env.HOST}/api/cars.json`);
    cars = await res.json();
  } catch (error) {
    console.log("Could not fetch cars");
  }

  return cars;
};
