import { getTopTracks } from '@/lib/spotify'
import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  try {
    const tracks = await getTopTracks()
    return NextResponse.json(tracks)
  } catch (error) {
    console.error('Error fetching top tracks:', error)
    return NextResponse.json({ error: 'Failed to fetch top tracks' }, { status: 500 })
  }
}
