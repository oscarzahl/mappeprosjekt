import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { LinkButton } from "~/components/link-button";
import { Form, useActionData } from "@remix-run/react";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { commitSession, getSession } from "~/lib/session.server";

export default function LogIn() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="flex flex-col max-w-screen-sm mx-auto py-24 gap-4">
      <h1 className="font-bold">Log in</h1>

      {actionData?.message && <p>{actionData.message}</p>}

      <Form method="post">
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" />
        <div className="grid grid-cols-2 w-1/2 ml-auto">
          <LinkButton
            href={"/register"}
            className="bg-transparent hover:underline"
          >
            Register
          </LinkButton>
          <Button>Log in</Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username === "oscar" && password === "hei123") {
    session.set("userId", "oscar");

    throw redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return json({
    message: "Feil brukernavn eller passord",
  });
};
