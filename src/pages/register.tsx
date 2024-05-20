import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";

export default function LogIn() {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <Header />
      <div className="flex flex-col max-w-screen-sm mx-auto py-24 gap-4">
        <h1 className="font-bold">Register</h1>
        <Input placeholder="Email" />
        <Input placeholder="Phonenumber" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="grid grid-cols-2 w-1/2 ml-auto">
          <LinkButton
            href={"/login"}
            className="bg-transparent hover:underline"
          >
            Existing account?
          </LinkButton>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}
