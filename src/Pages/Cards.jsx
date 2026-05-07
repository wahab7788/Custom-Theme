// src/pages/Cards.jsx
import  { useState } from 'react';
import { FiCopy, FiCheck, FiStar, FiClock, FiDollarSign } from 'react-icons/fi';
import { GiHamburger, GiPizzaSlice, GiFrenchFries, GiChickenLeg } from 'react-icons/gi';

const Cards = () => {
  const [copiedCard, setCopiedCard] = useState(null);

  // Full JSX code copy karne ke liye
  const copyJSXToClipboard = async (jsxCode, cardId) => {
    try {
      await navigator.clipboard.writeText(jsxCode);
      setCopiedCard(cardId);
      setTimeout(() => setCopiedCard(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Get cuisine icon
  const getCuisineIcon = (cuisine) => {
    switch(cuisine) {
      case 'Fast Food': return <GiFrenchFries size={14} />;
      case 'Pizza': return <GiPizzaSlice size={14} />;
      case 'Burgers': return <GiHamburger size={14} />;
      case 'BBQ': return <GiChickenLeg size={14} />;
      default: return <GiHamburger size={14} />;
    }
  };

  const restaurants = [
    {
      id: 1,
      name: 'KFC',
      cuisine: 'Fast Food',
      rating: 4.6,
      delivery: '20-30 min',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=200&fit=crop',
      offer: '20% OFF',
      featured: true
    },
    {
      id: 2,
      name: "Domino's Pizza",
      cuisine: 'Pizza',
      rating: 4.4,
      delivery: '25-35 min',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=200&fit=crop',
      offer: 'Buy 1 Get 1',
      featured: false
    },
    {
      id: 3,
      name: 'Pizza Hut',
      cuisine: 'Pizza',
      rating: 4.3,
      delivery: '20-30 min',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=200&fit=crop',
      offer: 'Free Delivery',
      featured: false
    },
    {
      id: 4,
      name: "McDonald's",
      cuisine: 'Burgers',
      rating: 4.2,
      delivery: '20-30 min',
      price: '$',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop',
      offer: '30% OFF',
      featured: true
    },
    {
      id: 5,
      name: 'Smoke House BBQ',
      cuisine: 'BBQ',
      rating: 4.7,
      delivery: '35-45 min',
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1529694157873-4e0c9f6e7d9b?w=400&h=200&fit=crop',
      offer: 'Special Deal',
      featured: false
    },
    {
      id: 6,
      name: 'Burger King',
      cuisine: 'Burgers',
      rating: 4.1,
      delivery: '15-25 min',
      price: '$',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=200&fit=crop',
      offer: '50% OFF',
      featured: true
    }
  ];

  // Function to generate JSX code for each card
  const getCardJSX = (rest) => {
    return `<div className="restaurant-card">
  <div className="card-image">
    <img src="${rest.image}" alt="${rest.name}" />
    <div className="offer-badge">${rest.offer}</div>
    ${rest.featured ? '<div className="featured-badge">Featured</div>' : ''}
  </div>
  <div className="card-content">
    <div className="card-header">
      <h3 className="card-restaurant-name">${rest.name}</h3>
      <div className="card-rating"><FiStar /> ${rest.rating}</div>
    </div>
    <div className="card-info">
      <span className="card-info-item">🍔 ${rest.cuisine}</span>
      <span className="card-info-item">⏱️ ${rest.delivery}</span>
      <span className="card-info-item">💰 ${rest.price}</span>
    </div>
    <p className="card-text">Experience the best ${rest.cuisine} in town with amazing deals and quick delivery!</p>
    <div className="price-tag">Starting from $9.99</div>
    <div className="card-actions">
      <button className="btn btn-primary btn-sm">View Menu</button>
      <button className="btn btn-outline btn-sm">Order Now</button>
    </div>
  </div>
</div>`;
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Restaurant Cards
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Click "Copy JSX Code" button below each card to copy the complete React component code
        </p>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="cards-container">
        {restaurants.map((rest) => (
          <div key={rest.id} style={{ position: 'relative' }}>
            {/* Card */}
            <div className="restaurant-card">
              {/* Card Image with Offer Badge */}
              <div className="card-image">
                <img src={rest.image} alt={rest.name} />
                <div className="offer-badge">{rest.offer}</div>
                {rest.featured && (
                  <div className="featured-badge">
                    <FiStar size={12} /> Featured
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-restaurant-name">{rest.name}</h3>
                  <div className="card-rating">
                    <FiStar size={14} /> {rest.rating}
                  </div>
                </div>

                <div className="card-info">
                  <span className="card-info-item">
                    {getCuisineIcon(rest.cuisine)} {rest.cuisine}
                  </span>
                  <span className="card-info-item">
                    <FiClock size={14} /> {rest.delivery}
                  </span>
                  <span className="card-info-item">
                    <FiDollarSign size={14} /> {rest.price}
                  </span>
                </div>

                <p className="card-text">
                  Experience the best {rest.cuisine} in town with amazing deals and quick delivery!
                </p>

                <div className="price-tag">
                  Starting from $9.99
                </div>

                <div className="card-actions">
                  <button className="btn btn-primary btn-sm">
                    View Menu
                  </button>
                  <button className="btn btn-outline btn-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Copy Button - Card ke bahar */}
            <div style={{ 
              marginTop: 'var(--spacing-3)',
              textAlign: 'center'
            }}>
              <button 
                onClick={() => copyJSXToClipboard(getCardJSX(rest), rest.id)}
                style={{
                  background: copiedCard === rest.id ? 'var(--secondary)' : 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: 'var(--spacing-2) var(--spacing-4)',
                  borderRadius: 'var(--radius)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                  transition: 'all 0.2s',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseEnter={(e) => {
                  if (copiedCard !== rest.id) {
                    e.target.style.background = 'var(--primary-dark)';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (copiedCard !== rest.id) {
                    e.target.style.background = 'var(--primary)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {copiedCard === rest.id ? (
                  <>
                    <FiCheck size={16} /> JSX Code Copied!
                  </>
                ) : (
                  <>
                    <FiCopy size={16} /> Copy JSX Code
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Code Preview Section - Shows what will be copied */}
      <div className="section" style={{ marginTop: 'var(--spacing-8)', background: 'var(--gray-100)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>What Gets Copied?</h3>
        <p style={{ marginBottom: 'var(--spacing-4)', color: 'var(--text-light)' }}>
          When you click "Copy JSX Code" button, the complete React component code will be copied to your clipboard:
        </p>
        
        <div style={{ 
          background: 'var(--dark)', 
          color: 'var(--light)', 
          padding: 'var(--spacing-4)', 
          borderRadius: 'var(--radius)',
          overflow: 'auto',
          maxHeight: '400px'
        }}>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px' }}>
            <code>{`// Example of copied code for KFC card:
<div className="restaurant-card">
  <div className="card-image">
    <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=200&fit=crop" alt="KFC" />
    <div className="offer-badge">20% OFF</div>
    <div className="featured-badge">Featured</div>
  </div>
  <div className="card-content">
    <div className="card-header">
      <h3 className="card-restaurant-name">KFC</h3>
      <div className="card-rating">⭐ 4.6</div>
    </div>
    <div className="card-info">
      <span className="card-info-item">🍔 Fast Food</span>
      <span className="card-info-item">⏱️ 20-30 min</span>
      <span className="card-info-item">💰 $$</span>
    </div>
    <p className="card-text">Experience the best Fast Food in town with amazing deals and quick delivery!</p>
    <div className="price-tag">Starting from $9.99</div>
    <div className="card-actions">
      <button className="btn btn-primary btn-sm">View Menu</button>
      <button className="btn btn-outline btn-sm">Order Now</button>
    </div>
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>

      {/* CSS Classes Reference */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Required CSS Classes</h3>
        <p style={{ marginBottom: 'var(--spacing-4)', color: 'var(--text-light)' }}>
          Make sure these CSS classes are in your theme.css file:
        </p>
        
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Card Classes</h4>
              <code>.restaurant-card</code><br />
              <code>.card-image</code><br />
              <code>.card-content</code><br />
              <code>.card-header</code><br />
              <code>.card-restaurant-name</code><br />
              <code>.card-rating</code>
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Badge Classes</h4>
              <code>.offer-badge</code><br />
              <code>.featured-badge</code><br />
              <code>.badge-featured</code><br />
              <code>.badge-new</code><br />
              <code>.badge-discount</code><br />
              <code>.badge-delivery</code>
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Other Classes</h4>
              <code>.card-info</code><br />
              <code>.card-info-item</code><br />
              <code>.price-tag</code><br />
              <code>.card-actions</code><br />
              <code>.btn</code><br />
              <code>.btn-primary</code>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="section" style={{ background: 'var(--gray-100)' }}>
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>How to Use</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <div>1️⃣ Click the <strong style={{ color: 'var(--primary)' }}>"Copy JSX Code"</strong> button below any card</div>
          <div>2️⃣ The complete React JSX code will be copied to your clipboard</div>
          <div>3️⃣ Paste the code in your React component file</div>
          <div>4️⃣ Make sure you have imported theme.css in your project</div>
          
          <div style={{ 
            marginTop: 'var(--spacing-4)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong>Example Usage:</strong>
            <pre style={{ marginTop: 'var(--spacing-2)', overflow: 'auto', background: 'var(--gray-100)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)' }}>
              <code>{`import React from 'react';
import './theme.css';

const MyCard = () => {
  return (
    // Paste the copied JSX code here
    <div className="restaurant-card">
      ...
    </div>
  );
};

export default MyCard;`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;