import type { Car } from "@prisma/client";
// import { useUser } from "~/contexts/user";

export interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  //const user = useUser();
  return (
    <div className="flex flex-col items-center mx-auto mb-8">
      <h1>{car.name}</h1>
      <p>Maker: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>{car.description}</p>
      {/*<p>Extra Features: {car.extra_features.join(", ")}</p>*/}
      <h2>Prices:</h2>
      {/*car.prices.map((price, index) => (
        <div key={index}>
          <p>Rental Company: {price.rental_company}</p>
          <p>Price per day: {price.price_per_day}</p>
          {user && (
            <button
              onClick={() => {
                alert(`You booked ${car.name} with ${price.rental_company}`);
              }}
            >
              Book now!
            </button>
          )}
        </div>
      ))*/}
    </div>
  );
}
