import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-100 text-stone-950">
        <div>DASHBOARD APP</div>
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
