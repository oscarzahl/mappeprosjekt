import CarDetails from "@/components/car-details";
import { CarsList } from "@/components/cars-list";
import { Header } from "@/components/header";
import type { Car } from "@/data";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const resp = await fetch(
    `https://run.mocky.io/v3/f788aa5e-dab9-49b5-a366-1848e31a41bb`
  );

  const jsonData = await resp.json();

  // Cast JSON response to an array of cars
  const data = jsonData.products as Array<Car>;

  return {
    props: {
      cars: data,
    },
  };
}

export default function Car({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { carid } = router.query;
  const car = cars.find((car) => car.car_id === Number(carid));

  return (
    <div className="bg-yellow-300 min-h-screen">
      <Header />
      {car && <CarDetails car={car} />}
      <CarsList cars={cars}></CarsList>
    </div>
  );
}
