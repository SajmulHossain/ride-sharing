import type { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const GoToLocation = ({ location }: { location: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo(location, 15, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [location, map]);

  return null;
};

export default GoToLocation;