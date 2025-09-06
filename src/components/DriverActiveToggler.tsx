import { useId } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useGetActiveStatusQuery } from "@/redux/features/driver/driver.api";

export default function ActiveToggler() {
  const id = useId();
  const {data} = useGetActiveStatusQuery(undefined);
  const handleActiveStatus = () => {
    
  }

  return (
    <div className="inline-flex items-center gap-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {data.data ? "ACTIVE" : "INACTIVE"}
      </Label>
      <Switch
        id={id}
        // checked={data.data}
        onCheckedChange={handleActiveStatus}
        aria-label="Toggle switch"
      />
    </div>
  );
}
