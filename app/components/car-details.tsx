import { useUser } from "~/contexts/user";
import { Car } from "~/types";

export default function CarDetails({ car }: { car: Car }) {
  const user = useUser();
  return (
    <div className="flex flex-col items-center mx-auto mb-8">
      <h1>{car.name}</h1>
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
            <button
              onClick={() => {
                alert(`You booked ${car.name} with ${price.description}`);
              }}
            >
              Book now!
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
