import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import stylesheet from "./tailwind.css?url";
import { Header } from "./components/header";
import { getSession } from "./lib/session.server";
import { UserContext } from "./contexts/user";
import { prisma } from "./lib/db.server";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesheet,
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId") ?? null;

  if (!userId) {
    return null;
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return user;
};

export function Layout({ children }: { children: React.ReactNode }) {
  const user = useRouteLoaderData<typeof loader>("root") ?? null;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <UserContext.Provider
          value={
            user
              ? {
                  email: user.email,
                  id: user.id,
                  isAdmin: user.isAdmin,
                }
              : null
          }
        >
          <p>Logget inn som: {user?.email ?? "Ingen"}</p>
          <div className="bg-yellow-300 min-h-screen">
            <Header />
            {children}
          </div>
        </UserContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
