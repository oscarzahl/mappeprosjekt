import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { CarsList } from "~/components/cars-list";
import { Hero } from "~/components/hero";

export const meta: MetaFunction = () => {
  return [{ title: "Car Roulette" }];
};

export async function loader() {
  const response = await fetch("http://129.241.153.91/api/cars");

  if (!response.ok) {
    throw new Error("HTTP error! status " + response.status);
  }

  const cars = await response.json();

  return json({ cars: cars.slice(0, 6) });
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
