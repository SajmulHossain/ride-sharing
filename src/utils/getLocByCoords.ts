import { envVars } from "@/config/env.config";

export const getLocationByCoords = async (lat: number, lng: number) => {
  const res =
    await fetch(`https://us1.locationiq.com/v1/reverse?key=${envVars.locationAPI}&lat=${lat}&lon=${lng}&format=json
`);
  const result = await res.json();
  return result;
};
