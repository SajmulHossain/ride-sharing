import { envVars } from "@/config/env.config";

export async function getCoordinates(query: string) {
  const url = `https://us1.locationiq.com/v1/search?key=${envVars.locationAPI}&q=${encodeURIComponent(
    query
  )}&format=json&limit=1`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon),
      place: data[0].display_name,
    };
  }

  return null;
}
