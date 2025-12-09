import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import CartPage from "./CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [cart, setCart] = useState([]);

  const onAdd = (product) => setCart([...cart, product]);
  const onRemove = (id) => setCart(cart.filter((item) => item.id !== id));
  const onRemoveAll = () => setCart([]);

  return (
    <Router>
      <Header cart={cart} onRemoveAll={onRemoveAll} onRemove={onRemove} />

      <Routes>
        <Route path="/" element={<Content onAdd={onAdd} />} />
        <Route path="/cart" element={<CartPage cart={cart} onRemoveAll={onRemoveAll} onRemove={onRemove} />} />
      </Routes>

      <footer className="bg-dark text-white text-center py-2 mt-3">
        © 2025 MyShop - All Rights Reserved
      </footer>
    </Router>
  );
}

export default App;

