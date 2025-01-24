import { getRecentlyPlayed } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const revalidate = 60; // Revalidate every minute

export async function GET() {
  try {
    const tracks = await getRecentlyPlayed();
    return NextResponse.json(tracks);
  } catch (error) {
    console.error("Error fetching recently played:", error);
    return NextResponse.json(
      { error: "Failed to fetch recently played tracks" },
      { status: 500 },
    );
  }
}
