import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
