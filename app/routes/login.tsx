import { Button } from "~/components/button";
import { Input } from "~/components/input";
import { LinkButton } from "~/components/link-button";

export default function LogIn() {
  return (
    <div className="flex flex-col max-w-screen-sm mx-auto py-24 gap-4">
      <h1 className="font-bold">Log in</h1>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <div className="grid grid-cols-2 w-1/2 ml-auto">
        <LinkButton
          href={"/register"}
          className="bg-transparent hover:underline"
        >
          Register
        </LinkButton>
        <Button>Log in</Button>
      </div>
    </div>
  );
}
