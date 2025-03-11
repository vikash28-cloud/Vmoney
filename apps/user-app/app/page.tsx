import { Button } from "@repo/ui/button";
import {PrismaClient} from "@repo/db/client";
const client = new PrismaClient();
export default function Home() {
  return (
    <h1 className="border  text-3xl text-red-500 font-bold underline">
      <Button appName="Click me" key={1}>Click me</Button>
    </h1>
    
  )
}
