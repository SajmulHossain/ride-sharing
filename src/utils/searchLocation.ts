import { envVars } from "@/config/env.config";

export const searchLocation = async (location: string) => {
  if (!location) return [];
  const url = `https://us1.locationiq.com/v1/autocomplete?key=${
    envVars.locationAPI
  }&q=${encodeURIComponent(location)}&limit=5&countrycodes=bd`;
  const res = await fetch(url);
  return await res.json();
};
