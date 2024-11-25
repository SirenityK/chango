import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex flex-1 flex-col justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">Elige un proyecto</h1>
      <div className="flex justify-center gap-4">
        <Link href="/chango">
          <Button>Mono</Button>
        </Link>
        <Link href="/periscope">
          <Button>Periscopio</Button>
        </Link>
      </div>
    </div>
  );
}
