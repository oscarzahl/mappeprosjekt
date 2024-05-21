import { LinkButton } from "./link-button";

export function Hero() {
  return (
    <div className="h-[800px] flex justify-center items-center text-center bg-[url(/lamborghini-gul-filter.webp)] bg-contain">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold p-10">Rental Roulette</h1>
        <LinkButton href="/cars">Explore</LinkButton>
      </div>
    </div>
  );
}
