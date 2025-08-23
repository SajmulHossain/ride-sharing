export const getRoutes = async (pickup: [number, number], destination: [number, number]) => {
  const url = `https://router.project-osrm.org/route/v1/driving/${pickup[1]},${pickup[0]};${destination[1]},${destination[0]}?overview=full&geometries=geojson`;
  const res = await fetch(url);
  const data = await res.json();
  return data.routes?.[0]?.geometry?.coordinates || [];
};
