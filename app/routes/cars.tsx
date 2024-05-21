import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CarsList } from "~/components/cars-list";
import { Car } from "~/types";

export async function loader() {
  const resp = await fetch(
    "https://run.mocky.io/v3/f788aa5e-dab9-49b5-a366-1848e31a41bb"
  );

  const jsonData = await resp.json();
  const data = jsonData.products as Array<Car>;

  return json({
    cars: data,
  });
}

export default function Cars() {
  const { cars } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="font-bold text-5xl">Cars</h1>
      <CarsList cars={cars}></CarsList>
    </>
  );
}
