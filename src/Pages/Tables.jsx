// src/pages/Tables.jsx
import  { useState } from 'react';
import { FiCopy, FiCheck, FiStar, FiClock, FiDollarSign,  FiBarChart2, FiUsers, FiClock as FiClockIcon } from 'react-icons/fi';

const Tables = () => {
  const [copiedTable, setCopiedTable] = useState(null);

  // Copy function for table HTML/JSX code
  const copyTableCode = async (code, tableId) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedTable(tableId);
      setTimeout(() => setCopiedTable(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Restaurant Data
  const restaurants = [
    { id: 1, name: 'KFC', cuisine: 'Fast Food', rating: 4.6, delivery: '20-30 min', status: 'Active', orders: 1250, revenue: '₹45,200' },
    { id: 2, name: "Domino's Pizza", cuisine: 'Pizza', rating: 4.4, delivery: '25-35 min', status: 'Active', orders: 980, revenue: '₹38,500' },
    { id: 3, name: 'Pizza Hut', cuisine: 'Pizza', rating: 4.3, delivery: '20-30 min', status: 'Active', orders: 1150, revenue: '₹42,800' },
    { id: 4, name: "McDonald's", cuisine: 'Burgers', rating: 4.2, delivery: '20-30 min', status: 'Inactive', orders: 890, revenue: '₹32,400' },
    { id: 5, name: 'Smoke House BBQ', cuisine: 'BBQ', rating: 4.7, delivery: '35-45 min', status: 'Active', orders: 650, revenue: '₹28,900' },
    { id: 6, name: 'Burger King', cuisine: 'Burgers', rating: 4.1, delivery: '15-25 min', status: 'Active', orders: 1100, revenue: '₹39,600' },
    { id: 7, name: 'Taco Bell', cuisine: 'Mexican', rating: 4.0, delivery: '20-30 min', status: 'Inactive', orders: 540, revenue: '₹22,300' },
    { id: 8, name: 'Starbucks', cuisine: 'Coffee', rating: 4.8, delivery: '10-15 min', status: 'Active', orders: 2100, revenue: '₹67,800' }
  ];

  // Orders Data
  const recentOrders = [
    { id: 'ORD-001', customer: 'Ahmed Raza', item: 'Zinger Burger', amount: '₹650', status: 'Completed', date: '2024-05-26' },
    { id: 'ORD-002', customer: 'Sara Khan', item: 'Chicken Pizza', amount: '₹1190', status: 'Pending', date: '2024-05-26' },
    { id: 'ORD-003', customer: 'Ali Raza', item: 'Family Bucket', amount: '₹2450', status: 'On The Way', date: '2024-05-25' },
    { id: 'ORD-004', customer: 'Fatima', item: 'Zinger Meal', amount: '₹850', status: 'Completed', date: '2024-05-25' },
    { id: 'ORD-005', customer: 'Omar', item: 'BBQ Platter', amount: '₹3200', status: 'Cancelled', date: '2024-05-24' }
  ];

  // Generate Table 1 JSX Code
  const getRestaurantTableCode = () => {
    return `<table className="table table-hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Restaurant</th>
      <th>Cuisine</th>
      <th>Rating</th>
      <th>Delivery</th>
      <th>Orders</th>
      <th>Revenue</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {restaurants.map((rest) => (
      <tr key={rest.id} className="table-row">
        <td>{rest.id}</td>
        <td>{rest.name}</td>
        <td>{rest.cuisine}</td>
        <td>⭐ {rest.rating}</td>
        <td>{rest.delivery}</td>
        <td>{rest.orders}</td>
        <td>{rest.revenue}</td>
        <td><span className="badge badge-new">{rest.status}</span></td>
      </tr>
    ))}
  </tbody>
</table>`;
  };

  // Generate Table 2 JSX Code
  const getOrdersTableCode = () => {
    return `<table className="table">
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Item</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {recentOrders.map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.customer}</td>
        <td>{order.item}</td>
        <td>{order.amount}</td>
        <td>{order.date}</td>
        <td>
          <span className={\`badge \${order.status === 'Completed' ? 'badge-featured' : 
            order.status === 'Pending' ? 'badge-new' : 
            order.status === 'On The Way' ? 'badge-popular' : 'badge-discount'}\`}>
            {order.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>`;
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: 'var(--spacing-2)' }}>
          Data Tables
        </h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem' }}>
          Professional data tables with sortable columns, status badges, and copy-to-clipboard functionality
        </p>
      </div>

      {/* Table 1: Restaurant Data Table */}
      <div className="section" style={{ marginBottom: 'var(--spacing-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Restaurant Directory</h3>
          <button 
            onClick={() => copyTableCode(getRestaurantTableCode(), 'table1')}
            style={{
              background: copiedTable === 'table1' ? 'var(--secondary)' : 'var(--primary)',
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
            {copiedTable === 'table1' ? (
              <><FiCheck size={16} /> Code Copied!</>
            ) : (
              <><FiCopy size={16} /> Copy Table Code</>
            )}
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Restaurant</th>
                <th>Cuisine</th>
                <th>Rating</th>
                <th>Delivery</th>
                <th>Orders</th>
                <th>Revenue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((rest) => (
                <tr key={rest.id} className="table-row">
                  <td>{rest.id}</td>
                  <td><strong>{rest.name}</strong></td>
                  <td>{rest.cuisine}</td>
                  <td><FiStar size={12} style={{ display: 'inline', marginRight: '4px' }} /> {rest.rating}</td>
                  <td><FiClock size={12} style={{ display: 'inline', marginRight: '4px' }} /> {rest.delivery}</td>
                  <td>{rest.orders.toLocaleString()}</td>
                  <td>{rest.revenue}</td>
                  <td>
                    <span className={`badge ${rest.status === 'Active' ? 'badge-new' : 'badge-discount'}`}>
                      {rest.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between" style={{ marginTop: 'var(--spacing-4)' }}>
          <span className="text-muted text-small">Showing 1 to {restaurants.length} of {restaurants.length} results</span>
          <div className="pagination">
            <button className="page-link">←</button>
            <button className="page-link active">1</button>
            <button className="page-link">2</button>
            <button className="page-link">→</button>
          </div>
        </div>
      </div>

      {/* Table 2: Recent Orders Table */}
      <div className="section" style={{ marginBottom: 'var(--spacing-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Recent Orders</h3>
          <button 
            onClick={() => copyTableCode(getOrdersTableCode(), 'table2')}
            style={{
              background: copiedTable === 'table2' ? 'var(--secondary)' : 'var(--primary)',
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
            {copiedTable === 'table2' ? (
              <><FiCheck size={16} /> Code Copied!</>
            ) : (
              <><FiCopy size={16} /> Copy Table Code</>
            )}
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Item</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="table-row">
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.item}</td>
                  <td>{order.amount}</td>
                  <td>{order.date}</td>
                  <td>
                    <span className={`badge ${
                      order.status === 'Completed' ? 'badge-featured' : 
                      order.status === 'Pending' ? 'badge-new' : 
                      order.status === 'On The Way' ? 'badge-popular' : 'badge-discount'
                    }`}>
                      {order.status}
                    </span>
                   </td>
                 </tr>
              ))}
            </tbody>
           </table>
        </div>
      </div>

      {/* Table 3: Simple Stats Table */}
      <div className="section" style={{ marginBottom: 'var(--spacing-6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
          <h3 style={{ margin: 0 }}>Performance Stats</h3>
          <button 
            onClick={() => copyTableCode(`<table className="table">
  <thead>
    <tr>
      <th>Metric</th>
      <th>Value</th>
      <th>Change</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Total Orders</td><td>1,248</td><td className="text-success">+18.5%</td></tr>
    <tr><td>Total Revenue</td><td>₹248,650</td><td className="text-success">+22.4%</td></tr>
    <tr><td>Active Customers</td><td>156</td><td className="text-success">+15.3%</td></tr>
  </tbody>
</table>`, 'table3')}
            style={{
              background: copiedTable === 'table3' ? 'var(--secondary)' : 'var(--primary)',
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
            {copiedTable === 'table3' ? (
              <><FiCheck size={16} /> Code Copied!</>
            ) : (
              <><FiCopy size={16} /> Copy Table Code</>
            )}
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Change</th>
               </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td><FiBarChart2 size={14} style={{ display: 'inline', marginRight: '8px' }} /> Total Orders</td>
                <td><strong>1,248</strong></td>
                <td style={{ color: 'var(--secondary)' }}>↑ +18.5%</td>
              </tr>
              <tr className="table-row">
                <td><FiDollarSign size={14} style={{ display: 'inline', marginRight: '8px' }} /> Total Revenue</td>
                <td><strong>₹248,650</strong></td>
                <td style={{ color: 'var(--secondary)' }}>↑ +22.4%</td>
              </tr>
              <tr className="table-row">
                <td><FiUsers size={14} style={{ display: 'inline', marginRight: '8px' }} /> Active Customers</td>
                <td><strong>156</strong></td>
                <td style={{ color: 'var(--secondary)' }}>↑ +15.3%</td>
              </tr>
              <tr className="table-row">
                <td><FiClockIcon size={14} style={{ display: 'inline', marginRight: '8px' }} /> Pending Orders</td>
                <td><strong>32</strong></td>
                <td style={{ color: 'var(--primary)' }}>↓ -8.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS Classes Reference */}
      <div className="section">
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Table CSS Classes</h3>
        <div className="grid" style={{ gap: 'var(--spacing-4)' }}>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Base Classes</h4>
              <code>.table</code> - Main table container<br />
              <code>.table-hover</code> - Hover effect on rows<br />
              <code>.table-row</code> - Individual row styling<br />
              <code>.table-striped</code> - Alternating row colors
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Table Elements</h4>
              <code>thead</code> - Table header<br />
              <code>tbody</code> - Table body<br />
              <code>th</code> - Header cells<br />
              <code>td</code> - Data cells
            </div>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <div className="form-card">
              <h4>Status Badges</h4>
              <code>.badge-featured</code> - Completed/Success<br />
              <code>.badge-new</code> - Active/Pending<br />
              <code>.badge-popular</code> - On The Way<br />
              <code>.badge-discount</code> - Cancelled/Inactive
            </div>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="section" style={{ background: 'var(--gray-100)' }}>
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontWeight: '600' }}>How to Use Tables</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <div><strong>Step 1:</strong> Click the <strong style={{ color: 'var(--primary)' }}>"Copy Table Code"</strong> button on any table</div>
          <div><strong>Step 2:</strong> Paste the code in your React component</div>
          <div><strong>Step 3:</strong> Import theme.css in your project</div>
          <div><strong>Step 4:</strong> Replace the data with your own</div>

          <div style={{ 
            marginTop: 'var(--spacing-4)', 
            padding: 'var(--spacing-3)', 
            background: 'var(--white)', 
            borderRadius: 'var(--radius)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <strong>Basic Table Structure:</strong>
            <pre style={{ marginTop: 'var(--spacing-2)', overflow: 'auto', background: 'var(--gray-100)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)' }}>
              <code>{`<table className="table table-hover">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
     </tr>
  </thead>
  <tbody>
    <tr className="table-row">
      <td>Data 1</td>
      <td>Data 2</td>
     </tr>
  </tbody>
</table>`}</code>
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
              <li>Use <code>overflowX: 'auto'</code> for responsive tables on mobile</li>
              <li>Add <code>.table-hover</code> for better UX</li>
              <li>Combine with badges for status indicators</li>
              <li>Use pagination component for large datasets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="section">
        <h4 style={{ marginBottom: 'var(--spacing-4)' }}>Table Features</h4>
        <div className="grid" style={{ gap: 'var(--spacing-3)' }}>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="badge badge-featured" style={{ display: 'block', textAlign: 'center' }}>📱 Responsive</div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="badge badge-new" style={{ display: 'block', textAlign: 'center' }}>🎨 Custom Styling</div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="badge badge-popular" style={{ display: 'block', textAlign: 'center' }}>🖱️ Hover Effects</div>
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <div className="badge badge-discount" style={{ display: 'block', textAlign: 'center' }}>📋 Copy Code</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;