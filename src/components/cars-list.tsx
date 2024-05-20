import { Car } from "@/data";
import { CarPreview } from "./car-preview";

interface CarsListProps {
  cars: Array<Car>;
}

export function CarsList({ cars }: CarsListProps) {
  return (
    <ul className="grid grid-cols-3 gap-6 max-w-screen-md mx-auto">
      {cars.map((car) => {
        return (
          <li key={car.name}>
            <CarPreview car={car} showDetailed={false} />
          </li>
        );
      })}
    </ul>
  );
}
