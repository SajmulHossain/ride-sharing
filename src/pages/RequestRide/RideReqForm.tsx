/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import SearchLocation from "./SearchLocation";
import { getRoutes } from "@/utils/getRoute";

const RequestRide = () => {
  const [pickup, setPickup] = useState<any>(null);
  const [destination, setDestination] = useState<any>(null);
  const [route, setRoute] = useState<[number, number][]>([]);

  useEffect(() => {
    const route = async () => {
      const coords = await getRoutes(
        [pickup.lat, pickup.lng],
        [destination.lat, destination.lng]
      );
      if (coords.length) {
        setRoute(coords.map((c: [number, number]) => [c[1], c[0]]));
      }
    };
    if (pickup && destination) {
      route();
    }
  }, [pickup, destination]);

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent>
        <div className="space-y-6">
          <SearchLocation label="Pickup" onSelect={setPickup} />
          <SearchLocation label="Destination" onSelect={setDestination} />
          <Button type="button" className="w-full">
            Request Ride
          </Button>
        </div>

        <MapContainer
          center={[23.8103, 90.4125]}
          zoom={12}
          className="mt-6 h-[400px]"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {pickup && (
            <Marker position={[pickup.lat, pickup.lng]}>
              <Popup>Pickup: {pickup.place}</Popup>
            </Marker>
          )}
          {destination && (
            <Marker position={[destination.lat, destination.lng]}>
              <Popup>Destination: {destination.place}</Popup>
            </Marker>
          )}

          {route.length > 0 && <Polyline positions={route} />}
        </MapContainer>
      </CardContent>
    </Card>
  );
};

export default RequestRide;
