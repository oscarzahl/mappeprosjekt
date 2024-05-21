import { Car } from "@/data";
import { LinkButton } from "./link-button";

export interface CarPreviewProps {
  car: Car;
  showDetailed: boolean;
}

export function CarPreview({ car, showDetailed = false }: CarPreviewProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h3 className="text-center">{car.name}</h3>
      <ul>
        <div className="text-center">{car.transmission_type}</div>
        <div className="text-center">{car.fuel_type}</div>
        {showDetailed && (
          <div className="text-center">Car seats {car.number_of_seats}</div>
        )}
      </ul>
      <LinkButton href={`/cars/${car.car_id}`}>Book Now</LinkButton>
    </div>
  );
}
