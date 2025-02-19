import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Play, Pause, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Campaign {
  id: string;
  name: string;
  status: "draft" | "scheduled" | "active" | "completed" | "paused";
  sentCount: number;
  openRate: number;
  clickRate: number;
  lastModified: string;
}

interface CampaignListProps {
  campaigns?: Campaign[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onStatusChange?: (id: string, status: Campaign["status"]) => void;
}

const defaultCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Welcome Series",
    status: "active",
    sentCount: 1234,
    openRate: 45.2,
    clickRate: 12.3,
    lastModified: "2024-03-15",
  },
  {
    id: "2",
    name: "Monthly Newsletter",
    status: "draft",
    sentCount: 0,
    openRate: 0,
    clickRate: 0,
    lastModified: "2024-03-14",
  },
  {
    id: "3",
    name: "Product Launch",
    status: "scheduled",
    sentCount: 0,
    openRate: 0,
    clickRate: 0,
    lastModified: "2024-03-13",
  },
];

const getStatusColor = (status: Campaign["status"]) => {
  const colors = {
    draft: "bg-gray-100 text-gray-800",
    scheduled: "bg-blue-100 text-blue-800",
    active: "bg-green-100 text-green-800",
    completed: "bg-purple-100 text-purple-800",
    paused: "bg-yellow-100 text-yellow-800",
  };
  return colors[status];
};

const CampaignList = ({
  campaigns = defaultCampaigns,
  onEdit = () => {},
  onDelete = () => {},
  onStatusChange = () => {},
}: CampaignListProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Campaigns</h2>
        <Button>Create Campaign</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Sent</TableHead>
              <TableHead className="text-right">Open Rate</TableHead>
              <TableHead className="text-right">Click Rate</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status.charAt(0).toUpperCase() +
                      campaign.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {campaign.sentCount.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {campaign.openRate.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right">
                  {campaign.clickRate.toFixed(1)}%
                </TableCell>
                <TableCell>{campaign.lastModified}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(campaign.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      {campaign.status === "active" ? (
                        <DropdownMenuItem
                          onClick={() => onStatusChange(campaign.id, "paused")}
                        >
                          <Pause className="mr-2 h-4 w-4" />
                          Pause
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() => onStatusChange(campaign.id, "active")}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Activate
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => onDelete(campaign.id)}
                        className="text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CampaignList;
