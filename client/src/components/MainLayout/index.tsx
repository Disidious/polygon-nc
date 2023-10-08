import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer, Header, MainBackground } from "components";

const MainLayout = () => {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState("")

  useEffect(() => {
    if(prevPath === location.pathname) {
      return
    }
    setPrevPath(location.pathname)
    window.scrollTo(0, 0);
  }, [location])
  
  return (
    <div style={{
      position: "relative",
      height: "100%"
    }}>
      <MainBackground/>
      <Header/>
      
      <Toaster
			toastOptions={{
				success: {
					iconTheme: {
						primary: "rgb(44, 50, 133)",
						secondary: "white"
					}
				}
			}}/>

      <Outlet/>
      
      <Footer/>
    </div>
  )
};

export default MainLayout;