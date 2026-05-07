// src/pages/Alerts.jsx
import { useState, useEffect } from 'react';
import { 
  FiCheckCircle, FiAlertTriangle, FiXCircle, FiInfo, 
  FiBell, FiCopy, FiCheck, FiX, FiGift, FiSmartphone,
  FiThumbsUp,  FiMessageCircle
} from 'react-icons/fi';

const Alerts = () => {
  const [copied, setCopied] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [showBanner, setShowBanner] = useState(true);
  const [dismissedAlerts, setDismissedAlerts] = useState({});

  // Copy function
  const copyCode = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Add Toast Notification with position
  const addToast = (type, message, position = 'bottom-right') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message, position }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  // Dismiss Alert
  const dismissAlert = (alertId) => {
    setDismissedAlerts(prev => ({ ...prev, [alertId]: true }));
  };

  // Auto-dismiss banner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Group toasts by position
  const toastsByPosition = {
    'top-left': toasts.filter(t => t.position === 'top-left'),
    'top-right': toasts.filter(t => t.position === 'top-right'),
    'bottom-left': toasts.filter(t => t.position === 'bottom-left'),
    'bottom-right': toasts.filter(t => t.position === 'bottom-right'),
  };

  const getToastIcon = (type) => {
    switch(type) {
      case 'success': return <FiCheckCircle size={20} />;
      case 'warning': return <FiAlertTriangle size={20} />;
      case 'error': return <FiXCircle size={20} />;
      default: return <FiInfo size={20} />;
    }
  };

  const getToastColors = (type) => {
    switch(type) {
      case 'success': return { bg: 'var(--alert-success)', color: 'var(--alert-success-text)', border: '#28a745' };
      case 'warning': return { bg: 'var(--alert-warning)', color: 'var(--alert-warning-text)', border: '#ffc107' };
      case 'error': return { bg: 'var(--alert-error)', color: 'var(--alert-error-text)', border: '#dc3545' };
      default: return { bg: 'var(--alert-info)', color: 'var(--alert-info-text)', border: '#17a2b8' };
    }
  };

  const alertTypes = [
    { type: 'success', title: 'Success!', message: 'Your order has been placed successfully.', icon: <FiCheckCircle size={24} />, color: '#28a745' },
    { type: 'warning', title: 'Warning!', message: 'This action cannot be undone. Please confirm.', icon: <FiAlertTriangle size={24} />, color: '#ffc107' },
    { type: 'error', title: 'Error!', message: 'Something went wrong. Please try again.', icon: <FiXCircle size={24} />, color: '#dc3545' },
    { type: 'info', title: 'Info!', message: 'Your account is under review. You will be notified.', icon: <FiInfo size={24} />, color: '#17a2b8' }
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Alerts & Notifications
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Beautiful alert components with toast notifications, dismissible alerts, and copy functionality
        </p>
      </div>

      {/* Toast Notifications Containers - 4 Corners */}
      {/* Top Left */}
      <div style={{
        position: 'fixed',
        top: '80px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '280px'
      }}>
        {toastsByPosition['top-left'].map(toast => {
          const colors = getToastColors(toast.type);
          return (
            <div key={toast.id} className="toast-notification" style={{
              background: colors.bg,
              color: colors.color,
              padding: '12px 16px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideInLeft 0.3s ease',
              borderLeft: `3px solid ${colors.border}`,
              width: '280px'
            }}>
              {getToastIcon(toast.type)}
              <div style={{ flex: 1 }}>
                <strong>{toast.type === 'success' ? 'Success!' : toast.type === 'warning' ? 'Warning!' : toast.type === 'error' ? 'Error!' : 'Info!'}</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '12px' }}>{toast.message}</p>
              </div>
              <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} style={{
                background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'inherit', opacity: 0.6
              }}><FiX size={14} /></button>
            </div>
          );
        })}
      </div>

      {/* Top Right */}
      <div style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '280px'
      }}>
        {toastsByPosition['top-right'].map(toast => {
          const colors = getToastColors(toast.type);
          return (
            <div key={toast.id} className="toast-notification" style={{
              background: colors.bg,
              color: colors.color,
              padding: '12px 16px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideInRight 0.3s ease',
              borderRight: `3px solid ${colors.border}`,
              width: '280px'
            }}>
              {getToastIcon(toast.type)}
              <div style={{ flex: 1 }}>
                <strong>{toast.type === 'success' ? 'Success!' : toast.type === 'warning' ? 'Warning!' : toast.type === 'error' ? 'Error!' : 'Info!'}</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '12px' }}>{toast.message}</p>
              </div>
              <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} style={{
                background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'inherit', opacity: 0.6
              }}><FiX size={14} /></button>
            </div>
          );
        })}
      </div>

      {/* Bottom Left */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '280px'
      }}>
        {toastsByPosition['bottom-left'].map(toast => {
          const colors = getToastColors(toast.type);
          return (
            <div key={toast.id} className="toast-notification" style={{
              background: colors.bg,
              color: colors.color,
              padding: '12px 16px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideInLeft 0.3s ease',
              borderLeft: `3px solid ${colors.border}`,
              width: '280px'
            }}>
              {getToastIcon(toast.type)}
              <div style={{ flex: 1 }}>
                <strong>{toast.type === 'success' ? 'Success!' : toast.type === 'warning' ? 'Warning!' : toast.type === 'error' ? 'Error!' : 'Info!'}</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '12px' }}>{toast.message}</p>
              </div>
              <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} style={{
                background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'inherit', opacity: 0.6
              }}><FiX size={14} /></button>
            </div>
          );
        })}
      </div>

      {/* Bottom Right */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '280px'
      }}>
        {toastsByPosition['bottom-right'].map(toast => {
          const colors = getToastColors(toast.type);
          return (
            <div key={toast.id} className="toast-notification" style={{
              background: colors.bg,
              color: colors.color,
              padding: '12px 16px',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              animation: 'slideInRight 0.3s ease',
              borderRight: `3px solid ${colors.border}`,
              width: '280px'
            }}>
              {getToastIcon(toast.type)}
              <div style={{ flex: 1 }}>
                <strong>{toast.type === 'success' ? 'Success!' : toast.type === 'warning' ? 'Warning!' : toast.type === 'error' ? 'Error!' : 'Info!'}</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '12px' }}>{toast.message}</p>
              </div>
              <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} style={{
                background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'inherit', opacity: 0.6
              }}><FiX size={14} /></button>
            </div>
          );
        })}
      </div>

      {/* Demo Buttons for Toast */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Toast Notifications - 4 Corners</h3>
        <p style={{ marginBottom: 'var(--spacing-4)', color: 'var(--text-light)' }}>
          Click buttons below to see animated notifications from different corners
        </p>
        
        <div className="grid" style={{ gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 3' }}>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => addToast('success', 'Order placed!', 'top-left')}>
              Top Left Success
            </button>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <button className="btn btn-primary" style={{ width: '100%', background: '#f59e0b' }} onClick={() => addToast('warning', 'Check payment!', 'top-right')}>
              Top Right Warning
            </button>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <button className="btn btn-primary" style={{ width: '100%', background: '#dc3545' }} onClick={() => addToast('error', 'Payment failed!', 'bottom-left')}>
              Bottom Left Error
            </button>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <button className="btn btn-primary" style={{ width: '100%', background: '#17a2b8' }} onClick={() => addToast('info', 'Update available!', 'bottom-right')}>
              Bottom Right Info
            </button>
          </div>
        </div>

        <div style={{ 
          marginTop: 'var(--spacing-4)', 
          padding: 'var(--spacing-3)', 
          background: 'var(--gray-100)', 
          borderRadius: 'var(--radius)',
          fontSize: '13px'
        }}>
          <strong><FiBell size={14} style={{ display: 'inline', marginRight: '4px' }} /> Tip:</strong> Toasts automatically disappear after 5 seconds. They appear from all 4 corners!
        </div>
      </div>

      {/* Auto-dismiss Banner */}
      {showBanner && (
        <div className="section" style={{
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          color: 'white',
          position: 'relative',
          animation: 'slideDown 0.5s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiGift size={24} /> Special Offer!
              </h3>
              <p style={{ margin: '8px 0 0 0', opacity: 0.95 }}>
                Get 20% off on your first order using code: FOODIE20
              </p>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FiX size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Static Alerts Section */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Static Alerts</h3>
          <button 
            onClick={() => copyCode(`<div className="alert alert-success">
  <div className="alert-icon"><FiCheckCircle /></div>
  <div className="alert-content">
    <strong>Success!</strong>
    <p>Your order has been placed successfully.</p>
  </div>
  <button className="alert-close"><FiX /></button>
</div>`, 'alert-code')}
            style={{
              background: copied === 'alert-code' ? 'var(--secondary)' : 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)'
            }}
          >
            {copied === 'alert-code' ? <><FiCheck size={14} /> Copied!</> : <><FiCopy size={14} /> Copy All Alert Code</>}
          </button>
        </div>

        {alertTypes.map((alert, idx) => (
          !dismissedAlerts[alert.type] && (
            <div 
              key={alert.type}
              className={`alert alert-${alert.type}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--spacing-3)',
                animation: `fadeIn 0.3s ease ${idx * 0.1}s both`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', flex: 1 }}>
                <span className="alert-icon">{alert.icon}</span>
                <div>
                  <strong>{alert.title}</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', opacity: 0.9 }}>{alert.message}</p>
                </div>
              </div>
              <button
                onClick={() => dismissAlert(alert.type)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: 'inherit',
                  opacity: 0.6,
                  padding: '4px 8px'
                }}
              >
                <FiX size={16} />
              </button>
            </div>
          )
        ))}
      </div>

      {/* Custom Alert Examples */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Custom Alert Styles</h3>
        
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 6' }}>
            <div className="alert alert-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong><FiSmartphone size={16} style={{ display: 'inline', marginRight: '8px' }} /> Update Available!</strong>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>Version 2.0 is ready to install</p>
              </div>
              <button className="btn btn-primary btn-sm">Update Now</button>
            </div>
          </div>

          <div style={{ gridColumn: 'span 6' }}>
            <div className="alert alert-success" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <FiThumbsUp size={20} />
              <span>Your profile is 80% complete. <a href="#" style={{ color: 'inherit', fontWeight: 'bold' }}>Complete now</a></span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Classes Reference */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Alert CSS Classes</h3>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.alert</code>
              <p className="text-small text-muted">Base alert class</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.alert-success</code>
              <p className="text-small text-muted">Success alerts</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.alert-warning</code>
              <p className="text-small text-muted">Warning alerts</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.alert-error</code>
              <p className="text-small text-muted">Error alerts</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.alert-info</code>
              <p className="text-small text-muted">Info alerts</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.alert-close</code>
              <p className="text-small text-muted">Close button</p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="section" style={{ background: 'var(--gray-100)' }}>
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>How to Use Alerts</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <div><strong>Step 1:</strong> Click <strong style={{ color: 'var(--primary)' }}>"Copy All Alert Code"</strong> to copy the HTML structure</div>
          <div><strong>Step 2:</strong> Paste the code in your React component</div>
          <div><strong>Step 3:</strong> Use the toast functions to show notifications</div>
          <div><strong>Step 4:</strong> Customize messages and styles as needed</div>

          <div style={{ 
            marginTop: 'var(--spacing-4)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong>Toast Notification Example:</strong>
            <pre style={{ marginTop: 'var(--spacing-2)', overflow: 'auto', background: 'var(--gray-100)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)' }}>
              <code>{`// Add toast notification with position
const addToast = (type, message, position) => {
  setToasts(prev => [...prev, { 
    id: Date.now(), 
    type, 
    message, 
    position 
  }]);
};

// Usage - 4 corners
addToast('success', 'Order placed!', 'top-left');
addToast('warning', 'Check payment!', 'top-right');
addToast('error', 'Payment failed!', 'bottom-left');
addToast('info', 'Update available!', 'bottom-right');`}</code>
            </pre>
          </div>

          <div style={{ 
            marginTop: 'var(--spacing-2)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--secondary)'
          }}>
            <strong><FiMessageCircle size={14} style={{ display: 'inline', marginRight: '4px' }} /> Features:</strong>
            <ul style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
              <li>Animated toast notifications from 4 corners</li>
              <li>Dismissible static alerts</li>
              <li>Auto-dismiss banner after 5 seconds</li>
              <li>Copy code functionality for alerts</li>
              <li>4 predefined alert types (success, warning, error, info)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add CSS Animations */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Alerts;