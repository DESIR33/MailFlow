import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MetricDetailsProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  metric?: {
    title: string;
    value: number;
    change: number;
    details: Array<{
      date: string;
      value: number;
      change: number;
    }>;
  };
}

const MetricDetails = ({
  open = true,
  onOpenChange = () => {},
  metric = {
    title: "Email Opens",
    value: 15234,
    change: 12.5,
    details: [
      { date: "2024-03-01", value: 1234, change: 5.2 },
      { date: "2024-03-02", value: 1567, change: 8.7 },
      { date: "2024-03-03", value: 1890, change: -3.1 },
      { date: "2024-03-04", value: 2100, change: 15.4 },
      { date: "2024-03-05", value: 1950, change: -2.8 },
    ],
  },
}: MetricDetailsProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {metric.title} Details
          </DialogTitle>
        </DialogHeader>

        <Card className="mb-6 bg-gray-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total {metric.title}</p>
                <p className="text-3xl font-bold mt-1">
                  {metric.value.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center">
                {metric.change >= 0 ? (
                  <ArrowUpIcon className="w-5 h-5 text-green-500 mr-1" />
                ) : (
                  <ArrowDownIcon className="w-5 h-5 text-red-500 mr-1" />
                )}
                <span
                  className={`text-lg font-semibold ${
                    metric.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {Math.abs(metric.change)}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {metric.details.map((detail, index) => (
              <React.Fragment key={detail.date}>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium">{detail.date}</p>
                    <p className="text-2xl font-semibold mt-1">
                      {detail.value.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {detail.change >= 0 ? (
                      <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`${
                        detail.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {Math.abs(detail.change)}%
                    </span>
                  </div>
                </div>
                {index < metric.details.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MetricDetails;
