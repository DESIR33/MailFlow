import React from "react";
import { Button } from "@/components/ui/button";
import DatePickerWithRange from "@/components/ui/date-picker-with-range";
import { Download } from "lucide-react";
import { addDays } from "date-fns";

interface AnalyticsHeaderProps {
  onDateRangeChange?: (range: { from: Date; to: Date }) => void;
  onExport?: () => void;
}

const AnalyticsHeader = ({
  onDateRangeChange = () => {},
  onExport = () => {},
}: AnalyticsHeaderProps) => {
  const defaultDateRange = {
    from: addDays(new Date(), -30),
    to: new Date(),
  };

  return (
    <div className="bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <DatePickerWithRange
          date={defaultDateRange}
          onDateChange={onDateRangeChange}
        />
      </div>
      <Button
        onClick={onExport}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Export Results
      </Button>
    </div>
  );
};

export default AnalyticsHeader;
