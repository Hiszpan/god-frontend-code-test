import type { NextComponentType, NextPageContext } from "next";

export type Car = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export type WithCarsPageProps<P = { cars?: Car[] }, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
>;

export type WithCarPageProps<P = { car: Car }, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
>;
