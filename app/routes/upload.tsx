import { Form, redirect } from "@remix-run/react";
import { Input } from "~/components/input";
import { useUser } from "~/contexts/user";
import { prisma } from "~/lib/db.server";

export default function Upload() {
  const user = useUser();

  if (!user) {
    return <p>Log in to upload a car</p>;
  }

  return (
    <Form method="post">
      <Input name="name" placeholder="Name" />
      <Input name="make" placeholder="Make" />
      <Input name="brand" placeholder="Brand" />
      <Input name="model" placeholder="Model" />
      <Input name="year" placeholder="Year" type="year" />
      <Input name="price" placeholder="Price" />
      <Input name="description" placeholder="Description" />
      <Input name="image" placeholder="Image" type="file" />
      <Input name="id" placeholder="ID" />
      <button>Upload</button>
    </Form>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const car = await prisma.car.create({
    data: {
      brand: formData.get("brand") as string,
      make: formData.get("make") as string,
      description: formData.get("description") as string,
      image: formData.get("image") as string,
      model: formData.get("model") as string,
      year: Number(formData.get("year") as string),
      price: Number(formData.get("price") as string),
      name: formData.get("name") as string,
      id: formData.get("id") as string,
    },
  });

  throw redirect(`/cars/${car.id}`);
}
