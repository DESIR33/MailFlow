import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Mail,
  Users,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", path: "/" },
    { icon: Mail, label: "Campaigns", path: "/campaigns" },
    { icon: FileText, label: "Sequences", path: "/sequences" },
    { icon: Users, label: "Contacts", path: "/contacts" },
    { icon: FileText, label: "Templates", path: "/templates" },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ];

  return (
    <div
      className={cn(
        "flex flex-col justify-between h-full w-[280px] bg-white border-r p-4",
        className,
      )}
    >
      <div>
        <div className="mb-8 px-4">
          <h1 className="text-2xl font-bold">EmailCamp</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <nav>
          <ul className="space-y-2">
            {bottomMenuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
