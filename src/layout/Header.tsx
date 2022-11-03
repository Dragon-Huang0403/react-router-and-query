import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div style={{ paddingBottom: '10px' }}>
        <Link to="/">Home</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
