export interface IEarning {
  amount: number;
  from: {
    place_name: string,
    coordinate: number[]
  };
  to: {
    place_name: string,
    coordinate: number[]
  };
  at: Date;
}
