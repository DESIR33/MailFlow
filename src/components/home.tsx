import React from "react";
import Sidebar from "./layout/Sidebar";
import MetricsGrid from "./dashboard/MetricsGrid";
import CampaignList from "./campaigns/CampaignList";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500 mt-2">
              Welcome back! Here's an overview of your email campaigns.
            </p>
          </div>

          <MetricsGrid />

          <CampaignList />
        </div>
      </main>
    </div>
  );
};

export default Home;
