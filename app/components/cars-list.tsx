import type { Car } from "@prisma/client";
import { CarPreview } from "./car-preview";

interface CarsListProps {
  cars: Array<Car>;
  showDetailed?: boolean;
}

export function CarsList({ cars, showDetailed = false }: CarsListProps) {
  return (
    <ul className="grid grid-cols-3 gap-6 max-w-screen-md mx-auto">
      {cars.map((car) => {
        return (
          <li key={car.name}>
            <CarPreview car={car} showDetailed={showDetailed} />
          </li>
        );
      })}
    </ul>
  );
}
