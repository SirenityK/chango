import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="m-4 flex flex-1 flex-col justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">
        <span>Óptica Geométrica: </span>
        <br className="md:hidden" />
        Funcionamiento de un Periscopio
      </h1>
      <p className="text-lg">
        Bienvenido a la demostración interactiva del periscopio. Aprende cómo
        los rayos de luz se reflejan dentro de un periscopio y cómo afecta el
        ángulo de los espejos.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/periscope/simulation">
          <Button>Ir a la Simulación</Button>
        </Link>
        <Link href="/periscope/explanation">
          <Button className="bg-red-500 hover:bg-red-400">
            Ver Explicación
          </Button>
        </Link>
        <Link href="/periscope/survey">
          <Button className="bg-green-500 hover:bg-green-400">
            Ir al Cuestionario
          </Button>
        </Link>
      </div>
    </div>
  );
}
