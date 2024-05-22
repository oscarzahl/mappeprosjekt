import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { LinkButton } from "~/components/link-button";
import { prisma } from "~/lib/db.server";

export default function Register() {
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto py-24 gap-4">
      <h1 className="font-bold">Register</h1>
      <Form method="post">
        <Input name="email" placeholder="Email" type="email" />
        <Input name="phonenumber" placeholder="Phone number" />
        <Input name="password" placeholder="Password" type="password" />

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
  const phonenumber = formData.get("phonenumber") as string;
  const password = formData.get("password") as string;

  await prisma.user.create({
    data: {
      email,
      phonenumber,
      password,
    },
  });

  throw redirect("/login");
};
