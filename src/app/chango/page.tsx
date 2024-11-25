import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4 flex flex-1 flex-col justify-center gap-4 text-center">
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
      <div className="flex justify-center gap-4">
        <Link href="/chango/simulation">
          <Button>Ir a la Simulación</Button>
        </Link>
        <Link href="/chango/explanation">
          <Button className="bg-red-500 hover:bg-red-400">
            Ver Explicación
          </Button>
        </Link>
      </div>
    </div>
  );
}
