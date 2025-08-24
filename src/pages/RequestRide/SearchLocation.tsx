/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { searchLocation } from "@/utils/searchLocation";
import { LocationEditIcon } from "lucide-react";
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
  const [results, setResults] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleFocus = () => {
    setOpen(true);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      if (query.length > 3) {
        const places = await searchLocation(query);
        console.log(places);
        setResults(places);
      } else {
        setResults([]);
      }
    };

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
    setResults([]);
    onSelect({
      place: place.display_name,
      lat: parseFloat(place.lat),
      lng: parseFloat(place.lon),
    });
  };

  return (
    <div>
      <label className="block font-semibold mb-1">{label}</label>
      <Input
        type="text"
        placeholder={`Search ${label}`}
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent align="start" side="bottom">
            <div className="w-full">
              {label === "Pickup" && (
                <Button className="mb-2 w-full" onClick={getCurrentLocation}>
                  Current Location
                </Button>
              )}
              <ul className="space-y-2 max-h-40 overflow-y-auto">
                {results?.map((place, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectLocation(place)}
                  >
                    <Alert variant="default">
                      <LocationEditIcon />
                      <AlertTitle>{place.display_place}</AlertTitle>
                      <AlertDescription className="line-clamp-1">
                        {place.display_name}
                      </AlertDescription>
                    </Alert>
                  </li>
                ))}
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SearchLocation;
