"use client";

import Katex from "@/components/katex";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollText } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";
import { useTheme } from "next-themes";
import Link from "next/link";
import periscope from "./periscope.svg";
import "./styles.css";

export default function PeriscopeExplanation() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="mx-4 my-10 grid gap-4">
      <h1 className="mb-6 text-4xl font-bold">
        Explicación del Funcionamiento de un Periscopio
      </h1>

      <section>
        <h2>Introducción</h2>
        <p>
          Un periscopio es un instrumento óptico que permite ver objetos desde
          una posición oculta, típicamente por encima o por debajo de un
          obstáculo, gracias al uso de espejos o prismas dispuestos dentro de un
          tubo.
        </p>
      </section>

      <section>
        <h2>Principio de Reflexión</h2>
        <p>
          El principio fundamental del periscopio es la ley de reflexión de la
          luz, que afirma que el ángulo de incidencia (el ángulo en que la luz
          llega a un espejo) es igual al ángulo de reflexión (el ángulo en que
          la luz es reflejada).
        </p>
        <p>
          <Katex tex={`\\theta_i = \\theta_r`} />
        </p>
      </section>

      <section>
        <h2>Esquema del Periscopio</h2>
        <p>
          Un periscopio simple utiliza dos espejos colocados paralelamente a 45
          grados respecto a la línea de visión del observador para redirigir la
          luz desde un punto alto o bajo hacia los ojos del usuario.
        </p>
        <div className="my-8 flex flex-col place-items-center gap-8 text-center">
          <p>Diagrama simplificado de un periscopio.</p>
          <ExportedImage
            src={periscope}
            alt="Diagrama de un Periscopio"
            className={cn("relative", resolvedTheme === "dark" && "invert")}
            height={
              typeof window !== "undefined"
                ? window.innerWidth > 640
                  ? 400
                  : window.innerWidth > 320
                    ? 300
                    : 200
                : 400
            }
          />
        </div>
      </section>

      <section>
        <h2>Trayectoria de la Luz</h2>
        <p>
          En un periscopio, la luz entra por un espejo superior, se refleja
          hacia abajo a lo largo del tubo, y luego es reflejada nuevamente por
          un segundo espejo hacia la vista del observador.
        </p>
      </section>

      <section>
        <h2>Impacto de los Ángulos de los Espejos</h2>
        <p>
          Ajustar el ángulo de los espejos cambia la dirección en que la luz es
          redirigida. Esto puede ampliar o limitar el campo de visión, afectando
          la cantidad de entorno visible a través del periscopio.
        </p>
      </section>

      <section>
        <h2>Efecto del Ángulo de los Espejos en el Campo de Visión</h2>
        <p>
          El ángulo en el que se colocan los espejos dentro de un periscopio es
          crucial para determinar el campo de visión que el observador puede
          alcanzar. Un ángulo mayor generalmente ofrece un campo de visión más
          amplio, permitiendo ver un área más extensa. Sin embargo, esto puede
          variar dependiendo de la longitud del periscopio y la distancia entre
          los espejos. Al ajustar estos ángulos, se modifica la dirección en la
          que la luz es reflejada por los espejos, lo que a su vez cambia lo que
          el usuario puede ver a través del periscopio.
        </p>
      </section>

      <section>
        <h2>Aplicaciones</h2>
        <p>
          Los periscopios son ampliamente utilizados en aplicaciones militares,
          especialmente en submarinos y vehículos blindados. En los submarinos,
          permiten a la tripulación observar la superficie del agua desde debajo
          sin ser detectados, lo cual es esencial para la navegación y
          operaciones tácticas. En los vehículos blindados, los periscopios
          permiten a los ocupantes observar su entorno mientras permanecen
          protegidos dentro del vehículo. Estos dispositivos son fundamentales
          para la seguridad y la efectividad operacional en entornos de combate.
        </p>
      </section>

      <section>
        <h2>Mejora de la Eficacia del Periscopio</h2>
        <p>
          Para mejorar la eficacia de un periscopio, es crucial considerar
          varios factores técnicos. La calidad y la correcta alineación de los
          espejos son esenciales para asegurar que la imagen vista sea clara y
          precisa. Los espejos deben ser de alta calidad para minimizar la
          distorsión de la luz reflejada. Además, la longitud del tubo y el
          material con el que está hecho pueden influir en la calidad de la
          imagen. Un tubo más largo puede alterar la cantidad de luz que llega a
          los espejos, mientras que materiales opacos o que reflejen
          internamente pueden disminuir la claridad de la visión. Estos detalles
          te proporcionarán una base sólida para expandir la sección de
          explicación en tu proyecto, asegurando que los usuarios no solo
          respondan el cuestionario, sino que también comprendan completamente
          los principios detrás de las preguntas. Esto enriquecerá su
          aprendizaje y proporcionará una experiencia más educativa e integrada.
        </p>
      </section>

      <Button className="mb-6 w-fit">
        <ScrollText />
        <Link href="survey">Ir al cuestionario</Link>
      </Button>
    </div>
  );
}
