/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getLocationByCoords } from "@/utils/getLocByCoords";
import { searchLocation } from "@/utils/searchLocation";
import { CrossIcon, LoaderPinwheelIcon, LocationEditIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IProps {
  label: string;
  onSelect: React.Dispatch<any>;
  setCurrentLocation?: React.Dispatch<
    React.SetStateAction<number[] | undefined>
  >;
}

const SearchLocation = ({ label, onSelect, setCurrentLocation }: IProps) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (query.length > 3) {
        const places = await searchLocation(query);
        setLocations(places);
      } else {
        setLocations([]);
      }

      setLoading(false);
    };

    setLoading(true);
    const timeoutid = setTimeout(() => {
      fetchLocation();
    }, 2500);

    return () => clearTimeout(timeoutid);
  }, [query]);

  const getCurrentLocation =  () => {
    navigator.geolocation.getCurrentPosition(
    async  (location) => {
        const lat = location?.coords?.latitude
        const lng = location?.coords?.longitude;
        setCurrentLocation!([
          lat,
          lng
        ]);

        onSelect({
          lat, lng
        });

        const res = await getLocationByCoords(lat, lng);
        setQuery(res.display_name);
      },
      (error) => {
        setCurrentLocation!([]);
        toast.error(
          error.PERMISSION_DENIED
            ? "Give permission to access your location"
            : "Can't get location. Try again"
        );
      }
    );
  };

  const handleSelectLocation = (place: any) => {
    setQuery(place.display_name);
    setLocations([]);
    onSelect({
      place: place.display_name,
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
    });
  };

  return (
    <div
      className="relative"
      onFocus={() => setOpen(true)}
    >
      <label className="block font-semibold mb-1">{label}</label>
      <Input
        type="text"
        placeholder={`${label}`}
        value={query}
        onChange={handleChange}
      />
      <Card
        className={cn(
          "w-full absolute top-[120%] bg-background",
          open
            ? "opacity-100 pointer-events-auto z-50"
            : "opacity-0 pointer-events-none"
        )}
      >
        <CardContent className="relative">
          {label === "Pickup" && (
            <Button className="mb-2 w-full mt-12" onClick={getCurrentLocation}>
              Current Location
            </Button>
          )}
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {loading ? (
              <li className="grid place-items-center h-10">
                <LoaderPinwheelIcon className="animate-spin" />
              </li>
            ) : !locations?.length ? (
              <li>
                <CardDescription className="text-center">
                  Not found location
                </CardDescription>
              </li>
            ) : (
              locations?.map((place, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectLocation(place)}
                  className="cursor-pointer"
                >
                  <Alert variant="default">
                    <LocationEditIcon />
                    <AlertTitle>{place.display_place}</AlertTitle>
                    <AlertDescription className="line-clamp-1">
                      {place.display_name}
                    </AlertDescription>
                  </Alert>
                </li>
              ))
            )}
          </ul>
          <Button onClick={() => setOpen(false)} variant={"destructive"} className="absolute -top-4 right-2"> <CrossIcon className="rotate-45" /> </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchLocation;
