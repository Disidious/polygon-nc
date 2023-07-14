import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from './components';
import { Home } from 'pages'

import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
