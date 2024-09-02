import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { exampleActivity } from "@/test";

interface WorkGroup {
  members: string;
}

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="">
      <div className="">
        <Sidebar sidebarState={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      <div className="">
        {exampleActivity?.data.map((e) => (
          <p key={e.id}>
            {e.admin}: {e.member1} has a new task! {e.task} {e.event} event.{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
