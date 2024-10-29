"use client";

import Katex from "@/components/katex";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, CircleX } from "lucide-react";
import { useState } from "react";

export default function Survey() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="m-4 pb-10">
      <h1 className="mb-6 text-3xl font-bold">
        Cuestionario sobre el problema del Dardo y el Mono
      </h1>

      {/* Pregunta 1 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 1</h2>
        <p>
          ¿Cuál es la ecuación que describe la posición horizontal del dardo en
          función del tiempo <Katex math="t" />?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q1", value)}
          value={answers.q1 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">
                <Katex math="x(t) = V_{0} \cos(\theta) t" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">
                <Katex math="x(t) = V_{0} \sin(\theta) t" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">
                <Katex math="x(t) = V_{0} t" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">
                <Katex math="x(t) = V_{0} t - \frac{1}{2} g t^2" />
              </span>
            </label>
          </div>
        </RadioGroup>
        {submitted && (
          <div>
            {answers.q1 === "a" ? (
              <div className="my-4 flex gap-2">
                <Check /> Correcto.
              </div>
            ) : (
              <>
                <div className="my-4 flex gap-2">
                  <CircleX />
                  Incorrecto.
                </div>
                <p>
                  La respuesta correcta es{" "}
                  <Katex math="x(t)=V_{0}\cos(\theta)t" />
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Pregunta 2 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 2</h2>
        <p>
          ¿Cuál de las siguientes expresiones representa la posición vertical
          del mono en función del tiempo <Katex math="t" />?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q2", value)}
          value={answers.q2 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">
                <Katex math="y_m(t) = h + V_{0} t" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">
                <Katex math="y_m(t) = h - \frac{1}{2} g t^2" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">
                <Katex math="y_m(t) = V_{0} \sin(\theta) t - \frac{1}{2} g t^2" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">
                <Katex math="y_m(t) = h + V_{0} \cos(\theta) t" />
              </span>
            </label>
          </div>
        </RadioGroup>
        {submitted && (
          <div>
            {answers.q2 === "b" ? (
              <div className="my-4 flex gap-2">
                <Check /> Correcto.
              </div>
            ) : (
              <>
                <div className="my-4 flex gap-2">
                  <CircleX />
                  Incorrecto.
                </div>
                <p>
                  La respuesta correcta es{" "}
                  <Katex math="y_m(t) = h - \frac{1}{2} g t^2" />
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Pregunta 3 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 3</h2>
        <p>
          ¿Cuál es la relación entre <Katex math="\tan(\theta)" /> y las
          distancias horizontales y verticales al mono?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q3", value)}
          value={answers.q3 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">
                <Katex math="\tan(\theta) = \frac{X_m}{h}" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">
                <Katex math="\tan(\theta) = \frac{h}{X_m}" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">
                <Katex math="\tan(\theta) = \frac{V_0}{g}" />
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">
                <Katex math="\tan(\theta) = \frac{g}{V_0}" />
              </span>
            </label>
          </div>
        </RadioGroup>
        {submitted && (
          <div>
            {answers.q3 === "b" ? (
              <div className="my-4 flex gap-2">
                <Check /> Correcto.
              </div>
            ) : (
              <>
                <div className="my-4 flex gap-2">
                  <CircleX />
                  Incorrecto.
                </div>
                <p>
                  La respuesta correcta es{" "}
                  <Katex math="\tan(\theta) = \frac{h}{X_m}" />
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Pregunta 4 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 4</h2>
        <p>
          ¿Qué principio físico explica que el dardo impacta al mono sin
          importar la velocidad inicial (siempre que sea suficiente para
          alcanzarlo)?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q4", value)}
          value={answers.q4 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">Principio de inercia</span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">Principio de acción y reacción</span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">
                Superposición de movimientos y aceleración gravitatoria común
              </span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">Conservación de la energía</span>
            </label>
          </div>
        </RadioGroup>
        {submitted && (
          <div>
            {answers.q4 === "c" ? (
              <div className="my-4 flex gap-2">
                <Check /> Correcto.
              </div>
            ) : (
              <>
                <div className="my-4 flex gap-2">
                  <CircleX />
                  Incorrecto.
                </div>
                <p>
                  La respuesta correcta es la superposición de movimientos y
                  aceleración gravitatoria común.
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Pregunta 5 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 5</h2>
        <p>
          Si aumentamos la aceleración de la gravedad <Katex math="g" />,
          manteniendo todos los demás parámetros constantes, ¿cómo afectará esto
          al tiempo que tarda el dardo en alcanzar al mono?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q5", value)}
          value={answers.q5 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">El tiempo aumenta</span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">El tiempo disminuye</span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">El tiempo permanece igual</span>
            </label>
            <label className="mt-2 flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">Depende de la velocidad inicial</span>
            </label>
          </div>
        </RadioGroup>
        {submitted && (
          <div>
            {answers.q5 === "c" ? (
              <div className="my-4 flex gap-2">
                <Check /> Correcto.
              </div>
            ) : (
              <>
                <div className="my-4 flex gap-2">
                  <CircleX />
                  Incorrecto.
                </div>
                <p>
                  El tiempo permanece igual porque depende de la distancia
                  horizontal y la componente horizontal de la velocidad.
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <Button onClick={handleSubmit} className="mt-4">
        Enviar respuestas
      </Button>

      {submitted && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Resultados</h2>
          <p>
            Has completado el cuestionario. Revisa tus respuestas y consulta el
            material de estudio si tienes dudas.
          </p>
        </div>
      )}
    </div>
  );
}
