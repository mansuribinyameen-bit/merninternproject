import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = import.meta.env.VITE_API_BASE;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ q: '', category: '' });

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load(nextFilters = filters) {
    const res = await axios.get(`${api}/api/products`, { params: nextFilters });
    setProducts(res.data.products || []);
  }

  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Search"
          value={filters.q}
          onChange={(e) => setFilters((s) => ({ ...s, q: e.target.value }))}
        />
        <input
          placeholder="Category"
          value={filters.category}
          onChange={(e) => setFilters((s) => ({ ...s, category: e.target.value }))}
        />
        <button onClick={() => load()}>Apply</button>
      </div>

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>

      <p style={{ opacity: 0.7 }}>Backend currently returns an empty list (placeholder).</p>
    </div>
  );
}

