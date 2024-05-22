export async function getAllCars() {
  const response = await fetch("http://129.241.153.91/api/cars");

  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }

  const cars = await response.json();
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

export async function getUserByEmail(email: string) {
  const response = await fetch("http://129.241.153.91/api/users");
  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }
  const users = await response.json();
  const user = users.find((user: { email: string }) => user.email === email);

  return user;
}

export async function getUserByEmailAndPassword(
  email: string,
  password: string
) {
  const response = await fetch("http://129.241.153.91/api/users");

  if (!response.ok) {
    throw new Error("HTTP error! status: " + response.status);
  }

  const users = await response.json();

  const user = users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password
  );

  return user;
}
