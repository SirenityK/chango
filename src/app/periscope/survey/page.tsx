"use client";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export default function PeriscopeSurvey() {
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
        Cuestionario sobre el Funcionamiento del Periscopio
      </h1>

      {/* Questions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 1</h2>
        <p>
          ¿Cuál es el principio físico que explica el funcionamiento del
          periscopio?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q1", value)}
          value={answers.q1 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">Reflexión de la luz</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">Refracción de la luz</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">Difracción de la luz</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">Interferencia de la luz</span>
            </label>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 2</h2>
        <p>
          ¿Cómo afecta el cambio del ángulo de los espejos al campo de visión en
          un periscopio?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q2", value)}
          value={answers.q2 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">Aumenta el campo de visión</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">Disminuye el campo de visión</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">No afecta el campo de visión</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">Varía dependiendo de otros factores</span>
            </label>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 3</h2>
        <p>¿Qué aplicación militar tienen los periscopios?</p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q3", value)}
          value={answers.q3 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">Visión en ambientes oscuros</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">Visión subacuática</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">
                Observación desde vehículos blindados
              </span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">Comunicación a larga distancia</span>
            </label>
          </div>
        </RadioGroup>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Pregunta 4</h2>
        <p>
          ¿Cuál es un factor clave para mejorar la eficacia de un periscopio?
        </p>
        <RadioGroup
          onValueChange={(value) => handleInputChange("q4", value)}
          value={answers.q4 || ""}
        >
          <div className="mt-2 flex flex-col">
            <label className="flex items-center">
              <RadioGroupItem value="a" />
              <span className="ml-2">Color de los espejos</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="b" />
              <span className="ml-2">Material del tubo</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="c" />
              <span className="ml-2">Calidad y alineación de los espejos</span>
            </label>
            <label className="flex items-center">
              <RadioGroupItem value="d" />
              <span className="ml-2">Longitud del tubo</span>
            </label>
          </div>
        </RadioGroup>
      </div>

      <Button onClick={handleSubmit} className="mt-4">
        Enviar Respuestas
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
