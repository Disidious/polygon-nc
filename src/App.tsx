import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from './components';
import { AccessControl, CCTV, DataShow, Home, Networking, Projects } from 'pages';

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="services">
            <Route path="networking" element={<Networking/>}/>
            <Route path="cctv" element={<CCTV/>}/>
            <Route path="accesscontrol" element={<AccessControl/>}/>
            <Route path="datashow" element={<DataShow/>}/>
          </Route>
          <Route path="projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
