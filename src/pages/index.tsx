import { type Car } from "@/data";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CarsList } from "@/components/cars-list";
import { InferGetServerSidePropsType } from "next";
import { log } from "console";

export async function getServerSideProps() {
  const resp = await fetch(
    "https://run.mocky.io/v3/f3c6a5d5-c603-4c06-84be-cfb106459873"
  );

  if (!resp.ok) {
    throw new Error(`Failed to fetch data: ${resp.status} ${resp.statusText}`);
  }

  const jsonData = await resp.json();
  console.log(jsonData);

  // Cast JSON response to an array of cars
  const data = jsonData.products as Array<Car>;

  return {
    props: {
      cars: data.slice(0, 6),
    },
  };
}

export default function Home({
  cars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <Header />
      <Hero />
      <div className="min-h-screen flex py-24 gap-4">
        <CarsList cars={cars} />
      </div>
    </div>
  );
}
