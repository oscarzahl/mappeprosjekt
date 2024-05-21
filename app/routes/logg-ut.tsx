import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { commitSession, getSession } from "../lib/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  session.set("userId", null);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};
