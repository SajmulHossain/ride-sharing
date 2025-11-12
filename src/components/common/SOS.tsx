import { CircleAlertIcon } from "lucide-react";
import { Button } from "../ui/button";

const SOS = () => {
  return (
    <Button title="Emergency" variant={"destructive"} className="fixed bottom-4 right-6">
      <CircleAlertIcon />
    </Button>
  );
};

export default SOS;