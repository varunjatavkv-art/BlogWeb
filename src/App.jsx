import { Outlet } from "react-router-dom";
import "./App.css";

import Header from "./componets/Header";

function App() {
  return (
    <>
      <Header />
      <div className="pt-40">
        <Outlet />
      </div>
    </>
  );
}

export default App;
