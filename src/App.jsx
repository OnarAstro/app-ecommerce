import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ProductProvider } from "./context/ProductContext";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import Home from "./Page/Home/Home";

import Header from "./components/1-Header/Header";
import Cart from "./Page/Cart/Cart";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ProductProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path={"/product/:id/:category"} element={<DetailsProduct />}  />
            <Route path={"/product"} element={<Product />}  />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
