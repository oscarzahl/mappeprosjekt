export type Car = {
  car_id: number;
  name: string;
  car_maker: string;
  car_model: string;
  year: number;
  fuel_type: string;
  transmission_type: string;
  number_of_seats: number;
  extra_features: string[];
  prices: {
    rental_company: string;
    price_per_day: number;
  }[];
};
