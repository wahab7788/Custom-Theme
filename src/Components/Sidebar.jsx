// src/components/Sidebar.jsx
import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiGrid, 
  FiEdit, 
  FiImage, 
  FiList, 
  FiBell, 
  FiTag, 
  FiNavigation, 
  FiSmile,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import { MdFastfood, MdRestaurantMenu } from 'react-icons/md';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <FiHome size={20} /> },
    { path: '/buttons', label: 'Buttons', icon: <FiGrid size={20} /> },
    { path: '/forms', label: 'Forms', icon: <FiEdit size={20} /> },
    { path: '/cards', label: 'Cards', icon: <FiImage size={20} /> },
    { path: '/tables', label: 'Tables', icon: <FiList size={20} /> },
    { path: '/alerts', label: 'Alerts', icon: <FiBell size={20} /> },
    { path: '/badges', label: 'Badges', icon: <FiTag size={20} /> },
    { path: '/pagination', label: 'Pagination', icon: <FiNavigation size={20} /> },
    { path: '/icons', label: 'Icons', icon: <FiSmile size={20} /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          className="mobile-menu-btn"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span className="menu-icon">☰</span>
        </button>
      )}

      {/* Desktop Toggle Button */}
      {!isMobile && (
        <button 
          className="sidebar-toggle-btn"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            <MdFastfood size={28} />
            {isOpen && <span className="logo-text">FOODIE</span>}
          </Link>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${location.pathname === item.path ? 'sidebar-active' : ''}`}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {isOpen && <span className="sidebar-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          {isOpen && (
            <div className="sidebar-footer-content">
              <MdRestaurantMenu size={20} />
              <span className="footer-text">Premium</span>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;