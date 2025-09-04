/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { getDistance } from "@/utils/getDistance";
import { getRoutes } from "@/utils/getRoute";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import GoToLocation from "./GoToLocation";
import SearchLocation from "./SearchLocation";
import { useRequestRideMutation } from "@/redux/features/ride/ride.api";
import { sendResponse } from "@/utils/sendResponse";
import { useNavigate } from "react-router";

const RequestRide = () => {
  const [requestRide, { isLoading }] = useRequestRideMutation();
  const navigate = useNavigate();

  const [currentLocation, setCurrentLocation] = useState<number[] | undefined>(
    undefined
  );
  const [pickup, setPickup] = useState<any>(null);
  const [destination, setDestination] = useState<any>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [amount, setAmount] = useState(0);
  const [distance, setDistance] = useState(0);

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
      const { amount, distance } = getDistance([
        pickup?.lat,
        pickup?.lng,
        destination?.lat,
        destination?.lng,
      ]);
      setAmount(amount);
      setDistance(distance);
    }
  }, [pickup, destination]);

  const handleRequest = async () => {
    const data = {
      pickup: {
        place_name: pickup.place,
        coordinate: [pickup.lat, pickup.lng],
      },
      destination: {
        place_name: destination.place,
        coordinate: [destination.lat, destination.lng],
      },
    };
    await sendResponse(
      () => requestRide(data),
      "Ride Request",
      () => navigate("/ride")
    );
  };

  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row gap-12">
        {pickup && destination && (
          <Alert className="w-fit">
            <AlertDescription className="flex gap-4">
              <p>Distance: {distance}m</p>
              <SidebarSeparator orientation="vertical" />
              <p>Amount: {amount} BDT</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-6 flex-1">
          <SearchLocation
            setCurrentLocation={setCurrentLocation}
            label="Pickup"
            onSelect={setPickup}
          />
          <SearchLocation label="Destination" onSelect={setDestination} />
          <Button
            disabled={isLoading || !(pickup && destination)}
            onClick={handleRequest}
            type="button"
            className="w-full"
          >
            Request Ride
          </Button>
        </div>

        <div className="flex-1 z-0">
          <MapContainer
            center={(currentLocation as LatLngExpression) || [23.8103, 90.4125]}
            zoom={12}
            className="mt-6 h-[400px]"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {pickup && (
              <>
                <Marker position={[pickup.lat, pickup.lng]}>
                  <Popup>Pickup: {pickup.place}</Popup>
                </Marker>
                <GoToLocation location={pickup} />
              </>
            )}
            {destination && (
              <>
                <Marker position={[destination.lat, destination.lng]}>
                  <Popup>Destination: {destination.place}</Popup>
                </Marker>
                <GoToLocation location={destination} />
              </>
            )}

            {route.length > 0 && <Polyline positions={route} />}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequestRide;
