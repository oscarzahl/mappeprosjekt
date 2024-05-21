import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CarDetails from "~/components/car-details";
import { CarsList } from "~/components/cars-list";
import { type Car } from "~/types";

export async function loader({ params }: LoaderFunctionArgs) {
  const resp = await fetch(
    `https://run.mocky.io/v3/f788aa5e-dab9-49b5-a366-1848e31a41bb`
  );

  const jsonData = await resp.json();
  const data = jsonData.products as Array<Car>;
  const car = data.find((car) => car.car_id === parseInt(params.id ?? ""));

  if (!car) {
    throw new Response("Car not found", { status: 404 });
  }

  return json({
    car,
    cars: data,
  });
}

export default function Car() {
  const { car, cars } = useLoaderData<typeof loader>();

  return (
    <>
      {car && <CarDetails car={car} />}
      <CarsList cars={cars}></CarsList>
    </>
  );
}
