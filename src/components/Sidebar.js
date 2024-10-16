// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Loram Iporam</a></li>
          <li><a href="#">Loram Iporam</a></li>
          <li><a href="#">Loram Iporam</a></li>
          <li><a href="#">Loram Iporam</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;