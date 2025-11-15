import type { TRole } from "./role.type";

interface IVehice {
  model: string;
  registration_no: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phone: string;
  role: TRole;
  isBlocked?: boolean;
  emergencyContact?: string;

  driverApprovalStatus: string;
  isDriverActive: boolean;
  vehicleInfo: IVehice;

  createdAt?: Date;
  updatedAt?: Date;
}
