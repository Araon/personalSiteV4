"use client";

import { ReactNode } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Image from "next/image";
import { motion } from "framer-motion";

type Track = {
  title: string;
  artist: string;
  url: string;
  coverImage: string;
  playedAt?: string;
};

function TrackItem({ track, index }: { track: Track; index: number }) {
  // Create varying sizes
  const sizeClass = index % 5 === 0 ? 'h-96' : // Large items
                  index % 3 === 0 ? 'h-72' : // Medium items
                  'h-48'; // Regular items
  
  return (
    <motion.a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block mb-4 w-full relative overflow-hidden rounded-xl bg-muted/50 transition-all ${sizeClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src={track.coverImage}
        alt={track.title}
        fill
        className="object-cover transition-all hover:brightness-90"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
    </motion.a>
  );
}

function LoadingSkeleton() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-5 2xl:columns-6 gap-4">
      {[...Array(8)].map((_, i) => {
        const sizeClass = i % 5 === 0 ? 'h-96' : // Large items
                        i % 3 === 0 ? 'h-72' : // Medium items
                        'h-48'; // Regular items
        
        return (
          <motion.div 
            key={i} 
            className={`block mb-4 w-full rounded-xl bg-muted/50 ${sizeClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        );
      })}
    </div>
  );
}

export function TopTracks() {
  const { data: tracks, error } = useSWR<Track[]>(
    "/api/spotify/top-tracks",
    fetcher
  );

  if (error) return <div>Failed to load top tracks</div>;
  if (!tracks) return <LoadingSkeleton />;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-5 2xl:columns-6 gap-4">
      {tracks.map((track, i) => (
        <TrackItem key={i} track={track} index={i} />
      ))}
    </div>
  );
}

export function RecentlyPlayed() {
  const { data: tracks, error } = useSWR<Track[]>(
    "/api/spotify/recently-played",
    fetcher
  );

  if (error) return <div>Failed to load recently played tracks</div>;
  if (!tracks) return <LoadingSkeleton />;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-5 2xl:columns-6 gap-4">
      {tracks.map((track, i) => (
        <TrackItem key={i} track={track} index={i} />
      ))}
    </div>
  );
}
