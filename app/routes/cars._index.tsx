import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { CarsList } from "~/components/cars-list";
import { getAllCars } from "~/lib/db.server";

export async function loader() {
  return json({
    cars: await getAllCars(),
  });
}

export default function Cars() {
  const { cars } = useLoaderData<{
    cars: {
      id: string;
      name: string;
      brand: string;
      model: string;
      year: number;
      price: number;
      image: string;
      description: string;
      make: string;
    }[];
  }>();
  const [make, setMake] = useState("");
  const [search, setSearch] = useState("");

  console.log(cars[0]);

  const makes = cars.reduce<string[]>((unique, car) => {
    return unique.includes(car.make) ? unique : [...unique, car.make];
  }, []);

  const filteredCars = cars.filter((car) => {
    return (
      (make === "" || car.make.toLowerCase().includes(make.toLowerCase())) &&
      (search === "" ||
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase()) ||
        car.description.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <>
      <h1 className="flex justify-center items-center text-center font-bold text-5xl m-4">
        Cars
      </h1>
      <Form method="get" className="flex justify-center items-center m-4">
        <select
          name="make"
          className="p-2 m-2"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        >
          <option value="">All Makes</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="search"
          className="p-2 m-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="p-2 m-2 bg-blue-500 text-white">
          Search
        </button>
      </Form>
      <CarsList cars={filteredCars}></CarsList>
    </>
  );
}
