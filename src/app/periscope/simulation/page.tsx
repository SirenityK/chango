"use client";

import Katex from "@/components/katex";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import field from "./image.png";

export default function PeriscopeSimulation() {
  const [mirrorAngle, setMirrorAngle] = useState(45); // degrees
  const mirrorAngleRadians = (mirrorAngle * Math.PI) / 180;

  // Function to calculate field of view based on mirror angle
  function calculateFieldOfView(angle: number) {
    // Assuming the field of view is proportional to the mirror angle
    // For simplicity, let's define the maximum FOV at 45 degrees
    const maxFOV = 30; // degrees
    const fov = (angle / 45) * maxFOV;
    return fov;
  }

  const fieldOfView = calculateFieldOfView(mirrorAngle); // degrees

  // Mirror positions
  function calculateMirrorPoints(
    cx: number,
    cy: number,
    length: number,
    angle: number,
  ) {
    const x1 = cx - (length / 2) * Math.cos(angle);
    const y1 = cy - (length / 2) * Math.sin(angle);
    const x2 = cx + (length / 2) * Math.cos(angle);
    const y2 = cy + (length / 2) * Math.sin(angle);
    return { x1, y1, x2, y2 };
  }

  const topMirror = calculateMirrorPoints(200, 100, 80, mirrorAngleRadians);
  const bottomMirror = calculateMirrorPoints(200, 300, 80, -mirrorAngleRadians);

  // Light beam points
  const lightBeamPoints = [
    { x: 200, y: 20 }, // Entry point
    { x: 200, y: topMirror.y1 }, // To top mirror
    { x: topMirror.x2, y: topMirror.y2 }, // After top mirror
    { x: bottomMirror.x1, y: bottomMirror.y1 }, // To bottom mirror
    { x: 200, y: 380 }, // Exit point
  ];

  // Convert fieldOfView to a percentage for the radial gradient
  const fieldOfViewPercent = (fieldOfView / 90) * 100; // Assuming 90 degrees is the full possible FOV

  return (
    <div className="m-4 pb-10">
      <h1 className="mb-4 text-2xl font-bold">Simulación de un Periscopio</h1>
      <div className="flex flex-col md:flex-row">
        {/* Left side: Periscope diagram */}
        <div className="md:w-1/2">
          <svg width="400" height="400" style={{ border: "1px solid black" }}>
            {/* Draw periscope body */}
            <rect x="150" y="100" width="100" height="200" fill="grey" />

            {/* Draw mirrors */}
            <line
              x1={topMirror.x1}
              y1={topMirror.y1}
              x2={topMirror.x2}
              y2={topMirror.y2}
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1={bottomMirror.x1}
              y1={bottomMirror.y1}
              x2={bottomMirror.x2}
              y2={bottomMirror.y2}
              stroke="black"
              strokeWidth="2"
            />

            {/* Draw light beam */}
            <polyline
              points={lightBeamPoints.map((p) => `${p.x},${p.y}`).join(" ")}
              stroke="yellow"
              strokeWidth="2"
              fill="none"
            />

            {/* Entry and exit points */}
            <circle cx="200" cy="20" r="5" fill="yellow" />
            <circle cx="200" cy="380" r="5" fill="yellow" />
          </svg>

          <div className="my-4">
            <p>Ángulo de los espejos: {mirrorAngle} grados</p>
            <Slider
              defaultValue={[mirrorAngle]}
              value={[mirrorAngle]}
              min={30}
              max={60}
              step={1}
              onValueChange={(value) => setMirrorAngle(value[0])}
            />
          </div>
        </div>

        {/* Right side: Image representing the view */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <h2 className="mb-4 text-xl font-bold">
            Vista a través del Periscopio
          </h2>
          <div className="relative mx-auto h-80 w-80 rounded-[50%] border border-solid border-black">
            <ExportedImage src={field} alt="paisaje" fill />
            {/* overlay mask */}
            <div
              className="absolute left-0 top-0 h-full w-full"
              style={{
                background: `radial-gradient(circle at 50% 50%, transparent 0%, black ${fieldOfViewPercent}%)`,
              }}
            />
          </div>
          <p className="mt-4 text-center">
            Campo de visión: {fieldOfView.toFixed(1)} grados
          </p>
        </div>
      </div>

      <Separator orientation="horizontal" className="my-4" />

      <div>
        <h2 className="text-xl font-bold">Datos Calculados:</h2>
        <div className="flex flex-wrap gap-4">
          <Katex
            tex={`\\text{Ángulo de los espejos} = ${mirrorAngle}^\\circ`}
          />
          <Katex
            tex={`\\text{Ángulo en radianes} = ${mirrorAngleRadians.toFixed(
              2,
            )}\\text{ rad}`}
          />
          <Katex
            tex={`\\text{Campo de visión} = ${fieldOfView.toFixed(1)}^\\circ`}
          />
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Katex from "@/components/katex";
// import { Separator } from "@/components/ui/separator";
// import { Slider } from "@/components/ui/slider";
// import {
//   Environment,
//   OrbitControls,
//   PerspectiveCamera,
//   useEnvironment,
//   useTexture,
// } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { forwardRef, useRef, useState } from "react";
// import { RepeatWrapping, PerspectiveCamera as TPerspectiveCamera } from "three";

// function Scene() {
//   // Load a texture for the ground or environment
//   const groundTexture = useTexture("/textures/ground.png"); // Replace with your texture path
//   const envMap = useEnvironment({ path: "/map" });
//   groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
//   groundTexture.repeat.set(10, 10);

//   return (
//     <>
//       <Environment map={envMap} background />
//       {/* Lighting */}
//       <ambientLight intensity={1} />
//       <directionalLight position={[5, 10, 7.5]} intensity={1} />
//     </>
//   );
// }

// const PeriscopeCamera = forwardRef<TPerspectiveCamera, TPerspectiveCamera>(
//   function (props, ref) {
//     const set = useThree((state) => state.set);
//     useFrame(() => {
//       if (ref && "current" in ref && ref.current) {
//         ref.current.updateProjectionMatrix();
//       }
//     });
//     return (
//       <PerspectiveCamera
//         ref={ref}
//         {...props}
//         makeDefault
//         fov={props.fov}
//         position={[0, 1.6, 0]} // Approximate eye level
//         near={0.1}
//         far={1000}
//       />
//     );
//   },
// );

// function calculateMirrorPoints(
//   cx: number,
//   cy: number,
//   length: number,
//   angle: number,
// ) {
//   const x1 = cx - (length / 2) * Math.cos(angle);
//   const y1 = cy - (length / 2) * Math.sin(angle);
//   const x2 = cx + (length / 2) * Math.cos(angle);
//   const y2 = cy + (length / 2) * Math.sin(angle);
//   return { x1, y1, x2, y2 };
// }

// export default function PeriscopeSimulation() {
//   const [mirrorAngle, setMirrorAngle] = useState(45); // degrees
//   const mirrorAngleRadians = (mirrorAngle * Math.PI) / 180;
//   const topMirror = calculateMirrorPoints(200, 100, 80, mirrorAngleRadians);
//   const bottomMirror = calculateMirrorPoints(200, 300, 80, -mirrorAngleRadians);
//   const lightBeamPoints = [
//     { x: 200, y: 20 }, // Entry point
//     { x: 200, y: topMirror.y1 }, // To top mirror
//     { x: topMirror.x2, y: topMirror.y2 }, // After top mirror
//     { x: bottomMirror.x1, y: bottomMirror.y1 }, // To bottom mirror
//     { x: 200, y: 380 }, // Exit point
//   ];

//   // Function to calculate field of view based on mirror angle
//   function calculateFieldOfView(angle: number) {
//     // Assuming the field of view is inversely proportional to the mirror angle
//     const minFOV = 20; // degrees
//     const maxFOV = 60; // degrees
//     const fov = ((60 - angle) / 30) * (maxFOV - minFOV) + minFOV;
//     return fov;
//   }

//   const fieldOfView = calculateFieldOfView(mirrorAngle); // degrees
//   const camera = useRef<TPerspectiveCamera>(null!);

//   return (
//     <div className="m-4 pb-10">
//       <h1 className="mb-4 text-2xl font-bold">Simulación de un Periscopio</h1>
//       <div className="flex flex-col md:flex-row">
//         {/* Left side: Periscope diagram */}
//         <div className="md:w-1/2">
//           {/* Existing SVG diagram or any other periscope representation */}
//           {/* ... (You can keep your existing periscope diagram here) */}
//           <svg width="400" height="400" style={{ border: "1px solid black" }}>
//             {/* Draw periscope body */}
//             <rect x="150" y="100" width="100" height="200" fill="grey" />

//             {/* Draw mirrors */}
//             <line
//               x1={topMirror.x1}
//               y1={topMirror.y1}
//               x2={topMirror.x2}
//               y2={topMirror.y2}
//               stroke="black"
//               strokeWidth="2"
//             />
//             <line
//               x1={bottomMirror.x1}
//               y1={bottomMirror.y1}
//               x2={bottomMirror.x2}
//               y2={bottomMirror.y2}
//               stroke="black"
//               strokeWidth="2"
//             />

//             {/* Draw light beam */}
//             <polyline
//               points={lightBeamPoints.map((p) => `${p.x},${p.y}`).join(" ")}
//               stroke="yellow"
//               strokeWidth="2"
//               fill="none"
//             />

//             {/* Entry and exit points */}
//             <circle cx="200" cy="20" r="5" fill="yellow" />
//             <circle cx="200" cy="380" r="5" fill="yellow" />
//           </svg>

//           {/* Controls */}
//           <div className="my-4">
//             <p>Ángulo de los espejos: {mirrorAngle} grados</p>
//             <Slider
//               defaultValue={[mirrorAngle]}
//               value={[mirrorAngle]}
//               min={30}
//               max={60}
//               step={1}
//               onValueChange={(value) => setMirrorAngle(value[0])}
//             />
//           </div>
//         </div>

//         {/* Right side: 3D View */}
//         <div className="mt-8 h-80 md:mt-0 md:w-1/2 md:pl-8">
//           <h2 className="mb-4 text-xl font-bold">
//             Vista a través del Periscopio
//           </h2>
//           <div className="h-full w-full rounded-full">
//             <Canvas>
//               <PeriscopeCamera ref={camera} fov={fieldOfView} />
//               <OrbitControls />
//               <Scene />
//             </Canvas>
//           </div>
//           <p className="mt-4 text-center">
//             Campo de visión: {fieldOfView.toFixed(1)} grados
//           </p>
//         </div>
//       </div>

//       <Separator orientation="horizontal" className="my-4" />

//       <div>
//         <h2 className="text-xl font-bold">Datos Calculados:</h2>
//         <div className="flex flex-wrap gap-4">
//           <Katex
//             math={`\\text{Ángulo de los espejos} = ${mirrorAngle}^\\circ`}
//           />
//           <Katex
//             math={`\\text{Ángulo en radianes} = ${mirrorAngleRadians.toFixed(2)}\\text{ rad}`}
//           />
//           <Katex
//             math={`\\text{Campo de visión} = ${fieldOfView.toFixed(1)}^\\circ`}
//           />
//         </div>
//         {camera.current && (
//           <p>{camera.current.position.toArray().toString()}</p>
//         )}
//       </div>
//     </div>
//   );
// }
