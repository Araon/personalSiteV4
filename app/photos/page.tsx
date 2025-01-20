import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Photographs | Araon",
  description: "Some photos I took",
};

export default function Photos() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Photos I took 📷
        </h1>
        <div>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            well, at least I tried
          </p>
        </div>
      </div>

      <div className="animate-in" style={{ "--index": 2 } as React.CSSProperties}>
        <Gallery />
      </div>
      
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
      </div>
    </div>
  );
}