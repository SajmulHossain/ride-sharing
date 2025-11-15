export interface IRideVolume {
  date: string;
  totalRides: number;
}

export interface IRevenueTrend {
  date: string;
  revenue: number;
  rides: number;
}

export interface IDriverActivity {
  driverId: string;
  totalRides: number;
  totalEarnings: number;
  lastRide: Date | string;
}

export interface IAdminAnalytics {
  rideVolume: IRideVolume[];
  revenueTrend: IRevenueTrend[];
  driverActivity: IDriverActivity[];
}
