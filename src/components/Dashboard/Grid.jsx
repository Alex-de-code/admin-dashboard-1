import React from "react";
import StatCards from "./StatCards";
import ActivityGraph from "./ActivityGraph";

const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
    </div>
  );
};

export default Grid;
