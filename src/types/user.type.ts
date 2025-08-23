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
  role: string;
  isBlocked?: boolean;

  driverApprovalStatus: string;
  isDriverActive: boolean;
  vehicleInfo: IVehice;

  createdAt?: Date;
  updatedAt?: Date;
}
