import { BrowserRouter, Route, Routes } from 'react-router';

import { CartProvider } from '@/cart/CartProvider';
import MainLayout from '@/components/layout/MainLayout';
import AccessControl from '@/pages/AccessControl';
import CCTV from '@/pages/CCTV';
import Checkout from '@/pages/Checkout';
import Clients from '@/pages/Clients';
import ContactUs from '@/pages/ContactUs';
import DataShow from '@/pages/DataShow';
import Home from '@/pages/Home';
import Networking from '@/pages/Networking';
import ProductDetails from '@/pages/ProductDetails';
import Projects from '@/pages/Projects';
{/* TODO: Uncomment when ready */}
// import Shop from '@/pages/Shop';

// Same paths as the original site; the Flask server in ./server relies on them (for example /product?productid=).
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* TODO: Uncomment when ready */}
            {/* <Route path="shop" element={<Shop />} /> */}
            <Route path="product" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="services">
              <Route path="networking" element={<Networking />} />
              <Route path="cctv" element={<CCTV />} />
              <Route path="accesscontrol" element={<AccessControl />} />
              <Route path="datashow" element={<DataShow />} />
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="clients" element={<Clients />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
