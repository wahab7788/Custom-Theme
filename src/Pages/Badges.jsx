// src/pages/Badges.jsx
import  { useState } from 'react';
import { 
  FiStar, FiTag,  FiCoffee, FiClock, 
  FiTrendingUp, FiAward, FiCopy, FiCheck,  FiHeart,
  FiShoppingBag, FiGift
} from 'react-icons/fi';

const Badges = () => {
  const [copiedBadge, setCopiedBadge] = useState(null);

  const copyToClipboard = async (code, badgeId) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedBadge(badgeId);
      setTimeout(() => setCopiedBadge(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Badge categories with codes
  const badgeCategories = [
    {
      title: "Featured Badges",
      badges: [
        { name: 'Featured', class: 'badge-featured', code: '<span class="badge badge-featured">Featured</span>' },
        { name: 'New', class: 'badge-new', code: '<span class="badge badge-new">New</span>' },
        { name: 'Popular', class: 'badge-popular', code: '<span class="badge badge-popular">Popular</span>' },
        { name: 'Trending', class: 'badge-featured', code: '<span class="badge badge-featured">Trending</span>' }
      ]
    },
    {
      title: "Discount Badges",
      badges: [
        { name: '20% OFF', class: 'badge-discount', code: '<span class="badge badge-discount">20% OFF</span>' },
        { name: '30% OFF', class: 'badge-discount', code: '<span class="badge badge-discount">30% OFF</span>' },
        { name: 'Buy 1 Get 1', class: 'badge-discount', code: '<span class="badge badge-discount">Buy 1 Get 1</span>' },
        { name: 'Free Shipping', class: 'badge-discount', code: '<span class="badge badge-discount">Free Shipping</span>' }
      ]
    },
    {
      title: "Delivery Badges",
      badges: [
        { name: 'Free Delivery', class: 'badge-delivery', code: '<span class="badge badge-delivery">Free Delivery</span>' },
        { name: 'Express', class: 'badge-delivery', code: '<span class="badge badge-delivery">Express</span>' },
        { name: 'Pickup', class: 'badge-delivery', code: '<span class="badge badge-delivery">Pickup</span>' },
        { name: 'Dine In', class: 'badge-delivery', code: '<span class="badge badge-delivery">Dine In</span>' }
      ]
    },
    {
      title: "Special Badges",
      badges: [
        { name: 'Limited Time', class: 'badge-featured', code: '<span class="badge badge-featured">Limited Time</span>' },
        { name: 'Best Seller', class: 'badge-popular', code: '<span class="badge badge-popular">Best Seller</span>' },
        { name: 'Veg', class: 'badge-new', code: '<span class="badge badge-new">Veg</span>' },
        { name: 'Spicy', class: 'badge-discount', code: '<span class="badge badge-discount">Spicy</span>' }
      ]
    }
  ];

  const restaurants = [
    { name: 'KFC', rating: 4.6, delivery: '20-30 min', offer: '20% OFF', featured: true, popular: false },
    { name: "Domino's Pizza", rating: 4.4, delivery: '25-35 min', offer: 'Buy 1 Get 1', featured: false, popular: true },
    { name: 'Pizza Hut', rating: 4.3, delivery: '20-30 min', offer: 'Free Delivery', featured: false, popular: false },
    { name: "McDonald's", rating: 4.2, delivery: '15-25 min', offer: '30% OFF', featured: true, popular: false },
    { name: 'Burger King', rating: 4.1, delivery: '15-25 min', offer: '50% OFF', featured: false, popular: true },
    { name: 'Taco Bell', rating: 4.0, delivery: '20-30 min', offer: 'Limited Time', featured: false, popular: false }
  ];

  const getRestaurantCardCode = (rest) => {
    return `<div className="restaurant-badge-card">
  <div className="badge-card-image">
    <img src="https://via.placeholder.com/300x150" alt="${rest.name}" />
    <div className="offer-badge">${rest.offer}</div>
    ${rest.featured ? '<div className="featured-badge">Featured</div>' : ''}
  </div>
  <div className="badge-card-content">
    <div className="flex justify-between">
      <h4>${rest.name}</h4>
      <div className="badge-card-rating">⭐ ${rest.rating}</div>
    </div>
    <div className="flex gap-2" style={{ marginTop: '8px' }}>
      <span className="badge badge-delivery">${rest.delivery}</span>
      ${rest.popular ? '<span className="badge badge-popular">Popular</span>' : ''}
    </div>
  </div>
</div>`;
  };

  const getFoodIcon = (name) => {
    switch(name) {
      case 'KFC': return <FiCoffee size={32} />;
      case "Domino's Pizza": return <FiShoppingBag size={32} />;
      case 'Pizza Hut': return <FiTag size={32} />;
      case "McDonald's": return <FiHeart size={32} />;
      case 'Burger King': return <FiAward size={32} />;
      default: return <FiGift size={32} />;
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Badges & Labels
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Beautiful badges for notifications, discounts, delivery status, and special offers
        </p>
      </div>

      {/* All Badges Showcase */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-6)' }}>Badge Collection</h3>
        
        {badgeCategories.map((category, catIdx) => (
          <div key={catIdx} style={{ marginBottom: 'var(--spacing-8)' }}>
            <h4 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--primary)' }}>{category.title}</h4>
            <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
              {category.badges.map((badge, idx) => (
                <div key={idx} className="badge-demo-card" style={{
                  border: '1px solid var(--gray-200)',
                  borderRadius: 'var(--radius)',
                  padding: 'var(--spacing-4)',
                  background: 'var(--white)',
                  textAlign: 'center',
                  minWidth: '140px'
                }}>
                  <div style={{ marginBottom: 'var(--spacing-3)' }}>
                    <span className={`badge ${badge.class}`}>{badge.name}</span>
                  </div>
                  <code style={{ 
                    fontSize: '11px', 
                    background: 'var(--gray-100)', 
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    display: 'block',
                    marginBottom: '8px',
                    wordBreak: 'break-all'
                  }}>
                    {badge.code}
                  </code>
                  <button
                    onClick={() => copyToClipboard(badge.code, badge.name)}
                    style={{
                      background: copiedBadge === badge.name ? 'var(--secondary)' : 'var(--primary)',
                      color: 'white',
                      border: 'none',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '11px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {copiedBadge === badge.name ? <><FiCheck size={10} /> Copied!</> : <><FiCopy size={10} /> Copy</>}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant Cards with Badges */}
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-6)' }}>
          <h3 style={{ margin: 0 }}>Restaurant Cards with Badges</h3>
          <button 
            onClick={() => copyToClipboard(`<div className="restaurant-badge-card">...</div>`, 'all-cards')}
            style={{
              background: copiedBadge === 'all-cards' ? 'var(--secondary)' : 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: 'var(--spacing-2) var(--spacing-4)',
              borderRadius: 'var(--radius)',
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {copiedBadge === 'all-cards' ? <><FiCheck size={14} /> Copied!</> : <><FiCopy size={14} /> Copy Card Code</>}
          </button>
        </div>

        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          {restaurants.map((rest, idx) => (
            <div key={idx} style={{ gridColumn: 'span 4' }}>
              <div className="restaurant-badge-card" style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.3s ease'
              }}>
                {/* Card Image with Badges */}
                <div style={{ 
                  position: 'relative', 
                  height: '160px', 
                  background: `linear-gradient(135deg, var(--primary), var(--primary-dark))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getFoodIcon(rest.name)}
                  
                  {/* Offer Badge */}
                  <div className="offer-badge" style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'linear-gradient(135deg, #FF416C, #FF4B2B)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {rest.offer}
                  </div>
                  
                  {/* Featured Badge */}
                  {rest.featured && (
                    <div className="featured-badge" style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <FiStar size={12} /> Featured
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: 'var(--spacing-4)' }}>
                  <div className="flex justify-between" style={{ marginBottom: 'var(--spacing-2)' }}>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{rest.name}</h4>
                    <div className="badge-card-rating" style={{
                      background: 'var(--gray-100)',
                      padding: '4px 8px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <FiStar size={10} /> {rest.rating}
                    </div>
                  </div>
                  
                  <div className="flex gap-2" style={{ marginTop: '12px', flexWrap: 'wrap' }}>
                    <span className="badge badge-delivery" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiClock size={10} /> {rest.delivery}
                    </span>
                    {rest.popular && <span className="badge badge-popular" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiTrendingUp size={10} /> Popular
                    </span>}
                    <span className="badge badge-new" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <FiCheck size={10} /> Verified
                    </span>
                  </div>

                  <div className="flex gap-2" style={{ marginTop: '12px' }}>
                    <button className="btn btn-primary btn-sm">View Menu</button>
                    <button 
                      onClick={() => copyToClipboard(getRestaurantCardCode(rest), `card-${idx}`)}
                      className="copy-btn-small"
                      style={{
                        background: copiedBadge === `card-${idx}` ? 'var(--secondary)' : 'var(--gray-200)',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '11px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {copiedBadge === `card-${idx}` ? <><FiCheck size={10} /> Copied</> : <><FiCopy size={10} /> Copy</>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Sizes Variations */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Badge Sizes</h3>
        <div className="flex gap-4" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <span className="badge badge-featured" style={{ fontSize: '10px', padding: '2px 8px' }}>Extra Small</span>
            <p className="text-small text-muted" style={{ marginTop: '4px' }}>XS (10px)</p>
          </div>
          <div>
            <span className="badge badge-featured" style={{ fontSize: '12px', padding: '4px 12px' }}>Small</span>
            <p className="text-small text-muted" style={{ marginTop: '4px' }}>SM (12px)</p>
          </div>
          <div>
            <span className="badge badge-featured" style={{ fontSize: '14px', padding: '6px 16px' }}>Default</span>
            <p className="text-small text-muted" style={{ marginTop: '4px' }}>MD (14px)</p>
          </div>
          <div>
            <span className="badge badge-featured" style={{ fontSize: '16px', padding: '8px 20px' }}>Large</span>
            <p className="text-small text-muted" style={{ marginTop: '4px' }}>LG (16px)</p>
          </div>
        </div>
      </div>

      {/* Interactive Badge Demo */}
      <div className="section" style={{ background: 'var(--gray-100)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Interactive Badge Demo</h3>
        <p style={{ marginBottom: 'var(--spacing-4)' }}>Click on badges to copy their code:</p>
        
        <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
          {['Featured', 'New', 'Popular', '20% OFF', 'Free Delivery', 'Pickup'].map((badge, idx) => {
            let badgeClass = 'badge-featured';
            if (badge === 'New') badgeClass = 'badge-new';
            else if (badge === 'Popular') badgeClass = 'badge-popular';
            else if (badge === '20% OFF') badgeClass = 'badge-discount';
            else if (badge === 'Free Delivery' || badge === 'Pickup') badgeClass = 'badge-delivery';
            
            return (
              <span
                key={idx}
                className={`badge ${badgeClass}`}
                onClick={() => copyToClipboard(`<span class="badge ${badgeClass}">${badge}</span>`, `interactive-${idx}`)}
                style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                {badge} {copiedBadge === `interactive-${idx}` && <FiCheck size={10} style={{ marginLeft: '4px' }} />}
              </span>
            );
          })}
        </div>
      </div>

      {/* CSS Classes Reference */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Badge CSS Classes</h3>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.badge</code>
              <p className="text-small text-muted">Base badge class</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.badge-featured</code>
              <p className="text-small text-muted">Orange gradient</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.badge-new</code>
              <p className="text-small text-muted">Green badge</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.badge-popular</code>
              <p className="text-small text-muted">Yellow badge</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.badge-discount</code>
              <p className="text-small text-muted">Red badge</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <code>.badge-delivery</code>
              <p className="text-small text-muted">Gray badge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="section" style={{ background: 'var(--gray-100)' }}>
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>How to Use Badges</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <div><strong>Step 1:</strong> Click the <strong style={{ color: 'var(--primary)' }}>"Copy"</strong> button on any badge</div>
          <div><strong>Step 2:</strong> Paste the code in your HTML/JSX file</div>
          <div><strong>Step 3:</strong> Make sure theme.css is imported</div>
          <div><strong>Step 4:</strong> Customize text as needed</div>

          <div style={{ 
            marginTop: 'var(--spacing-4)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong>Basic Usage:</strong>
            <pre style={{ marginTop: 'var(--spacing-2)', overflow: 'auto', background: 'var(--gray-100)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)' }}>
              <code>{`<!-- Basic Badge -->
<span className="badge badge-featured">Featured</span>

<!-- With Custom Text -->
<span className="badge badge-discount">50% OFF</span>

<!-- Multiple Badges -->
<div className="flex gap-2">
  <span className="badge badge-new">New</span>
  <span className="badge badge-popular">Popular</span>
</div>`}</code>
            </pre>
          </div>

          <div style={{ 
            marginTop: 'var(--spacing-2)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--secondary)'
          }}>
            <strong>Pro Tips:</strong>
            <ul style={{ marginTop: 'var(--spacing-2)', marginLeft: 'var(--spacing-4)' }}>
              <li>Use <code>.flex</code> and <code>.gap-2</code> for badge groups</li>
              <li>Combine with cards for restaurant listings</li>
              <li>Adjust font-size for different badge sizes</li>
              <li>Badges are fully responsive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;