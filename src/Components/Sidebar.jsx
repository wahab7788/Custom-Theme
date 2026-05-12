// src/components/Sidebar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
   FiEdit, FiGrid, FiImage, FiList, FiBell, FiTag, 
  FiNavigation, FiSmile, FiUser, FiSettings, FiLogOut, 
  FiHelpCircle, FiStar, FiTrendingUp, FiPieChart, FiChevronLeft, 
  FiChevronRight, FiChevronDown, FiChevronUp, FiFileText, 
  FiCheckSquare, FiSliders, FiType, FiCalendar, FiUpload,
  FiHeart, FiThumbsUp,
} from 'react-icons/fi';
import { MdFastfood, MdRestaurantMenu, MdDashboard } from 'react-icons/md';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenSubmenu(null);
    }
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  // Check if any submenu item is active
  const isSubmenuActive = (submenu) => {
    return submenu.some(item => location.pathname === item.path);
  };

  // ========== MENU STRUCTURE (No Components wrapper) ==========
  
  // 1. Dashboard
  const dashboardMenu = {
    path: '/',
    label: 'Dashboard',
    icon: <MdDashboard size={20} />,
    isSingle: true
  };

  // 2. Form UI Elements (with submenu)
  const formMenu = {
    label: 'Form UI Elements',
    icon: <FiEdit size={20} />,
    submenu: [
      { path: '/forms', label: 'Basic Forms', icon: <FiFileText size={16} /> },
      { path: '/forms/inputs', label: 'Input Fields', icon: <FiType size={16} /> },
      { path: '/forms/validation', label: 'Form Validation', icon: <FiCheckSquare size={16} /> },
      { path: '/forms/select', label: 'Select & Dropdown', icon: <FiSliders size={16} /> },
      { path: '/forms/datepicker', label: 'Date Picker', icon: <FiCalendar size={16} /> },
      { path: '/forms/fileupload', label: 'File Upload', icon: <FiUpload size={16} /> },
    ]
  };

  // 3. Button UI Elements
  const buttonMenu = {
    label: 'Button UI Elements',
    icon: <FiGrid size={20} />,
    submenu: [
      { path: '/buttons', label: 'Basic Buttons', icon: <FiGrid size={16} /> },
      { path: '/buttons/icon', label: 'Icon Buttons', icon: <FiHeart size={16} /> },
      { path: '/buttons/group', label: 'Button Groups', icon: <FiThumbsUp size={16} /> },
      { path: '/buttons/dropdown', label: 'Dropdown Buttons', icon: <FiChevronDown size={16} /> },
    ]
  };

  // 4. Cards UI Elements
  const cardsMenu = {
    label: 'Cards UI Elements',
    icon: <FiImage size={20} />,
    submenu: [
      { path: '/cards', label: 'Basic Cards', icon: <FiImage size={16} /> },
      { path: '/cards/advanced', label: 'Advanced Cards', icon: <FiStar size={16} /> },
      { path: '/cards/hover', label: 'Hover Cards', icon: <FiSmile size={16} /> },
    ]
  };

  // 5. Data Display Elements
  const dataMenu = {
    label: 'Data Display',
    icon: <FiList size={20} />,
    submenu: [
      { path: '/tables', label: 'Basic Tables', icon: <FiList size={16} /> },
      { path: '/tables/advanced', label: 'Advanced Tables', icon: <FiNavigation size={16} /> },
      { path: '/badges', label: 'Badges & Tags', icon: <FiTag size={16} /> },
      { path: '/alerts', label: 'Alerts & Notifications', icon: <FiBell size={16} /> },
      { path: '/pagination', label: 'Pagination', icon: <FiNavigation size={16} /> },
    ]
  };

  // 6. Analytics
  const analyticsMenu = {
    label: 'Analytics',
    icon: <FiPieChart size={20} />,
    submenu: [
      { path: '/analytics/overview', label: 'Overview', icon: <FiTrendingUp size={16} /> },
      { path: '/analytics/reports', label: 'Reports', icon: <FiStar size={16} /> },
    ]
  };

  // Bottom Menu Items
  const bottomMenuItems = [
    { path: '/profile', label: 'Profile', icon: <FiUser size={20} />, isSingle: true },
    { path: '/settings', label: 'Settings', icon: <FiSettings size={20} />, isSingle: true },
    { path: '/help', label: 'Help', icon: <FiHelpCircle size={20} />, isSingle: true },
    { path: '/logout', label: 'Logout', icon: <FiLogOut size={20} />, isSingle: true },
  ];

  // Render Menu Item (Single)
  const renderSingleMenuItem = (item) => (
    <Link
      key={item.path}
      to={item.path}
      className={`sidebar-item ${location.pathname === item.path ? 'sidebar-active' : ''}`}
      onClick={() => isMobile && setIsOpen(false)}
    >
      <span className="sidebar-icon">{item.icon}</span>
      {isOpen && <span className="sidebar-label">{item.label}</span>}
    </Link>
  );

  // Render Parent Menu with Submenu
  const renderParentMenu = (menu, menuKey) => (
    <div key={menuKey} className="sidebar-item-parent">
      <div 
        className={`sidebar-item-parent-trigger ${isSubmenuActive(menu.submenu) ? 'sidebar-active-parent' : ''}`}
        onClick={() => isOpen && toggleSubmenu(menuKey)}
        style={{ cursor: isOpen ? 'pointer' : 'default' }}
      >
        <span className="sidebar-icon">{menu.icon}</span>
        {isOpen && (
          <>
            <span className="sidebar-label">{menu.label}</span>
            <span className="sidebar-arrow">
              {openSubmenu === menuKey ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
            </span>
          </>
        )}
      </div>
      
      <div className={`sidebar-submenu-wrapper ${isOpen && openSubmenu === menuKey ? 'submenu-open' : ''}`}>
        <div className="sidebar-submenu">
          {menu.submenu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-submenu-item ${location.pathname === item.path ? 'sidebar-submenu-active' : ''}`}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <span className="submenu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

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
          className={`sidebar-toggle-btn ${!isOpen ? 'toggle-closed' : ''}`}
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

        <div className="sidebar-nav">
          {/* Dashboard */}
          {renderSingleMenuItem(dashboardMenu)}

          {/* Form UI Elements */}
          {renderParentMenu(formMenu, 'form')}

          {/* Button UI Elements */}
          {renderParentMenu(buttonMenu, 'button')}

          {/* Cards UI Elements */}
          {renderParentMenu(cardsMenu, 'cards')}

          {/* Data Display */}
          {renderParentMenu(dataMenu, 'data')}

          {/* Analytics */}
          {renderParentMenu(analyticsMenu, 'analytics')}
        </div>

        {/* Bottom Menu */}
        <div className="sidebar-bottom">
          {bottomMenuItems.map((item) => renderSingleMenuItem(item))}
        </div>

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