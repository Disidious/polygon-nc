import { Outlet } from "react-router-dom";
import { Footer, Header, MainBackground } from "components";

const MainLayout = () => {
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