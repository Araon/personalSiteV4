const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

console.log("Spotify Config:", {
  hasClientId: !!client_id,
  hasClientSecret: !!client_secret,
  hasRefreshToken: !!refresh_token
});

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played";

const getAccessToken = async () => {
  console.log("Getting access token...");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token!,
    }),
  });

  const data = await response.json();
  console.log("Access token response status:", response.status);
  if (!response.ok) {
    console.error("Failed to get access token:", data);
    throw new Error("Failed to get access token");
  }
  return data;
};

export const getTopTracks = async () => {
  console.log("Getting top tracks...");
  const { access_token } = await getAccessToken();

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track: any) => ({
    title: track.name,
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImage: track.album.images[0].url,
  }));

  return tracks;
};

export const getRecentlyPlayed = async () => {
  console.log("Getting recently played...");
  const { access_token } = await getAccessToken();

  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((item: any) => ({
    title: item.track.name,
    artist: item.track.artists.map((_artist: any) => _artist.name).join(", "),
    url: item.track.external_urls.spotify,
    coverImage: item.track.album.images[0].url,
    playedAt: item.played_at,
  }));

  return tracks;
};
