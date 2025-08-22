import { CarIcon, ChartBarIcon, CheckCircleIcon, CogIcon, CreditCardIcon, GlobeIcon, GroupIcon, MapPinIcon, ShieldCheckIcon } from "lucide-react";

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export const rider: HowItWorksStep[] = [
  {
    title: "Request a Ride",
    description:
      "Open the app, input your pickup and destination addresses, select Economy, Premium, or Shared ride, and confirm with an instant fare estimate.",
    icon: MapPinIcon,
  },
  {
    title: "Track Your Ride Live",
    description:
      "Monitor your driver’s real-time location on a map, view their name and vehicle details, and access the SOS button for safety during your journey.",
    icon: GlobeIcon,
  },
  {
    title: "Pay and Review",
    description:
      "Pay securely with card, mobile payment, or cash after your ride. Rate your driver and provide feedback to enhance the platform experience.",
    icon: CreditCardIcon,
  },
];


export const driver: HowItWorksStep[] = [
  {
    title: "Go Online",
    description:
      'Toggle your status to "Online" to receive ride requests. Switch to "Offline" anytime to pause without losing access to your dashboard.',
    icon: CheckCircleIcon,
  },
  {
    title: "Accept Requests",
    description:
      "Get notified of nearby ride requests with pickup and destination details. Accept or reject based on your availability and navigate using GPS.",
    icon: CarIcon,
  },
  {
    title: "Track Earnings",
    description:
      "Update ride statuses and view your earnings through daily, weekly, or monthly charts in your dashboard for clear financial insights.",
    icon: ChartBarIcon,
  },
];


export const admin: HowItWorksStep[] = [
  {
    title: "Manage Accounts",
    description:
      "Search and filter rider and driver profiles. Approve new drivers, block or unblock users, and maintain platform safety from your dashboard.",
    icon: GroupIcon,
  },
  {
    title: "Oversee Rides",
    description:
      "Monitor all rides with filters for date, status, or user. Resolve issues and ensure smooth operations across the platform.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Analyze Data",
    description:
      "Use visualizations to track ride volume, revenue trends, and driver performance, enabling data-driven decisions to optimize the platform.",
    icon: CogIcon,
  },
];


export const workSteps: {
    label: string;
    value: string;
    steps: HowItWorksStep[]
}[] = [
  {
    label: "Driver",
    value: "driver",
    steps: driver,
  },
  {
    label: "Rider",
    value: "rider",
    steps: rider
  },
  {
    label: "Admin",
    value: "admin",
    steps: admin
  }
];
