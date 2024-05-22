import { Car } from "~/types";
import { LinkButton } from "./link-button";

export interface CarPreviewProps {
  car: Car;
  showDetailed: boolean;
}

export function CarPreview({ car }: CarPreviewProps) {
  const carImg = `http://129.241.153.91/api/api/images/car/${car.carID}`;
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h3 className="text-center">{car.make + " " + car.model}</h3>
      {
        <img
          src={carImg}
          alt={car.name}
          className="w-64 h-64 object-cover rounded-lg"
        />
      }
      {/* <ul>
        <div className="text-center">{car.transmission_type}</div>
        <div className="text-center">{car.fuel_type}</div>
        {showDetailed && (
          <div className="text-center">Car seats {car.number_of_seats}</div>
        )}
      </ul> */}
      <LinkButton href={`/booking/${car.carID}`}>Book Now</LinkButton>
    </div>
  );
}
