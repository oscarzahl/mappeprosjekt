import CarDetails from "@/components/car-details";
import { CarsList } from "@/components/cars-list";
import { Header } from "@/components/header";
import { Car } from "@/data";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const resp = await fetch(
    `https://run.mocky.io/v3/f3c6a5d5-c603-4c06-84be-cfb106459873`
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

export default function Cars({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <Header />
      <h1 className="font-bold text-5xl">Cars</h1>
      <CarsList cars={cars}></CarsList>
    </div>
  );
}