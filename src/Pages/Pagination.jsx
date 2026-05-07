// src/pages/Pagination.jsx
import React, { useState } from 'react';
import { 
  FiChevronLeft, FiChevronRight, FiCopy, FiCheck, 
  FiBookmark, FiHome, FiFolder, FiList, FiGrid, 
  FiShoppingCart, FiTruck, FiCreditCard, FiCheckCircle,
  FiArrowLeft, FiArrowRight, FiMoreHorizontal, FiStar,
  FiInfo, FiGift, FiSmile, FiMenu
} from 'react-icons/fi';

// Pagination Component - Bahar define kiya
const PaginationComponent = ({ totalPages = 10, currentPage, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    pages.push(i);
  }
  if (totalPages > 5) {
    pages.push('...');
    pages.push(totalPages);
  }

  return (
    <div className="flex gap-2" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        style={{
          padding: '8px 12px',
          background: 'var(--white)',
          border: '1px solid var(--gray-300)',
          borderRadius: 'var(--radius-sm)',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage === 1 ? 0.5 : 1,
          color: 'var(--text)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <FiChevronLeft size={14} /> Previous
      </button>
      
      {pages.map((page, idx) => (
        <button
          key={idx}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          style={{
            minWidth: '40px',
            height: '40px',
            background: currentPage === page ? 'var(--primary)' : 'var(--white)',
            color: currentPage === page ? 'white' : 'var(--text)',
            border: `1px solid ${currentPage === page ? 'var(--primary)' : 'var(--gray-300)'}`,
            borderRadius: 'var(--radius-sm)',
            cursor: typeof page === 'number' ? 'pointer' : 'default',
            fontWeight: currentPage === page ? '600' : '400',
            transition: 'all 0.2s'
          }}
        >
          {page === '...' ? <FiMoreHorizontal size={14} /> : page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        style={{
          padding: '8px 12px',
          background: 'var(--white)',
          border: '1px solid var(--gray-300)',
          borderRadius: 'var(--radius-sm)',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage === totalPages ? 0.5 : 1,
          color: 'var(--text)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        Next <FiChevronRight size={14} />
      </button>
    </div>
  );
};

const Pagination = () => {
  const [copied, setCopied] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Breadcrumb data
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Fast Food', path: '/fast-food' },
    { name: 'KFC', path: '/kfc', active: true }
  ];

  // Tab data with icons
  const tabs = [
    { name: 'Overview', count: null, icon: <FiList size={16} /> },
    { name: 'Menu', count: 24, icon: <FiMenu size={16} /> },
    { name: 'Deals', count: 3, icon: <FiGift size={16} /> },
    { name: 'Reviews', count: 128, icon: <FiStar size={16} /> },
    { name: 'About', count: null, icon: <FiInfo size={16} /> }
  ];

  // Progress steps with icons
  const steps = [
    { name: 'Cart', icon: <FiShoppingCart size={18} /> },
    { name: 'Delivery', icon: <FiTruck size={18} /> },
    { name: 'Payment', icon: <FiCreditCard size={18} /> },
    { name: 'Confirmation', icon: <FiCheckCircle size={18} /> }
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Pagination & Navigation
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Beautiful pagination, breadcrumbs, tabs, and progress indicators with copy functionality
        </p>
      </div>

      {/* Pagination Section */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Pagination</h3>
          <button
            onClick={() => copyToClipboard(
              `<div className="flex gap-2">
  <button className="pagination-nav-btn">← Previous</button>
  <button className="pagination-page-btn active">1</button>
  <button className="pagination-page-btn">2</button>
  <button className="pagination-page-btn">3</button>
  <button className="pagination-nav-btn">Next →</button>
</div>`,
              'pagination-code'
            )}
            style={{
              background: copied === 'pagination-code' ? 'var(--secondary)' : 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {copied === 'pagination-code' ? <><FiCheck size={12} /> Copied!</> : <><FiCopy size={12} /> Copy Code</>}
          </button>
        </div>

        {/* Pagination Variants */}
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--text-light)' }}>Default Pagination</h4>
          <ul className="pagination" style={{ marginBottom: 'var(--spacing-6)' }}>
            <li className="page-item"><a className="page-link" href="#"><FiChevronLeft size={14} /></a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#"><FiMoreHorizontal size={14} /></a></li>
            <li className="page-item"><a className="page-link" href="#">10</a></li>
            <li className="page-item"><a className="page-link" href="#"><FiChevronRight size={14} /></a></li>
          </ul>

          <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--text-light)' }}>Interactive Pagination</h4>
          <PaginationComponent
            totalPages={10}
            currentPage={activePage}
            onPageChange={setActivePage}
          />
          <p className="text-small text-muted" style={{ marginTop: 'var(--spacing-3)' }}>
            Showing page {activePage} of 10
          </p>
        </div>

        {/* Pagination Sizes */}
        <h4 style={{ marginBottom: 'var(--spacing-3)' }}>Pagination Sizes</h4>
        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          <div>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" style={{ padding: '4px 8px', fontSize: '12px' }}>1</a></li>
              <li className="page-item"><a className="page-link" style={{ padding: '4px 8px', fontSize: '12px' }}>2</a></li>
              <li className="page-item"><a className="page-link" style={{ padding: '4px 8px', fontSize: '12px' }}>3</a></li>
            </ul>
            <p className="text-small text-muted">Small</p>
          </div>
          <div>
            <ul className="pagination">
              <li className="page-item"><a className="page-link">1</a></li>
              <li className="page-item"><a className="page-link">2</a></li>
              <li className="page-item"><a className="page-link">3</a></li>
            </ul>
            <p className="text-small text-muted">Default</p>
          </div>
          <div>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" style={{ padding: '10px 16px', fontSize: '16px' }}>1</a></li>
              <li className="page-item"><a className="page-link" style={{ padding: '10px 16px', fontSize: '16px' }}>2</a></li>
              <li className="page-item"><a className="page-link" style={{ padding: '10px 16px', fontSize: '16px' }}>3</a></li>
            </ul>
            <p className="text-small text-muted">Large</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Breadcrumb</h3>
          <button
            onClick={() => copyToClipboard(
              `<div className="breadcrumb">
  <span>Home</span>
  <span className="breadcrumb-separator">/</span>
  <span>Restaurants</span>
  <span className="breadcrumb-separator">/</span>
  <span className="breadcrumb-active">KFC</span>
</div>`,
              'breadcrumb-code'
            )}
            style={{
              background: copied === 'breadcrumb-code' ? 'var(--secondary)' : 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {copied === 'breadcrumb-code' ? <><FiCheck size={12} /> Copied!</> : <><FiCopy size={12} /> Copy Code</>}
          </button>
        </div>

        {/* Breadcrumb Variant 1 */}
        <div style={{ marginBottom: 'var(--spacing-4)' }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--text-light)' }}>With Arrows (›)</h4>
          <div className="breadcrumb" style={{ padding: 'var(--spacing-3) 0' }}>
            {breadcrumbItems.map((item, idx) => (
              <span key={idx}>
                {idx > 0 && <span style={{ margin: '0 8px', color: 'var(--gray-400)' }}>›</span>}
                <span style={{ 
                  color: item.active ? 'var(--primary)' : 'var(--text-light)',
                  fontWeight: item.active ? '600' : '400'
                }}>
                  {item.name}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Breadcrumb Variant 2 */}
        <div style={{ marginBottom: 'var(--spacing-4)' }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--text-light)' }}>With Slashes (/)</h4>
          <div className="breadcrumb" style={{ padding: 'var(--spacing-3) 0' }}>
            <span><FiHome size={12} style={{ display: 'inline', marginRight: '4px' }} /> Home</span>
            <span style={{ margin: '0 8px', color: 'var(--gray-400)' }}>/</span>
            <span><FiFolder size={12} style={{ display: 'inline', marginRight: '4px' }} /> Top Restaurants</span>
            <span style={{ margin: '0 8px', color: 'var(--gray-400)' }}>/</span>
            <span style={{ color: 'var(--primary)', fontWeight: '600' }}><FiBookmark size={12} style={{ display: 'inline', marginRight: '4px' }} /> KFC</span>
          </div>
        </div>

        {/* Breadcrumb Variant 3 */}
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--text-light)' }}>With Dots (•)</h4>
          <div className="breadcrumb" style={{ padding: 'var(--spacing-3) 0' }}>
            <span>Home</span>
            <span style={{ margin: '0 8px', color: 'var(--gray-400)' }}>•</span>
            <span>Categories</span>
            <span style={{ margin: '0 8px', color: 'var(--gray-400)' }}>•</span>
            <span>Fast Food</span>
            <span style={{ margin: '0 8px', color: 'var(--gray-400)' }}>•</span>
            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>KFC</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Tabs</h3>
          <button
            onClick={() => copyToClipboard(
              `<div className="tabs">
  <button className="tab active">Overview</button>
  <button className="tab">Menu</button>
  <button className="tab">Deals (3)</button>
</div>`,
              'tabs-code'
            )}
            style={{
              background: copied === 'tabs-code' ? 'var(--secondary)' : 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {copied === 'tabs-code' ? <><FiCheck size={12} /> Copied!</> : <><FiCopy size={12} /> Copy Code</>}
          </button>
        </div>

        {/* Underline Tabs */}
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--text-light)' }}>Underline Tabs</h4>
          <div className="flex" style={{ borderBottom: '2px solid var(--gray-200)', gap: 'var(--spacing-2)' }}>
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '12px 20px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === idx ? '2px solid var(--primary)' : '2px solid transparent',
                  color: activeTab === idx ? 'var(--primary)' : 'var(--text-light)',
                  fontWeight: activeTab === idx ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {tab.icon}
                <span>{tab.name}</span>
                {tab.count && (
                  <span className="badge badge-delivery" style={{ fontSize: '11px', padding: '2px 6px' }}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="tab-content" style={{ padding: 'var(--spacing-4)', background: 'var(--gray-100)', borderRadius: 'var(--radius)', marginTop: 'var(--spacing-4)' }}>
            <p>Showing content for: <strong>{tabs[activeTab].name}</strong></p>
            {activeTab === 0 && <p>Restaurant overview and details...</p>}
            {activeTab === 1 && <p>Full menu with prices and descriptions...</p>}
            {activeTab === 2 && <p>Special deals and offers available...</p>}
            {activeTab === 3 && <p>Customer reviews and ratings...</p>}
            {activeTab === 4 && <p>Restaurant information and location...</p>}
          </div>
        </div>

        {/* Pill Tabs */}
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--text-light)' }}>Pill Tabs</h4>
          <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
            {['Overview', 'Menu', 'Deals', 'Reviews', 'About'].map((tab, idx) => (
              <button
                key={idx}
                style={{
                  padding: '8px 20px',
                  background: idx === 0 ? 'var(--primary)' : 'var(--gray-100)',
                  color: idx === 0 ? 'white' : 'var(--text)',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {idx === 0 && <FiGrid size={14} />}
                {idx === 1 && <FiMenu size={14} />}
                {idx === 2 && <FiGift size={14} />}
                {idx === 3 && <FiStar size={14} />}
                {idx === 4 && <FiInfo size={14} />}
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Steps Section */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Progress Steps</h3>
          <button
            onClick={() => copyToClipboard(
              `<div className="progress-steps">
  <div className="step active">
    <div className="step-number">1</div>
    <span>Cart</span>
  </div>
  <div className="step-line"></div>
  <div className="step">
    <div className="step-number">2</div>
    <span>Delivery</span>
  </div>
</div>`,
              'steps-code'
            )}
            style={{
              background: copied === 'steps-code' ? 'var(--secondary)' : 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {copied === 'steps-code' ? <><FiCheck size={12} /> Copied!</> : <><FiCopy size={12} /> Copy Code</>}
          </button>
        </div>

        {/* Interactive Progress Steps */}
        <div style={{ marginBottom: 'var(--spacing-6)' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '100%',
            marginBottom: 'var(--spacing-6)'
          }}>
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div 
                  onClick={() => setCurrentStep(idx + 1)}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: idx + 1 <= currentStep ? 'var(--primary)' : 'var(--gray-200)',
                    color: idx + 1 <= currentStep ? 'white' : 'var(--text-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s'
                  }}>
                    {idx + 1 <= currentStep ? <FiCheck size={20} /> : idx + 1}
                  </div>
                  <div style={{
                    marginTop: '8px',
                    fontWeight: idx + 1 <= currentStep ? '600' : '400',
                    color: idx + 1 <= currentStep ? 'var(--primary)' : 'var(--text-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    {step.icon} {step.name}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div style={{
                    flex: 1,
                    height: '2px',
                    background: idx + 1 < currentStep ? 'var(--primary)' : 'var(--gray-300)',
                    margin: '0 -16px'
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={{
            padding: 'var(--spacing-4)',
            background: 'var(--gray-100)',
            borderRadius: 'var(--radius)',
            textAlign: 'center'
          }}>
            <p>Current Step: <strong>{steps[currentStep - 1].name}</strong></p>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              disabled={currentStep === 4}
              style={{ marginRight: '8px' }}
            >
              Next Step <FiArrowRight size={12} />
            </button>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              <FiArrowLeft size={12} /> Previous Step
            </button>
          </div>
        </div>

        {/* Simple Progress Steps */}
        <div className="flex justify-between" style={{ maxWidth: '600px' }}>
          {['Cart', 'Delivery', 'Payment', 'Confirmation'].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center" style={{ flex: 1 }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: idx <= 1 ? 'var(--primary)' : 'var(--gray-300)',
                color: idx <= 1 ? 'white' : 'var(--text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {idx + 1}
              </div>
              <span className="text-small" style={{ marginTop: 'var(--spacing-2)' }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Classes Reference */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>CSS Classes Reference</h3>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Pagination</h4>
              <code>.pagination</code><br />
              <code>.page-item</code><br />
              <code>.page-link</code>
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Breadcrumb & Tabs</h4>
              <code>.breadcrumb</code><br />
              <code>.tab-content</code>
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Progress Steps</h4>
              <code>.step</code><br />
              <code>.step-content</code>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="section" style={{ background: 'var(--gray-100)' }}>
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>How to Use</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <div><strong>Step 1:</strong> Click <strong style={{ color: 'var(--primary)' }}>"Copy Code"</strong> button on any component</div>
          <div><strong>Step 2:</strong> Paste the code in your React component</div>
          <div><strong>Step 3:</strong> Customize the data and styles as needed</div>
          <div><strong>Step 4:</strong> Make sure theme.css is imported</div>

          <div style={{ 
            marginTop: 'var(--spacing-4)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong><FiSmile size={14} style={{ display: 'inline', marginRight: '4px' }} /> Features:</strong>
            <ul style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
              <li>Interactive pagination with previous/next buttons</li>
              <li>Multiple breadcrumb styles (arrows, slashes, dots)</li>
              <li>Underline and pill tabs with content switching</li>
              <li>Progress steps with interactive navigation</li>
              <li>Copy code functionality for all components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;