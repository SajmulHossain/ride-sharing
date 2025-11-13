import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { IEarning } from "@/types";
import { format } from 'date-fns';
import { DollarSignIcon, HistoryIcon } from "lucide-react";

const Earn = ({earn} : {earn: IEarning}) => {
    const { amount, at, from, to } = earn || {};
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
            <p className="flex gap-1 items-center"><DollarSignIcon size={18} />: {amount}</p>
          <p className="flex gap-1 items-center">
            <HistoryIcon size={18} />
            <CardDescription>
              {format(new Date(at || new Date()), "dd MMM yyy")}
            </CardDescription>
          </p>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between gap-4">
          <Card className="w-full">
            <CardContent>
              <CardTitle>From</CardTitle>
              <CardDescription>{from?.place_name}</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <CardTitle>To</CardTitle>
              <CardDescription>{to?.place_name}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default Earn;