import Heading from "@/components/Heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { workSteps } from "@/constant/howItWork";

const HowItsWork = () => {
  return (
    <section className="section">
      <Heading heading="How it's work" description="Describe about how to use" />
      <Tabs defaultValue="rider" className="w-full">
        <TabsList className="mx-auto">
          {workSteps.map((step) => (
            <TabsTrigger key={step.value} value={step.value}>
              {step.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {workSteps.map((step) => (
          <TabsContent key={step.value} className="space-y-4" value={step.value}>
            {step.steps.map((value, index) => (
              <div key={index}>
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
