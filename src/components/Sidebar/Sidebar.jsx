import React from "react";
import AccountToggle from "./AccountToggle";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-auto sticky top-4 h-[calc(100dvh-32px-48px)]">
        <AccountToggle />
        {/* <div className="h-[200dvh]">Content</div> */}
      </div>
      {/* TODO: Plan toggle */}
    </div>
  );
};

export default Sidebar;
