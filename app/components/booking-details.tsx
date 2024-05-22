import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useUser } from "~/contexts/user";
import { Car } from "~/types";

export default function BookingDetails({ car }: { car: Car }) {
  const user = useUser();
  return (
    <Form>
      <p>Maker: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>{car.description}</p>

      <label>
        Start Date:
        <input type="date" name="startDate" required />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" required />
      </label>
      <button type="submit">Book Now</button>
      <input type="text" value={user?.id} name="userID" readOnly />
      <input type="text" value={car?.carID} name="carID" readOnly />
    </Form>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const response: Response = await fetch("http://129.241.153.91/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rentalStartDate: formData.get("startDate"),
      rentalEndDate: formData.get("endDate"),
      rentalStatus: "ONGOING",
      car: {
        carID: formData.get("userID"),
      },
      user: {
        userID: formData.get("userID"),
      },
    }),
  });
  if (!response.ok) {
    throw new Error("HTTP error! status " + response.status);
  }

  if (response.ok) {
    return redirect("/");
  }
};
