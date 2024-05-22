import type { Car } from "@prisma/client";
import { LinkButton } from "./link-button";

export interface CarPreviewProps {
  car: Car;
  showDetailed: boolean;
}

export function CarPreview({ car }: CarPreviewProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h3 className="text-center">{car.brand + " " + car.model}</h3>
      {/*<img
        src={car.image}
        alt={car.name}
        className="w-64 h-64 object-cover rounded-lg"
  />*/}
      {/* <ul>
        <div className="text-center">{car.transmission_type}</div>
        <div className="text-center">{car.fuel_type}</div>
        {showDetailed && (
          <div className="text-center">Car seats {car.number_of_seats}</div>
        )}
      </ul> */}
      <LinkButton href={`/cars/${car.id}`}>Book Now</LinkButton>
    </div>
  );
}
