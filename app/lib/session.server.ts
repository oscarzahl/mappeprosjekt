import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  userId: string | null;
};

const sessionStorage = createCookieSessionStorage<SessionData>({
  cookie: {
    name: "user",
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession, destroySession, getSession } = sessionStorage;
