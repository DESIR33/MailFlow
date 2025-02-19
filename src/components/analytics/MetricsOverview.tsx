import React from "react";
import AnalyticCard from "./AnalyticCard";
import {
  Mail,
  CheckCircle,
  Eye,
  MousePointer,
  AlertTriangle,
  AlertOctagon,
} from "lucide-react";

interface MetricsOverviewProps {
  metrics?: {
    sent: number;
    delivered: number;
    openRate: number;
    clickRate: number;
    bounces: number;
    spam: number;
    changes?: {
      sent: number;
      delivered: number;
      openRate: number;
      clickRate: number;
      bounces: number;
      spam: number;
    };
  };
}

const MetricsOverview = ({
  metrics = {
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
  },
}: MetricsOverviewProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <AnalyticCard
          title="Total Sent"
          value={metrics.sent.toLocaleString()}
          change={metrics.changes?.sent}
          icon={<Mail className="w-5 h-5" />}
        />

        <AnalyticCard
          title="Delivered"
          value={`${((metrics.delivered / metrics.sent) * 100).toFixed(1)}%`}
          change={metrics.changes?.delivered}
          icon={<CheckCircle className="w-5 h-5" />}
        />

        <AnalyticCard
          title="Open Rate"
          value={`${metrics.openRate}%`}
          change={metrics.changes?.openRate}
          icon={<Eye className="w-5 h-5" />}
        />

        <AnalyticCard
          title="Click Rate"
          value={`${metrics.clickRate}%`}
          change={metrics.changes?.clickRate}
          icon={<MousePointer className="w-5 h-5" />}
        />

        <AnalyticCard
          title="Bounces"
          value={metrics.bounces.toLocaleString()}
          change={metrics.changes?.bounces}
          icon={<AlertTriangle className="w-5 h-5" />}
        />

        <AnalyticCard
          title="Spam Complaints"
          value={metrics.spam.toLocaleString()}
          change={metrics.changes?.spam}
          icon={<AlertOctagon className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default MetricsOverview;
