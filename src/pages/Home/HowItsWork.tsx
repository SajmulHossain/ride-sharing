import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { workSteps } from "@/constant/howItWork";

const HowItsWork = () => {
  return (
    <section className="section">
      <Tabs defaultValue="rider" className="w-full">
        <TabsList>
          {workSteps.map((step) => (
            <TabsTrigger key={step.value} value={step.value}>
              {step.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {workSteps.map((step) => (
          <TabsContent key={step.value} className="space-y-4" value={step.value}>
            {step.steps.map((value) => (
              <div>
                <div>
                  <h2 className="font-semibold text-lg">{value.title}</h2>
                  {/* {<icon />} */}
                </div>
                <p className="border rounded-md p-3 mt-2">{value.description}</p>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default HowItsWork;
