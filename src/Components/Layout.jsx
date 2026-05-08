// src/components/Layout.jsx
// import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar' 

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;