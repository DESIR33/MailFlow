import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./../ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  chartData?: React.ReactNode;
}

const MetricCard = ({
  title = "Open Rate",
  value = "45.2%",
  change = 12.5,
  trend = "up",
  chartData,
}: MetricCardProps) => {
  return (
    <Card className="bg-white w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="flex items-center space-x-1">
              {trend === "up" ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}
              >
                {change}%
              </span>
              <span className="text-sm text-muted-foreground">
                vs last month
              </span>
            </div>
          </div>
          {chartData && <div className="h-16 w-16">{chartData}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
