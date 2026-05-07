// src/components/Navbar.jsx
import  { useState } from 'react';
import { FiBell, FiSettings, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, title: 'New order received!', message: 'Order #ORD-001 has been placed', time: '2 min ago', read: false },
    { id: 2, title: 'Payment received', message: 'Payment of ₹1,190 received', time: '15 min ago', read: false },
    { id: 3, title: 'New customer registered', message: 'Ahmed Raza has joined', time: '1 hour ago', read: true },
    { id: 4, title: 'Low stock alert', message: 'Zinger Burger stock is low', time: '3 hours ago', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="navbar">
      {/* Logo Area */}
      <div className="navbar-logo">
        <span className="logo-icon">🍔</span>
        <span className="logo-text">FOODIE Dashboard</span>
      </div>

      {/* Right Side Actions */}
      <div className="navbar-actions">
        {/* Notifications */}
        <div className="notification-wrapper">
          <button 
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FiBell size={20} />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>
          
          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="dropdown-header">
                <h4>Notifications</h4>
                <button className="mark-all-btn">Mark all as read</button>
              </div>
              <div className="notification-list">
                {notifications.map(notif => (
                  <div key={notif.id} className={`notification-item ${!notif.read ? 'unread' : ''}`}>
                    <div className="notification-icon">
                      {notif.title.includes('order') ? '🛒' : 
                       notif.title.includes('Payment') ? '💰' : 
                       notif.title.includes('customer') ? '👤' : '⚠️'}
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">{notif.title}</div>
                      <div className="notification-message">{notif.message}</div>
                      <div className="notification-time">{notif.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <button className="view-all-btn">View All Notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="profile-wrapper">
          <button 
            className="profile-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img 
              src="https://ui-avatars.com/api/?name=John+Doe&background=FF6B00&color=fff&bold=true&size=32" 
              alt="Profile"
              className="profile-image"
            />
            <span className="profile-name">John Doe</span>
            <span className="profile-arrow">▼</span>
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="profile-header">
                <img 
                  src="https://ui-avatars.com/api/?name=John+Doe&background=FF6B00&color=fff&bold=true&size=40" 
                  alt="Profile"
                  className="profile-dropdown-image"
                />
                <div>
                  <div className="profile-dropdown-name">John Doe</div>
                  <div className="profile-dropdown-email">john.doe@example.com</div>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">
                <FiSettings size={16} />
                Settings
              </button>
              <button className="dropdown-item">
                <FiLogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;