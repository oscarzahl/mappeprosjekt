export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://rental-roulette.vercel.app"
    : `http://localhost:${process.env.PORT}`;
