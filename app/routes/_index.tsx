import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { CarsList } from "~/components/cars-list";
import { Hero } from "~/components/hero";
import { Car } from "~/types";

export const meta: MetaFunction = () => {
  return [{ title: "Car Roulette" }];
};

export async function loader() {
  const resp = await fetch(
    "https://run.mocky.io/v3/f788aa5e-dab9-49b5-a366-1848e31a41bb"
  );

  const jsonData = await resp.json();

  // Cast JSON response to an array of cars
  const data = jsonData.products as Array<Car>;

  return json({
    cars: data.slice(0, 6),
  });
}

export default function Home() {
  const { cars } = useLoaderData<typeof loader>();

  return (
    <>
      <Hero />
      <div className="min-h-screen flex py-24 gap-4">
        <CarsList cars={cars} />
      </div>
    </>
  );
}
