// src/pages/Icons.jsx
// import React from 'react';

const Icons = () => {
  const icons = [
    { name: 'Search', icon: '🔍' },
    { name: 'User', icon: '👤' },
    { name: 'Cart', icon: '🛒' },
    { name: 'Heart', icon: '❤️' },
    { name: 'Star', icon: '⭐' },
    { name: 'Location', icon: '📍' },
    { name: 'Phone', icon: '📞' },
    { name: 'Email', icon: '✉️' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Clock', icon: '⏰' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Bell', icon: '🔔' },
    { name: 'Home', icon: '🏠' },
    { name: 'Menu', icon: '🍔' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Coffee', icon: '☕' },
  ];

  return (
    <div>
      <h2>Icons</h2>
      <div className="section">
        <div className="grid">
          {icons.map((icon, idx) => (
            <div key={idx} className="card" style={{ gridColumn: 'span 2', textAlign: 'center' }}>
              <div className="card-body">
                <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-2)' }}>{icon.icon}</div>
                <p className="text-small text-muted">{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h4>Icon Usage Examples</h4>
        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          <button className="btn btn-primary">🔍 Search</button>
          <button className="btn btn-secondary">🛒 Add to Cart</button>
          <button className="btn btn-outline">❤️ Wishlist</button>
          <div className="input-group" style={{ width: '300px' }}>
            <input type="text" className="form-control" placeholder="Search..." />
            <span className="input-group-addon">🔍</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;