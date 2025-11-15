"use client";

import { User } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IDriverActivity } from "@/types";

export function DriverActivityChart({ data }: { data: IDriverActivity[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Driver Activity</CardTitle>
        <CardDescription>Rides & earnings per driver</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="driverId" tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              dataKey="totalRides"
              type="monotone"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              dataKey="totalEarnings"
              type="monotone"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Active drivers overview <User className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Total rides and earnings per driver
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
