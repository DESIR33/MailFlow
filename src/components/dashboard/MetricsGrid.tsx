import React from "react";
import MetricCard from "./MetricCard";
import { Card } from "@/components/ui/card";

interface MetricsGridProps {
  metrics?: Array<{
    title: string;
    value: string;
    change: number;
    trend: "up" | "down";
  }>;
}

const MetricsGrid = ({
  metrics = [
    { title: "Open Rate", value: "45.2%", change: 12.5, trend: "up" },
    { title: "Click Rate", value: "24.8%", change: -2.4, trend: "down" },
    { title: "Bounce Rate", value: "2.1%", change: -0.8, trend: "up" },
    { title: "Unsubscribe Rate", value: "0.5%", change: 0.2, trend: "down" },
    { title: "Total Sent", value: "24,512", change: 15.7, trend: "up" },
    { title: "Delivery Rate", value: "98.9%", change: 0.3, trend: "up" },
  ],
}: MetricsGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
