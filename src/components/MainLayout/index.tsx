import { Outlet } from "react-router-dom";
import { Header } from "..";

const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
};

export default MainLayout;