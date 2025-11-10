import { rideStatus } from "@/constant/rideStatus";
import type { IUser } from "./user.type";

type RideStatus = keyof typeof rideStatus;

export interface IRideStatus {
  timestamps?: Date;
  state: RideStatus;
  createdAt?: Date;
}

export interface IDestination {
  place_name: string;
  coordinate: number[];
}

export interface IRide {
  _id?: string;
  rider: string;
  driver: string;
  pickup: IDestination;
  destination: IDestination;
  status: IRideStatus[];
  amount: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export type IRideWithUser = Omit<IRide, 'rider'> & { rider: IUser }