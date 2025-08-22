import Heading from "@/components/Heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { teamMembers } from "@/constant/teams";

const OurTeam = () => {
  return (
    <section className="section">
      <Heading heading="Our Team" description="Meet our honorable team members" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {teamMembers.map(({ id, name, photo, role }) => (
          <Card key={id} className="grid place-items-center">
            <CardContent className="space-y-2">
              <div>
                <img
                  src={photo}
                  alt={`photo of ${name}`}
                  className="object-cover size-40 rounded-full"
                />
              </div>
              <div className="text-center">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{role}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
