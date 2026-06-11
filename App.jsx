import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';

export default function App() {
  return (
    <div style={{ padding: 16, fontFamily: 'system-ui, Arial' }}>
      <header style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </header>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

