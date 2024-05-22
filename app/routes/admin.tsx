import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { getSession } from "~/lib/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId") ?? null;

  if (!userId) {
    throw redirect("/");
  }

  const response = await fetch("http://129.241.153.91/api/users/" + userId);

  if (!response.ok) {
    throw new Error("HTTP error! status " + response.status);
  }

  const user = await response.json();

  if (!user?.admin) {
    throw redirect("/");
  }

  return null;
};

export default function Admin() {
  return (
    <div>
      <p>Bare admins kan se dette</p>
    </div>
  );
}
