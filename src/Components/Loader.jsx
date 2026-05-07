// src/components/Loader.jsx
// import React from 'react';
// import { FiLoader } from 'react-icons/fi';

const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'white',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      {/* Spinner */}
      <div style={{
        width: '50px',
        height: '50px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #FF6B00',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      
      {/* Text */}
      <h2 style={{ color: '#FF6B00', marginBottom: '10px' }}>FOODIE</h2>
      <p style={{ color: '#666' }}>Loading your dashboard...</p>
      
      {/* Animation Style */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Small Loader for Buttons
export const ButtonLoader = () => {
  return (
    <span style={{
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid #fff',
      borderTop: '2px solid transparent',
      borderRadius: '50%',
      animation: 'spin 0.6s linear infinite',
      marginRight: '8px'
    }} />
  );
};

// Skeleton Loader for Cards
export const SkeletonCard = () => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        height: '150px',
        background: '#e9ecef',
        borderRadius: '8px',
        marginBottom: '15px',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
      <div style={{
        height: '20px',
        background: '#e9ecef',
        borderRadius: '4px',
        marginBottom: '10px',
        width: '70%',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
      <div style={{
        height: '15px',
        background: '#e9ecef',
        borderRadius: '4px',
        width: '90%',
        animation: 'pulse 1.5s ease-in-out infinite'
      }} />
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Loader;