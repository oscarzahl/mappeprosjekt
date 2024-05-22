export interface Price {
  priceID: number;
  description: string;
  amount: number;
}

export interface Car {
  carID: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  description: string;
  make: string;
  prices: Price[];
}
