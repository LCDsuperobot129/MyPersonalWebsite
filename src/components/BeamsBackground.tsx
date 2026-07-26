"use client";

import dynamic from "next/dynamic";

const Beams = dynamic(() => import("./Beams"), { ssr: false });

export default function BeamsBackground() {
  return (
    <div className="absolute inset-0 -z-[5]" style={{ pointerEvents: "none" }}>
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffaaaa"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
      />
    </div>
  );
}
