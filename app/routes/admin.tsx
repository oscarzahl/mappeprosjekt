import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { prisma } from "~/lib/db.server";
import { getSession } from "~/lib/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId") ?? null;

  if (!userId) {
    throw redirect("/");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user?.isAdmin) {
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
