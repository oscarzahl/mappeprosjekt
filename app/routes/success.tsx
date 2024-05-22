import { Hero } from "~/components/hero";

export default function Success() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Hero />
        <h1 className="font-bold text-5xl">Success!</h1>
      </div>
    </>
  );
}
