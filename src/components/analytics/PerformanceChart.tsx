import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

interface PerformanceChartProps {
  data?: Array<{
    date: string;
    sent: number;
    opened: number;
    clicked: number;
    rejected: number;
  }>;
}

const PerformanceChart = ({
  data = generateDefaultData(),
}: PerformanceChartProps) => {
  return (
    <Card className="w-full h-[400px] bg-white">
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Email Performance Over Time</h3>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="font-semibold">{label}</div>
                          {payload.map((p) => (
                            <div
                              key={p.name}
                              className="flex flex-col"
                              style={{ color: p.color }}
                            >
                              <span className="font-semibold">
                                {p.name}: {p.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="sent"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
                name="Sent"
              />
              <Line
                type="monotone"
                dataKey="opened"
                stroke="#16a34a"
                strokeWidth={2}
                dot={false}
                name="Opened"
              />
              <Line
                type="monotone"
                dataKey="clicked"
                stroke="#ca8a04"
                strokeWidth={2}
                dot={false}
                name="Clicked"
              />
              <Line
                type="monotone"
                dataKey="rejected"
                stroke="#dc2626"
                strokeWidth={2}
                dot={false}
                name="Rejected"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper function to generate default data
function generateDefaultData() {
  const dates = [
    "2024-01-01",
    "2024-01-02",
    "2024-01-03",
    "2024-01-04",
    "2024-01-05",
  ];
  return dates.map((date) => ({
    date,
    sent: Math.floor(Math.random() * 1000) + 500,
    opened: Math.floor(Math.random() * 800) + 300,
    clicked: Math.floor(Math.random() * 400) + 100,
    rejected: Math.floor(Math.random() * 50),
  }));
}

export default PerformanceChart;
