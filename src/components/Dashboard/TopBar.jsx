import React from "react";
import { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";

const TopBar = () => {
  const [formattedDate, setFormattedDate] = useState(""); // state for date/time

  useEffect(() => {
    // Format the current date once when component mounts
    // this method formats dates according to specific locale + options
    // Learn more here => https://www.geeksforgeeks.org/javascript-intl-datetimeformat-format-method/
    const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
    });
    // update state
    setFormattedDate(dateTimeFormatter.format(new Date()));
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className=" flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            🌎 Good morning, Alex!
          </span>
          <span className="text-xs block text-stone-500"> {formattedDate}</span>
        </div>

        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-emerald-100 hover:text-emerald-700 px-3 py-1.5 rounded">
          <FiCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
