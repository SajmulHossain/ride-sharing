import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Lock } from "lucide-react";
import Contact from "./Contact/Contact";

const Disabled = () => {
  return (
    <section className="section">
      <Card>
        <CardContent className="grid place-items-center">
          <Lock size={200} />
          <h2 className="text-2xl font-bold mt-4">Your account is disabled</h2>
          <CardDescription>
            Please contact with admin if you have any query
          </CardDescription>
          <Contact />
        </CardContent>
      </Card>
    </section>
  );
};

export default Disabled;
