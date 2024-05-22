import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CarsList } from "~/components/cars-list";
import { getAllCars } from "~/lib/db.server";

export async function loader() {
  return json({
    cars: await getAllCars(),
  });
}

export default function Cars() {
  const { cars } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="flex justify-center items-center text-center font-bold text-5xl m-4">
        Cars
      </h1>
      <CarsList cars={cars}></CarsList>
    </>
  );
}
