import { type Car } from "~/types";

export interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  return (
    <div>
      <h1>{car.name}</h1>
      <p>Maker: {car.car_maker}</p>
      <p>Model: {car.car_model}</p>
      <p>Year: {car.year}</p>
      <p>Fuel Type: {car.fuel_type}</p>
      <p>Transmission: {car.transmission_type}</p>
      <p>Seats: {car.number_of_seats}</p>
      <p>Extra Features: {car.extra_features.join(", ")}</p>
      <h2>Prices:</h2>
      {car.prices.map((price, index) => (
        <div key={index}>
          <p>Rental Company: {price.rental_company}</p>
          <p>Price per day: {price.price_per_day}</p>
        </div>
      ))}
    </div>
  );
}
