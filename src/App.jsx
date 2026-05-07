// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';
import ErrorPage from './components/ErrorPage';
import Dashboard from './pages/Dashboard';
import Buttons from './pages/Buttons';
import Forms from './pages/Forms';
import Cards from './pages/Cards';
import Tables from './pages/Tables';
import Alerts from './pages/Alerts';
import Badges from './pages/Badges';
import Pagination from './pages/Pagination';
import Icons from './pages/Icons';
import './theme.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 second delay - Har page pe loader show hoga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Loader show hoga pehle 2 seconds
  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/icons" element={<Icons />} />
          
          {/* 404 Error Page - Agar koi galat URL open kare */}
          <Route path="*" element={<ErrorPage code={404} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;