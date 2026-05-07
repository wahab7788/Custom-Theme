// src/pages/Dashboard.jsx
// import  { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { 
  ShoppingBag, TrendingUp, TrendingDown, CheckCircle, 
  Users, Clock, AlertCircle, Bell, ExternalLink, Eye 
} from 'lucide-react';
 import "./Dashboard.css"
const Dashboard = () => {
  // const [showNotifications, setShowNotifications] = useState(false);

  // Stats data
  const stats = [
    { 
      title: 'Total Orders', 
      value: '1,248', 
      change: '+18.5%', 
      trend: 'up', 
      icon: <ShoppingBag size={24} />, 
      color: 'var(--primary)' 
    },
    { 
      title: 'Total Revenue', 
      value: 'Rs. 248,650', 
      change: '+22.4%', 
      trend: 'up', 
      icon: <TrendingUp size={24} />, 
      color: 'var(--secondary)' 
    },
    { 
      title: 'Pending Orders', 
      value: '32', 
      change: '-8.3%', 
      trend: 'down', 
      icon: <Clock size={24} />, 
      color: '#f59e0b' 
    },
    { 
      title: 'Completed Orders', 
      value: '1,216', 
      change: '+20.6%', 
      trend: 'up', 
      icon: <CheckCircle size={24} />, 
      color: '#8b5cf6' 
    },
    { 
      title: 'New Customers', 
      value: '156', 
      change: '+15.3%', 
      trend: 'up', 
      icon: <Users size={24} />, 
      color: '#ec489a' 
    }
  ];

  // Sales Overview Data
  const salesData = [
    { month: 'May 20', sales: 185000 },
    { month: 'May 21', sales: 210000 },
    { month: 'May 22', sales: 195000 },
    { month: 'May 23', sales: 228000 },
    { month: 'May 24', sales: 242000 },
    { month: 'May 25', sales: 238000 },
    { month: 'May 26', sales: 248650 }
  ];

  // Order Status Data
  const orderStatusData = [
    { name: 'Completed', value: 128, color: 'var(--primary)' },
    { name: 'Pending', value: 32, color: '#f59e0b' },
    { name: 'Cancelled', value: 12, color: '#6b7280' },
    { name: 'On The Way', value: 18, color: '#3b82f6' }
  ];

  // Top Selling Items
  const topItems = [
    { name: 'Zinger Burger Meal', quantity: 258 },
    { name: 'Hot & Crispy Deal', quantity: 215 },
    { name: 'Family Feast Bucket', quantity: 189 },
    { name: 'Ultimate Savings Box', quantity: 156 },
    { name: 'Chicken Roll Meal', quantity: 112 }
  ];

  // Recent Orders
  const recentOrders = [
    { id: 'ORD-001244', item: 'Zinger Burger Meal', status: 'Completed', amount: 'Rs. 650' },
    { id: 'ORD-001247', item: 'Hot & Crispy Deal', status: 'Preparing', amount: 'Rs. 1190' },
    { id: 'ORD-001245', item: 'Ultimate Savings Box', status: 'Preparing', amount: 'Rs. 1350' },
    { id: 'ORD-001248', item: 'Chicken Roll Meal', status: 'Completed', amount: 'Rs. 450' }
  ];

  // Revenue Data
  const revenueData = [
    { week: 'May 7', Completed: 185000, Pending: 32000, Cancelled: 5000, 'On The Way': 28000 },
    { week: 'May 14', Completed: 210000, Pending: 28000, Cancelled: 4200, 'On The Way': 35000 },
    { week: 'May 21', Completed: 228000, Pending: 31000, Cancelled: 3800, 'On The Way': 42000 },
    { week: 'May 28', Completed: 242000, Pending: 29000, Cancelled: 3500, 'On The Way': 48000 }
  ];

  // Recent Customers
  const recentCustomers = [
    { id: 'ORD-001244', name: 'Ahmad Raza', amount: 'Rs. 650', status: 'Completed', date: 'May 26, 2024' },
    { id: 'ORD-001247', name: 'Sam Khan', amount: 'Rs. 1190', status: 'Preparing', date: 'May 26, 2024' },
    { id: 'ORD-001245', name: 'Umar Ali', amount: 'Rs. 1350', status: 'On The Way', date: 'May 25, 2024' },
    { id: 'ORD-001244', name: 'Nida Fatima', amount: 'Rs. 450', status: 'Completed', date: 'May 24, 2024' }
  ];

  // Notifications
  const notifications = [
    { title: 'New order received', desc: 'Order #ORD-000249 has been placed.', time: '2 min ago' },
    { title: 'Payment received', desc: 'Payment of Rs. 1190 received.', time: '15 min ago' },
    { title: 'New customer registered', desc: 'Ahmad Raza has registered.', time: '1 hour ago' },
    { title: 'New deal created', desc: 'Weekend Mega Deal is live now.', time: '2 hours ago' },
    { title: 'Low stock alert', desc: 'Zinger Burger Stock is running low.', time: '3 hours ago' }
  ];

  // Traffic Data
  const trafficData = [
    { name: 'Direct', value: 35, color: 'var(--primary)' },
    { name: 'Social', value: 28, color: '#ec489a' },
    { name: 'Email', value: 18, color: '#f59e0b' },
    { name: 'Referral', value: 12, color: 'var(--secondary)' },
    { name: 'Organic', value: 7, color: '#8b5cf6' }
  ];

  const getStatusClass = (status) => {
    const classes = {
      'Completed': 'badge badge-featured',
      'Preparing': 'badge badge-new',
      'On The Way': 'badge badge-popular',
      'Pending': 'badge badge-discount',
      'Cancelled': 'badge badge-delivery'
    };
    return classes[status] || 'badge badge-delivery';
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Restaurant Dashboard</h1>
        <div className="header-date">May 2026 | Live Updates</div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15` }}>
              <span style={{ color: stat.color }}>{stat.icon}</span>
            </div>
            <div className="stat-content">
              <p className="stat-title">{stat.title}</p>
              <div className="stat-value-row">
                <span className="stat-value">{stat.value}</span>
                <span className={`stat-trend stat-trend-${stat.trend}`}>
                  {stat.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Three Column Grid */}
      <div className="three-col-grid">
        {/* Sales Overview */}
        <div className="card-panel">
          <div className="panel-header">
            <h3 className="panel-title">Sales Overview</h3>
            <span className="panel-sub">Monthly revenue trend</span>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={(value) => `₹${value/1000}k`} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value) => [`₹ ${value.toLocaleString()}`, 'Sales']} />
                <Line type="monotone" dataKey="sales" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: 'var(--primary)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-legend">
            <span><span className="legend-dot" style={{ background: 'var(--primary)' }}></span> Completed</span>
            <span><span className="legend-dot" style={{ background: '#f59e0b' }}></span> Pending</span>
            <span><span className="legend-dot" style={{ background: '#6b7280' }}></span> Cancelled</span>
            <span><span className="legend-dot" style={{ background: '#3b82f6' }}></span> On The Way</span>
          </div>
        </div>

        {/* Order Status */}
        <div className="card-panel">
          <div className="panel-header">
            <h3 className="panel-title">Order Status</h3>
            <span className="panel-sub">Total Orders: 1,248</span>
          </div>
          <div className="pie-chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={orderStatusData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="status-stats">
            {orderStatusData.map((status, i) => (
              <div key={i} className="status-item">
                <span className="status-dot" style={{ background: status.color }}></span>
                <span>{status.name}: {status.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="card-panel">
          <div className="panel-header">
            <h3 className="panel-title">Top Selling Items</h3>
            <span className="panel-sub">Most popular this month</span>
          </div>
          <div className="top-items-list">
            {topItems.map((item, idx) => (
              <div key={idx} className="top-item-row">
                <div className="item-rank">{idx + 1}</div>
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <div className="item-bar-bg">
                    <div className="item-bar-fill" style={{ width: `${(item.quantity / 258) * 100}%`, backgroundColor: 'var(--primary)' }}></div>
                  </div>
                </div>
                <div className="item-qty">{item.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Column Grid - Recent Orders & Customers */}
      <div className="two-col-grid">
        {/* Recent Orders */}
        <div className="card-panel">
          <div className="panel-header">
            <h3 className="panel-title">Recent Orders</h3>
            <span className="view-link">View All <ExternalLink size={14} /></span>
          </div>
          <div className="recent-orders-list">
            {recentOrders.map((order, idx) => (
              <div key={idx} className="order-row">
                <div className="order-id">{order.id}</div>
                <div className="order-details">
                  <span className="order-item">{order.item}</span>
                  <span className={getStatusClass(order.status)}>{order.status}</span>
                </div>
                <div className="order-amount">{order.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Customers */}
        <div className="card-panel">
          <div className="panel-header">
            <h3 className="panel-title">Recent Customers</h3>
            <span className="view-link">Manage <Eye size={14} /></span>
          </div>
          <div className="table-responsive-custom">
            <table className="customer-table">
              <thead>
                <tr><th>ID</th><th>Name</th><th>Amount</th><th>Status</th><th>Date</th></tr>
              </thead>
              <tbody>
                {recentCustomers.map((cust, idx) => (
                  <tr key={idx}>
                    <td>{cust.id}</td><td>{cust.name}</td><td>{cust.amount}</td>
                    <td><span className={getStatusClass(cust.status)}>{cust.status}</span></td>
                    <td>{cust.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Two Column Grid - Revenue & Notifications */}
      <div className="two-col-grid">
        {/* Revenue Overview */}
        <div className="card-panel">
          <div className="panel-header">
            <h3 className="panel-title">Revenue Overview (Weekly)</h3>
          </div>
          <div className="chart-container" style={{ height: '280px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
                <XAxis dataKey="week" />
                <YAxis tickFormatter={(val) => `₹${val/1000}k`} />
                <Tooltip formatter={(value) => [`₹ ${value.toLocaleString()}`, '']} />
                <Legend />
                <Bar dataKey="Completed" fill="var(--primary)" radius={[4,4,0,0]} />
                <Bar dataKey="Pending" fill="#f59e0b" radius={[4,4,0,0]} />
                <Bar dataKey="Cancelled" fill="#6b7280" radius={[4,4,0,0]} />
                <Bar dataKey="On The Way" fill="#3b82f6" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Stack */}
        <div className="right-stack">
          {/* Notifications */}
          <div className="card-panel notifications-card">
            <div className="panel-header">
              <h3 className="panel-title"><Bell size={18} /> Notifications</h3>
            </div>
            <div className="notifications-list">
              {notifications.map((notif, idx) => (
                <div key={idx} className="notification-item">
                  <div className="notif-icon"><AlertCircle size={16} /></div>
                  <div className="notif-content">
                    <div className="notif-title">{notif.title}</div>
                    <div className="notif-desc">{notif.desc}</div>
                    <div className="notif-time">{notif.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic & Promote Row */}
          <div className="traffic-promote-row">
            <div className="card-panel small-traffic">
              <div className="panel-header">
                <h3 className="panel-title">Traffic Sources</h3>
                <span>Total 95.6K</span>
              </div>
              <div style={{ height: 170 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={trafficData} cx="50%" cy="50%" innerRadius={30} outerRadius={55} dataKey="value" label={({ percent }) => `${(percent*100).toFixed(0)}%`}>
                      {trafficData.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="traffic-labels">
                {trafficData.slice(0,3).map(t => <span key={t.name}><span className="dot" style={{background:t.color}}></span>{t.name}</span>)}
              </div>
            </div>

            <div className="promote-card">
              <div className="promote-content">
                <h4>Get more customers</h4>
                <p>Promote your restaurant and get more orders.</p>
                <button className="promote-btn">Promote Now <ExternalLink size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;