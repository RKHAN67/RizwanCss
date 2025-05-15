import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <header style={{ padding: '10px', background: '#eee' }}>
        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about-us">About</Link>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}
