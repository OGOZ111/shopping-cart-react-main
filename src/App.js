import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { About } from "./pages/about/about";
import {User} from "./pages/user/user"
import { Shop2 } from "../src/pages/kitchen/kitchen"
 


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
            <Route path="/kitchen" element={<Shop2 />} />

          </Routes>
        </Router> 
      </ShopContextProvider>
    </div>
  );
}

export default App;
