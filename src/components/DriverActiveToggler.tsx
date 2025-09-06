import { useEffect, useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useGetActiveStatusQuery, useToggleStatusMutation } from "@/redux/features/driver/driver.api";

export default function ActiveToggler() {
  const id = useId();
  const [checked, setChecked] = useState(false);
  const { data } = useGetActiveStatusQuery(undefined);
  const [toggleStatus] = useToggleStatusMutation();
  const handleActiveStatus = async () => {
    setChecked(val => !val);
    try {
      await toggleStatus(undefined).unwrap();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err :unknown) {
      setChecked(!checked);
    }
  }

  useEffect(() => {
    setChecked(data || false);
  },[data])


  return (
    <div className="inline-flex items-center gap-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {checked ? "ACTIVE" : "INACTIVE"}
      </Label>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={handleActiveStatus}
        aria-label="Toggle switch"
      />
    </div>
  );
}
