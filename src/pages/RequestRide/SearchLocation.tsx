/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { searchLocation } from "@/utils/searchLocation";
import { LocationEditIcon } from "lucide-react";
import { useState } from "react";

const SearchLocation = ({
  label,
  onSelect,
}: {
  label: string;
  onSelect: (loc: any) => void;
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      const places = await searchLocation(value);
      setResults(places);
    } else {
      setResults([]);
    }
  }

  return (
    <div className="relative">
      <label className="block font-semibold mb-1">{label}</label>
      <Input
        type="text"
        placeholder={`Search ${label}`}
        value={query}
        onChange={handleChange}
      />
      {results.length > 0 && (
        <ul className="absolute shadow-md w-full border rounded mt-1 max-h-40 overflow-y-auto z-10">
          {results.map((place, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer"
              onClick={() => {
                setQuery(place.display_name);
                setResults([]);
                onSelect({
                  place: place.display_name,
                  lat: parseFloat(place.lat),
                  lng: parseFloat(place.lon),
                });
              }}
            >
              <Alert variant="default">
                <LocationEditIcon />
                <AlertTitle>{place.display_place}</AlertTitle>
                <AlertDescription>
                 {place.display_name}
                </AlertDescription>
              </Alert>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchLocation;