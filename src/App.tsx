import { useState, useRef, useEffect } from "react";
import { Slider } from "./components/ui/slider";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";
import { type ChartJSOrUndefined } from "node_modules/react-chartjs-2/dist/types";
import Katex from "./katex";

// Registro de componentes necesarios de Chart.js
ChartJS.register(
  PointElement,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function App() {
  const calcX = (v_0: number, alpha: number, t: number) => {
    return v_0 * Math.cos(alpha) * t;
  };

  const calcY = (v_0: number, alpha: number, t: number, g: number) => {
    return v_0 * Math.sin(alpha) * t - 0.5 * g * t ** 2;
  };

  const [constants, setConstants] = useState({
    g: 9.81,
    h: 10,
    x_m: 10,
    v_0: 20,
  });

  const [alpha, setAlpha] = useState(Math.atan2(constants.h, constants.x_m));
  const [t, setTime] = useState(
    constants.x_m / (constants.v_0 * Math.cos(alpha))
  );

  const [dardo, setDardo] = useState({
    x: calcX(constants.v_0, alpha, t),
    y: calcY(constants.v_0, alpha, t, constants.g),
  });

  const chartRef = useRef<ChartJSOrUndefined<"scatter">>(null);

  const dardoFlow = () => {
    // return set of points to plot the dardo
    const points = [];
    let t = 0;
    let x = 0;
    let y = 0;
    while (y >= 0 && x <= constants.x_m * 1.5) {
      x = calcX(constants.v_0, alpha, t);
      y = calcY(constants.v_0, alpha, t, constants.g);
      points.push({ x, y });
      t += 0.1;
    }
    return points;
  };

  useEffect(() => {
    const newAlpha = Math.atan2(constants.h, constants.x_m);
    const newTime = constants.x_m / (constants.v_0 * Math.cos(newAlpha));

    setAlpha(newAlpha);
    setTime(newTime);

    // Update the dardo's position to reflect the new constants
    const newDardo = {
      x: calcX(constants.v_0, newAlpha, newTime),
      y: calcY(constants.v_0, newAlpha, newTime, constants.g),
    };
    setDardo(newDardo);
    console.log(newDardo);
  }, [constants]);

  return (
    <main>
      <Scatter
        ref={chartRef}
        data={{
          datasets: [
            {
              label: "Dardo",
              data: [dardo],
              backgroundColor: "blue",
            },
            {
              label: "Altura inicial del mono",
              data: [
                {
                  x: constants.x_m,
                  y: constants.h,
                },
              ],
              backgroundColor: "red",
            },
            {
              label: "Camino del dardo",
              data: dardoFlow(),
              backgroundColor: "green",
              borderColor: "green",
              showLine: true,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              min: 0,
              max: Math.round(constants.x_m * 1.5),
            },
            y: {
              min: 0,
              max: Math.round(constants.h * 1.5),
            },
          },
        }}
      />
      <div className="flex gap-4">
        <div>
          <p>Distancia vertical inicial del mono</p>
          <Slider
            defaultValue={[constants.h]}
            max={100}
            min={1}
            step={1}
            onValueChange={(value) =>
              setConstants({ ...constants, h: Number(value) })
            }
          />
        </div>
        <div>
          <p>Distancia horizontal al mono</p>
          <Slider
            defaultValue={[constants.x_m]}
            max={100}
            min={1}
            step={1}
            onValueChange={(value) =>
              setConstants((prev) => ({ ...prev, x_m: Number(value) }))
            }
          />
        </div>
        <div>
          <p>Velocidad inicial</p>
          <Slider
            defaultValue={[constants.v_0]}
            max={100}
            min={1}
            step={1}
            onValueChange={(value) =>
              setConstants((prev) => ({ ...prev, v_0: Number(value) }))
            }
          />
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-xl font-bold">Datos calculados:</h1>
        <div className="flex gap-8">
          <Katex math={`v_{0}=${constants.v_0}`} />
          <Katex math={`x_{m}=${constants.x_m}`} />
          <Katex math={`h=${constants.h}`} />
          <Katex
            math={`\\alpha\\approx${((alpha * 180) / Math.PI).toFixed(3)}`}
          />
          <Katex math={`\\text{Tiempo que tomó}=${t.toFixed(2)}\\text{s}`} />
        </div>
      </div>
      {dardo.y < 0 ? (
        <h1 className="text-xl font-bold text-red-500">El dardo no alcanza</h1>
      ) : (
        <h1 className="text-xl font-bold text-green-500">
          El dardo alcanza a disparar
        </h1>
      )}
    </main>
  );
}
