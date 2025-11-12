import Heading from "@/components/common/Heading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { GlobeIcon, GroupIcon, LucideCloudLightning, ShieldCheckIcon } from "lucide-react";
import type { ComponentType } from "react";

const highlights : {
    title: string;
    description: string;
    icon: ComponentType
}[] = [
    {
      title: 'Safe Journeys',
      description: 'Ensure every ride is secure with real-time tracking, SOS buttons, and emergency contact support.',
      icon: ShieldCheckIcon,
    },
    {
      title: 'Seamless Booking',
      description: 'Book rides in seconds with instant fare estimates and intuitive navigation for all users.',
      icon: LucideCloudLightning,
    },
    {
      title: 'Empowering Drivers',
      description: 'Provide flexible schedules and clear earnings insights to help drivers thrive.',
      icon: GroupIcon,
    },
    {
      title: 'Community Impact',
      description: 'Foster sustainable mobility by connecting communities and reducing urban congestion.',
      icon: GlobeIcon,
    },
  ];

const Mission = () => {
  return (
    <section className="section">
      <Heading heading="Our Mission" />
      <Card>
        <CardContent>
          <CardDescription>
            At RideEasy, we’re dedicated to revolutionizing urban mobility by
            connecting people with safe, convenient, and empowering
            transportation. Our mission is to make every journey seamless,
            secure, and rewarding for riders, drivers, and communities.
          </CardDescription>

          <div className="space-y-2 mt-4">
            {highlights.map(({ description, title, ...data }, index) => (
              <Alert key={index} variant="default">
                <data.icon />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Mission;
