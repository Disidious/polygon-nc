import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from './components';
import { AccessControl, CCTV, Clients, ContactUs, DataShow, Home, Networking, Projects, Shop } from 'pages';

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="services">
            <Route path="networking" element={<Networking/>}/>
            <Route path="cctv" element={<CCTV/>}/>
            <Route path="accesscontrol" element={<AccessControl/>}/>
            <Route path="datashow" element={<DataShow/>}/>
          </Route>
          <Route path="projects" element={<Projects/>}/>
          <Route path="clients" element={<Clients/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
