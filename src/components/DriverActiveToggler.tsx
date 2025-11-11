import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  useGetActiveStatusQuery,
  useToggleStatusMutation
} from "@/redux/features/driver/driver.api";
import { sendResponse } from "@/utils/sendResponse";
import { useEffect, useId, useState } from "react";

export default function ActiveToggler({ refetch,...props }: {refetch: () => void}) {
  const id = useId();
  const [checked, setChecked] = useState(false);
  const { data } = useGetActiveStatusQuery(undefined);
  const [toggleStatus] = useToggleStatusMutation();

  const handleActiveStatus = async () => {
    setChecked((val) => !val);
    try {
      sendResponse(() => toggleStatus(undefined), "Status Update");
      refetch();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setChecked(!checked);
    }
  };

  useEffect(() => {
    setChecked(data || false);
  }, [data]);

  return (
    <div {...props} className="inline-flex items-center gap-2">
      <Label
        htmlFor={id}
        className={`text-sm font-medium flex items-center ${
          checked ? "text-green-600" : "text-red-600"
        }`}
      >
        ACTIVE{" "}
        <span
          className={`size-2 rounded-full ${
            checked ? "bg-green-600" : "bg-red-600"
          }`}
        ></span>
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
