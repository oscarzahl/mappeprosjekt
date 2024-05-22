import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { LinkButton } from "~/components/link-button";

export default function Register() {
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto py-24 gap-4">
      <h1 className="font-bold">Register</h1>
      <Form method="post">
        <Input name="email" placeholder="Email" type="email" required />
        <Input name="firstName" placeholder="First Name" required />
        <Input name="lastName" placeholder="Last Name" required />
        <Input name="phonenumber" placeholder="Phone number" required />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          minLength={8}
        />

        <div className="grid grid-cols-2 w-1/2 ml-auto">
          <LinkButton href="/login" className="bg-transparent hover:underline">
            Existing account?
          </LinkButton>
          <Button type="submit">Register</Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phoneNumber = formData.get("phonenumber") as string;
  const password = formData.get("password") as string;

  const response = await fetch("http://129.241.153.91/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      isAdmin: false,
    }),
  });
  if (response.status === 409) {
    throw json("A user with that email already exists");
  } else if (!response.ok) {
    throw new Error("HTTP error! status " + response.status);
  }

  const user = await response.json();

  if (user) {
    return redirect("/login");
  }
};
