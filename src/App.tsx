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
import { invoke } from "@tauri-apps/api/core";

ChartJS.register(
  PointElement,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function App() {
  const g = 9.81;

  const [constants, setConstants] = useState({
    h: 10,
    xM: 10,
    v0: 20,
  });
  const [alpha, setAlpha] = useState(0.7853);
  const [t, setTime] = useState(0.707);
  const [dardo, setDardo] = useState({
    x: 10,
    y: 7.5475,
  });
  const [dardoPlot, setDardoPlot] =
    useState<Awaited<ReturnType<typeof dardoFlow>>>();

  const chartRef = useRef<ChartJSOrUndefined<"scatter">>(null);

  const dardoFlow = async (alpha: number) => {
    const points = [];
    let t = 0,
      x = 0,
      y = 0;

    while (y >= 0 && x <= constants.xM * 1.5) {
      x = await calcX(constants.v0, alpha, t);
      y = await calcY(constants.v0, alpha, t);
      points.push({ x, y });
      t += 0.1;
    }

    return points;
  };

  const calcX = async (v0: number, alpha: number, t: number) =>
    await invoke<number>("calc_x", { v0, alpha, t });
  const calcY = async (v0: number, alpha: number, t: number) =>
    await invoke<number>("calc_y", { v0, alpha, t, g });

  useEffect(() => {
    const fetchData = async () => {
      const newAlpha = await invoke<number>("atan2", {
        y: constants.h,
        x: constants.xM,
      });
      const newTime = await invoke<number>("calc_time", {
        xM: constants.xM,
        v0: constants.v0,
        alpha: newAlpha,
      });
      const newDardo = {
        x: await calcX(constants.v0, newAlpha, newTime),
        y: await calcY(constants.v0, newAlpha, newTime),
      };

      const path = await dardoFlow(newAlpha);

      setAlpha(newAlpha);
      setTime(newTime);
      setDardo(newDardo);
      setDardoPlot(path);
    };
    fetchData();
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
                  x: constants.xM,
                  y: constants.h,
                },
              ],
              backgroundColor: "red",
            },
            {
              label: "Camino del dardo",
              data: dardoPlot,
              backgroundColor: "green",
              borderColor: "green",
              pointRadius: 0,
              showLine: true,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              min: 0,
              max: Math.round(constants.xM * 1.5),
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
            defaultValue={[constants.xM]}
            max={100}
            min={1}
            step={1}
            onValueChange={(value) =>
              setConstants((prev) => ({ ...prev, xM: Number(value) }))
            }
          />
        </div>
        <div>
          <p>Velocidad inicial</p>
          <Slider
            defaultValue={[constants.v0]}
            max={100}
            min={1}
            step={1}
            onValueChange={(value) =>
              setConstants((prev) => ({ ...prev, v0: Number(value) }))
            }
          />
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-xl font-bold">Datos calculados:</h1>
        <div className="flex gap-8 flex-wrap">
          <Katex math={`v_{0}=${constants.v0}`} />
          <Katex math={`x_{m}=${constants.xM}`} />
          <Katex math={`h=${constants.h}`} />
          <Katex
            math={`\\alpha\\approx${((alpha * 180) / Math.PI).toFixed(
              3,
            )}^\\circ`}
          />
          <Katex
            math={`\\text{Tiempo que tomó en llegar}=${t.toFixed(2)}\\text{s}`}
          />
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
