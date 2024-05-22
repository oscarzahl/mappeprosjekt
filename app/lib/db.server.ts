export async function getAllCars() {
  const response = await fetch("http://129.241.153.91/api/cars");

  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }

  const cars = await response.json();
  console.log(cars);
  return cars;
}

export async function getCarById(id: string) {
  const response = await fetch(`http://129.241.153.91/api/cars/${id}`);

  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }

  const car = await response.json();
  return car;
}
