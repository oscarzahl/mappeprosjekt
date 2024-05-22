import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { CarsList } from "~/components/cars-list";
import { Hero } from "~/components/hero";
import { getAllCars } from "~/lib/db.server";

export const meta: MetaFunction = () => {
  return [{ title: "Car Roulette" }];
};

export async function loader() {
  const cars = await getAllCars().then((res) => res.slice(0, 6));

  return json({
    cars,
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
