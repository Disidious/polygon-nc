import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, MainBackground } from "components";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  
  return (
    <div style={{
      position: "relative",
      height: "100%"
    }}>
      <MainBackground/>
      <Header/>
      
      <Outlet/>
      
      <Footer/>
    </div>
  )
};

export default MainLayout;