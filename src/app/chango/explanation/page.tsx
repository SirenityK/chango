import Katex from "@/components/katex";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import Link from "next/link";

export default function Explicacion() {
  return (
    <div className="mx-4 my-10 grid gap-4">
      <h1 className="mb-6 text-4xl font-bold">
        Demostración del Problema del Dardo y el Mono
      </h1>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Introducción</h2>
        <p>
          El problema del dardo y el mono es un clásico en la cinemática,
          propuesto en la Escuela Politécnica Superior de la Universidad de
          Sevilla en 2013. La situación plantea que un mono se suelta de un
          árbol justo cuando un dardo es disparado hacia él. La pregunta es: ¿el
          dardo logrará impactar al mono sin importar la velocidad inicial? A
          continuación, analizamos este problema matemáticamente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Ecuaciones de Movimiento
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong>Movimiento del dardo</strong>:
            </p>
            <p>
              <Katex tex="V_{x} = V_{0} \cos(\theta)" />
            </p>
            <p>
              <Katex tex="V_{y} = V_{0} \sin(\theta) - g t" />
            </p>
            <p>
              <Katex tex="x(t) = V_{0} \cos(\theta) t" />
            </p>
            <p>
              <Katex tex="y(t) = V_{0} \sin(\theta) t - \frac{1}{2} g t^2" />
            </p>
          </li>
          <li>
            <p>
              <strong>Movimiento del mono</strong>:
            </p>
            <p>
              <Katex tex="x_m(t) = X_m" />
            </p>
            <p>
              <Katex tex="y_m(t) = h - \frac{1}{2} g t^2" />
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Ecuaciones de Movimiento
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong>Movimiento del dardo</strong>:
            </p>
            <p>
              <Katex tex="V_{x} = V_{0} \cos(\theta)" />
            </p>
            <p>
              <Katex tex="V_{y} = V_{0} \sin(\theta) - g t" />
            </p>
            <p>
              <Katex tex="x(t) = V_{0} \cos(\theta) t" />
            </p>
            <p>
              <Katex tex="y(t) = V_{0} \sin(\theta) t - \frac{1}{2} g t^2" />
            </p>
          </li>
          <li>
            <p>
              <strong>Movimiento del mono</strong>:
            </p>
            <p>
              <Katex tex="x_m(t) = X_m" />
            </p>
            <p>
              <Katex tex="y_m(t) = h - \frac{1}{2} g t^2" />
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Condición de Impacto</h2>
        <p>
          Queremos encontrar el instante <Katex tex="t_1" /> en el que el dardo
          pasa por la posición horizontal <Katex tex="X_m" /> del mono. Usamos
          la ecuación horizontal del dardo:
        </p>
        <p>
          <Katex tex="X_m = V_0 \cos(\theta) t_1" />
        </p>
        <p>
          Despejando <Katex tex="t_1" />:
        </p>
        <p>
          <Katex tex="t_1 = \frac{X_m}{V_0 \cos(\theta)}" />
        </p>

        <h3 className="mb-2 mt-4 text-xl font-semibold">
          Posición del Dardo en <Katex tex="t_1" />
        </h3>
        <p>
          Usamos la ecuación vertical del dardo, sustituyendo{" "}
          <Katex tex="t_1" />:
        </p>
        <p>
          <Katex tex="y(t_1) = V_0 \sin(\theta) \cdot \frac{X_m}{V_0 \cos(\theta)} - \frac{1}{2} g \left(\frac{X_m}{V_0 \cos(\theta)}\right)^2" />
        </p>
        <p>
          Simplificamos usando la identidad{" "}
          <Katex tex="\tan(\theta) = \frac{h}{X_m}" />:
        </p>
        <p>
          <Katex tex="y(t_1) = h - \frac{g}{2 V_0^2} \left(X_m^2 + h^2\right)" />
        </p>

        <h3 className="mb-2 mt-4 text-xl font-semibold">
          Posición del Mono en <Katex tex="t_1" />
        </h3>
        <p>
          Ahora, encontramos la posición vertical del mono en el mismo instante{" "}
          <Katex tex="t_1" />. Usamos la ecuación:
        </p>
        <p>
          <Katex tex="y_m(t_1) = h - \frac{1}{2} g t_1^2" />
        </p>
        <p>
          Sustituimos <Katex tex="t_1 = \frac{X_m}{V_0 \cos(\theta)}" />:
        </p>
        <p>
          <Katex tex="y_m(t_1) = h - \frac{1}{2} g \left(\frac{X_m}{V_0 \cos(\theta)}\right)^2" />
        </p>
        <p>
          Usamos la identidad{" "}
          <Katex tex="\sec^2(\theta) = 1 + \tan^2(\theta)" /> y
          <Katex tex="\tan(\theta) = \frac{h}{X_m}" />:
        </p>
        <p>
          <Katex tex="y_m(t_1) = h - \frac{g}{2 V_0^2} \left(X_m^2 + h^2\right)" />
        </p>

        <h3 className="mb-2 mt-4 text-xl font-semibold">
          Comparación de las Posiciones
        </h3>
        <p>
          Observamos que la posición del dardo en <Katex tex="t_1" /> es:
        </p>
        <p>
          <Katex tex="y(t_1) = h - \frac{g}{2 V_0^2} \left(X_m^2 + h^2\right)" />
        </p>
        <p>Y la posición del mono en el mismo instante es:</p>
        <p>
          <Katex tex="y_m(t_1) = h - \frac{g}{2 V_0^2} \left(X_m^2 + h^2\right)" />
        </p>
        <p>
          Como ambas expresiones son iguales, concluimos que en el instante{" "}
          <Katex tex="t_1" />, las posiciones verticales del dardo y el mono
          coinciden. Esto demuestra que el dardo impacta al mono
          independientemente de la velocidad inicial <Katex tex="V_0" />,
          siempre que sea lo suficientemente grande como para alcanzarlo antes
          de que caiga al suelo.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Conclusión</h2>
        <p>
          El análisis muestra que el dardo siempre impactará al mono si ambos
          parten al mismo tiempo, independientemente de la velocidad inicial del
          dardo. Esto se debe a que tanto el mono como el dardo están sometidos
          a la misma aceleración gravitatoria, sincronizando sus trayectorias.
        </p>
      </section>
      <Button className="mb-6 w-fit">
        <ScrollText />
        <Link href="survey">Ir al cuestionario</Link>
      </Button>
    </div>
  );
}
