import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnalyticCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}

const AnalyticCard = ({
  title = "Metric",
  value = "0",
  change = 0,
  icon = null,
}: AnalyticCardProps) => {
  const isPositiveChange = change >= 0;

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-bold">{value}</p>

          {change !== undefined && (
            <div className="flex items-center space-x-1">
              <span
                className={cn(
                  "flex items-center text-sm",
                  isPositiveChange ? "text-green-600" : "text-red-600",
                )}
              >
                {isPositiveChange ? (
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4 mr-1" />
                )}
                {Math.abs(change)}%
              </span>
              <span className="text-sm text-gray-500">vs last period</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticCard;
