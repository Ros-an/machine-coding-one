import {Routes, Route} from "react-router-dom";
import ProductListing from "./product/ProductListing";
import Navbar from "./Navbar";
import Cart from "./cart/pages/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
