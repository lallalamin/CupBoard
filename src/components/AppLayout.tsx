import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <main className="app-layout__content">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

export default AppLayout;