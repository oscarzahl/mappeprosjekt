// import { Form, redirect } from "@remix-run/react";
// import { Input } from "~/components/input";
import { useUser } from "~/contexts/user";

export default function Upload() {
  const user = useUser();

  if (!user) {
    return <p>Log in to upload a car</p>;
  }

  return (
    // <Form method="post">
    //   <Input name="name" placeholder="Name" />
    //   <Input name="make" placeholder="Make" />
    //   <Input name="brand" placeholder="Brand" />
    //   <Input name="model" placeholder="Model" />
    //   <Input name="year" placeholder="Year" type="year" />
    //   <Input name="price" placeholder="Price" />
    //   <Input name="description" placeholder="Description" />
    //   <Input name="image" placeholder="Image" type="file" />
    //   <Input name="id" placeholder="ID" />
    //   <button>Upload</button>
    // </Form>
    <div className="flex flex-col max-w-screen-sm mx-auto py-24 gap-4">
      Not yet implemented
    </div>
  );
}

// export async function action({ request }: { request: Request }) {
//   const formData = await request.formData();

//   const car = await prisma.car.create({
//     data: {
//       brand: formData.get("brand") as string,
//       make: formData.get("make") as string,
//       description: formData.get("description") as string,
//       image: formData.get("image") as string,
//       model: formData.get("model") as string,
//       year: Number(formData.get("year") as string),
//       price: Number(formData.get("price") as string),
//       name: formData.get("name") as string,
//       id: formData.get("id") as string,
//     },
//   });

//   throw redirect(`/cars/${car.id}`);
// }
