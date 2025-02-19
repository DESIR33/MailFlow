import React, { useState } from "react";
import AnalyticsHeader from "@/components/analytics/AnalyticsHeader";
import MetricsOverview from "@/components/analytics/MetricsOverview";
import PerformanceChart from "@/components/analytics/PerformanceChart";
import MetricDetails from "@/components/analytics/MetricDetails";
import Sidebar from "@/components/layout/Sidebar";

const AnalyticsPage = () => {
  const [showMetricDetails, setShowMetricDetails] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<{
    title: string;
    value: number;
    change: number;
    details: Array<{
      date: string;
      value: number;
      change: number;
    }>;
  } | null>(null);

  const handleDateRangeChange = (range: { from: Date; to: Date }) => {
    // Handle date range change
    console.log("Date range changed:", range);
  };

  const handleExport = () => {
    // Handle export
    console.log("Exporting data...");
  };

  const handleMetricClick = (metric: typeof selectedMetric) => {
    setSelectedMetric(metric);
    setShowMetricDetails(true);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <AnalyticsHeader
          onDateRangeChange={handleDateRangeChange}
          onExport={handleExport}
        />

        <div className="p-8 space-y-6">
          <MetricsOverview
            metrics={{
              sent: 15000,
              delivered: 14850,
              openRate: 45.2,
              clickRate: 12.8,
              bounces: 150,
              spam: 25,
              changes: {
                sent: 5.2,
                delivered: 4.8,
                openRate: -2.1,
                clickRate: 3.4,
                bounces: -1.5,
                spam: -0.8,
              },
            }}
          />

          <PerformanceChart
            data={[
              {
                date: "2024-01-01",
                sent: 3200,
                opened: 1800,
                clicked: 720,
                rejected: 32,
              },
              {
                date: "2024-01-02",
                sent: 3800,
                opened: 2100,
                clicked: 840,
                rejected: 28,
              },
              {
                date: "2024-01-03",
                sent: 3400,
                opened: 1900,
                clicked: 760,
                rejected: 25,
              },
              {
                date: "2024-01-04",
                sent: 4200,
                opened: 2400,
                clicked: 960,
                rejected: 35,
              },
              {
                date: "2024-01-05",
                sent: 3900,
                opened: 2200,
                clicked: 880,
                rejected: 30,
              },
            ]}
          />

          {selectedMetric && (
            <MetricDetails
              open={showMetricDetails}
              onOpenChange={setShowMetricDetails}
              metric={selectedMetric}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
