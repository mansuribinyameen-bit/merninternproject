import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/slices/authSlice';

const api = import.meta.env.VITE_API_BASE;

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onLogin(e) {
    e.preventDefault();
    // backend placeholder - will be implemented later
    const res = await axios.post(`${api}/api/auth/login`, { email, password }).catch((err) => err);
    console.log(res);
    dispatch(setAuth({ token: null, user: null }));
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onLogin} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p style={{ opacity: 0.7 }}>Backend auth is placeholder for now.</p>
    </div>
  );
}

