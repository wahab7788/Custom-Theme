// src/components/ErrorPage.jsx
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiAlertTriangle, FiHome, FiRefreshCw, FiArrowLeft } from 'react-icons/fi';

const ErrorPage = ({ code = 404, message }) => {
  const navigate = useNavigate();

  const errors = {
    404: {
      title: 'Page Not Found',
      message: message || "Oops! The page you're looking for doesn't exist.",
      icon: <FiAlertTriangle size={80} />
    },
    500: {
      title: 'Server Error',
      message: message || "Something went wrong on our end. Please try again later.",
      icon: <FiAlertTriangle size={80} />
    },
    403: {
      title: 'Access Denied',
      message: message || "You don't have permission to access this page.",
      icon: <FiAlertTriangle size={80} />
    }
  };

  const error = errors[code] || errors[404];

  return (
    <div style={{
      minHeight: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
      padding: '20px'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
        background: 'white',
        borderRadius: '16px',
        padding: '48px',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
      }}>
        {/* Error Code */}
        <div style={{
          fontSize: '80px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #FF6B00, #E65100)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px'
        }}>
          {code}
        </div>

        {/* Icon */}
        <div style={{ color: '#FF6B00', marginBottom: '20px' }}>
          {error.icon}
        </div>

        {/* Title */}
        <h1 style={{ fontSize: '28px', marginBottom: '10px', color: '#333' }}>
          {error.title}
        </h1>

        {/* Message */}
        <p style={{ color: '#666', marginBottom: '30px', lineHeight: '1.6' }}>
          {error.message}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: '#FF6B00',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <FiArrowLeft /> Go Back
          </button>
          
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'transparent',
              color: '#333',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <FiHome /> Home
          </button>
          
          <button
            onClick={() => window.location.reload()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'transparent',
              color: '#333',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

// Network Error Component
export const NetworkError = ({ onRetry }) => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '64px', marginBottom: '20px' }}>🌐</div>
      <h2 style={{ marginBottom: '10px', color: '#333' }}>Network Error</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Unable to connect to the server. Please check your internet connection.
      </p>
      <button
        onClick={onRetry}
        style={{
          padding: '10px 24px',
          background: '#FF6B00',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;