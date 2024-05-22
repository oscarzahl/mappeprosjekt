import { Hero } from "~/components/hero";

export default function Error() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Hero />
        <h1 className="font-bold text-5xl">
          There was an error uploading your car!
        </h1>
      </div>
    </>
  );
}
