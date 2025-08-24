import type { TRole } from "@/types";

export const userRole: {
  driver: TRole;
  rider: TRole;
  admin: TRole;
} = {
  driver: "driver",
  rider: "rider",
  admin: "admin",
} as const;
