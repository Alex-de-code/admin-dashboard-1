import React from "react";
import AccountToggle from "./AccountToggle";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-auto sticky top-4 h-[calc(100dvh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
        {/* <div className="h-[200dvh]">Content</div> */}
      </div>
      <Plan />
    </div>
  );
};

export default Sidebar;
