"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useGetDriverAnalyticsQuery } from "@/redux/features/analytics/analytics.api";

const chartConfig = {
  visitors: { label: "Visitors" },
  desktop: { label: "Desktop", color: "var(--primary)" },
  mobile: { label: "Mobile", color: "var(--primary)" },
} satisfies ChartConfig;

export default function DriverChart() {
  const { data: analytics } = useGetDriverAnalyticsQuery(undefined);
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState<string>("daily");
  const [totalIncome, setTotalIncome] = React.useState(0);

  React.useEffect(() => {
    if (isMobile) setTimeRange("daily");
  }, [isMobile]);

  const chartData = React.useMemo(() => {
    if (!analytics) return [];

    switch (timeRange) {
      case "daily":
        setTotalIncome(
          analytics.daily?.reduce((a, b) => a + (b.amount || 0), 0) || 0
        );
        return analytics.daily || [];
      case "monthly":
        setTotalIncome(
          analytics.monthly?.reduce((a, b) => a + (b.amount || 0), 0) || 0
        );
        return analytics.monthly || [];
      case "yearly":
        setTotalIncome(
          analytics.yearly?.reduce((a, b) => a + (b.amount || 0), 0) || 0
        );
        return analytics.yearly || [];
      default:
        return [];
    }
  }, [analytics, timeRange]);

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Income ({totalIncome})</CardTitle>
        <CardDescription>
          <span className="uppercase">{timeRange}</span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="daily">Today</ToggleGroupItem>
            <ToggleGroupItem value="monthly">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="yearly">Last 1 year</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Daily" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="daily" className="rounded-lg">
                Today
              </SelectItem>
              <SelectItem value="monthly" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="yearly" className="rounded-lg">
                Last 1 Year
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="createdAt"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="amount"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
