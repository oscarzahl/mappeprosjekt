import { useUser } from "~/contexts/user";
import { Car } from "~/types";
import { LinkButton } from "./link-button";

export default function CarDetails({ car }: { car: Car }) {
  const user = useUser();
  return (
    <div className="flex flex-col items-center mx-auto mb-8">
      <h1>{car.name}</h1>
      <img
        src={`http://129.241.153.91/api/api/images/car/${car.carID}`}
        alt={car.name}
        className="max-w-80 h-auto object-cover rounded-lg"
      />
      <p>Maker: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>{car.description}</p>
      {/* <p>Extra Features: {car.extra_features.join(", ")}</p> */}
      <h2>Prices:</h2>
      {car.prices.map((price, index) => (
        <div key={index}>
          <p>Rental Company: {price.description}</p>
          <p>Price per day: {price.amount}</p>
          {user && (
            <LinkButton href={`/booking/${car.carID}`} className="mb-4">
              Book now!
            </LinkButton>
          )}
        </div>
      ))}
    </div>
  );
}
