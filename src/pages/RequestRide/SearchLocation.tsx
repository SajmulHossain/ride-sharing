/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { LoaderPinwheelIcon, LocationEditIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const dropdownRef = useRef(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // if (value.length > 2) {
    //   setOpen(true);
    // }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (query.length > 3) {
        // const places = await searchLocation(query);
        // setLocations(places);
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

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setCurrentLocation!([
          location?.coords?.latitude,
          location?.coords?.longitude,
        ]);

        onSelect({
          lat: location?.coords?.latitude,
          lng: location?.coords?.longitude,
        });
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
    <div className="relative" ref={dropdownRef}>
      <label className="block font-semibold mb-1">{label}</label>
      <Input
        type="text"
        placeholder={`Search ${label}`}
        value={query}
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />
      <Card
        className={cn(
          "w-full absolute top-[120%] bg-background",
          open
            ? "opacity-100 pointer-events-auto z-50"
            : "opacity-0 pointer-events-none"
        )}
      >
        <CardContent>
          {label === "Pickup" && (
            <Button className="mb-2 w-full" onClick={getCurrentLocation}>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchLocation;
