import Mission from "./Mission";
import Heading from "@/components/common/Heading";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import OurTeam from "./OurTeam";

const highlights: { text: string }[] = [
  { text: "Founded in 2020 in Dhaka, Bangladesh." },
  { text: "Expanded to 10+ cities across South Asia by 2025." },
  { text: "Over 1 million rides completed with a 98% satisfaction rate." },
  { text: "Awarded “Best Mobility Startup” in 2023." },
];


const About = () => {
  return (
    <>
      <section className="section">
        <Heading heading="About Us" />
        <Card>
          <CardContent>
            <CardDescription>
              Go together was founded in 2020 in Dhaka, Bangladesh, with a
              vision to transform urban mobility. Starting as a small team
              passionate about connecting people with reliable transportation,
              we’ve grown into a leading ride booking platform across South
              Asia. Our commitment to safety, convenience, and innovation has
              empowered millions of rides, supporting both riders and drivers
              with cutting-edge technology and exceptional service.
            </CardDescription>

            <div className="space-y-2 mt-4">
              {highlights.map(({ text }, index) => (
                <Alert key={index} variant="default">
                  <CheckCircle />
                  <AlertTitle>{text}</AlertTitle>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      <Mission />
      <OurTeam />
    </>
  );
};

export default About;