import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center text-center gap-4 m-4">
      <h1 className="text-4xl font-bold">
        <span>Tiro Parabólico: </span>
        <br className="md:hidden" />
        Dardo vs. Mono
      </h1>
      <p className="text-lg">
        Bienvenido a la demostración interactiva del clásico problema de física.
        ¿Logrará el dardo alcanzar al mono que cae en el instante exacto del
        disparo?
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/simulation">
          <Button>Ir a la Simulación</Button>
        </Link>
        <Link href="/explanation">
          <Button className="bg-red-500 hover:bg-red-400">
            Ver Explicación
          </Button>
        </Link>
      </div>
    </div>
  );
}
