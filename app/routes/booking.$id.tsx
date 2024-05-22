import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BookingDetails from "~/components/booking-details";
import { CarsList } from "~/components/cars-list";
import { getAllCars, getCarById } from "~/lib/db.server";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Response("Car not found", { status: 404 });
  }

  const car = await getCarById(params.id);

  if (!car) {
    throw new Response("Car not found", { status: 404 });
  }

  return json({
    car,
    cars: await getAllCars(),
  });
}

export default function Booking() {
  const { car, cars } = useLoaderData<typeof loader>();

  return (
    <>
      <BookingDetails car={car} />
      <CarsList cars={cars}></CarsList>
    </>
  );
}
