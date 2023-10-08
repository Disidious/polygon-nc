import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"
import { MainLayout } from 'components';
import { AccessControl, CCTV, Checkout, Clients, ContactUs, DataShow, Home, Networking, ProductDetails, Projects, Shop } from 'pages';

import { QuoteProduct } from "types";
import { CartContext } from "contexts";

function App() {
  const [loadingData, setLoadingData] = useState(true);
  const [cartProducts, setCartProducts] = useState<QuoteProduct[]>([]);

  const appendProduct = (id: number, quantity: number) => {
    const newProducts = [...cartProducts];
    newProducts.push({
      product: id,
      quantity
    });
    setCartProducts(newProducts);
  }

  const removeProduct = (index: number) => {
    const newProducts = [...cartProducts];
    newProducts.splice(index, 1); 
    setCartProducts(newProducts);
  }

  const emptyProducts = () => {
    setCartProducts([])
  }

  useEffect(() => {
    const storedCartData = localStorage.getItem("cart");
    if(storedCartData != null) {
      setCartProducts(JSON.parse(storedCartData));
    }
  }, [])

  useEffect(() => {
    if(loadingData) {
      setLoadingData(false);
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts])

  return (
    <CartContext.Provider value={{cartProducts, appendProduct, removeProduct, emptyProducts}}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path="product" element={<ProductDetails/>}/>
              <Route path="checkout" element={<Checkout/>} />
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
    </CartContext.Provider>
  )
}

export default App
