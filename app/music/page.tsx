import { Metadata } from "next";
import { Suspense } from "react";
import { TopTracks, RecentlyPlayed } from "@/components/MusicGrid";

export const metadata: Metadata = {
  title: "Music | Araon",
  description: "A glimpse into my musical world and preferences.",
};

export default function MusicPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Spotify Section */}
      <div className="space-y-16">
        {/* Top Tracks */}
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <h2 className="mb-8 text-3xl font-semibold">Current Favorites</h2>
          <Suspense fallback={null}>
            <TopTracks />
          </Suspense>
        </div>

        {/* Recent Plays */}
        <div
          className="animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2 className="mb-8 text-3xl font-semibold">Recently Played</h2>
          <Suspense fallback={null}>
            <RecentlyPlayed />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
