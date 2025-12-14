import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ProjectsPage from './pages/ProjectsPage';
import LedgerPage from './pages/LedgerPage';
import DashboardPage from './pages/DashboardPage';
import CreditDetailPage from './pages/CreditDetailPage';
import { CarbonCredit } from './types';
import { mockCredits } from './data/mockData';

function App() {
  const [credits, setCredits] = useState<CarbonCredit[]>(mockCredits);

  const updateCredit = (creditId: string, updates: Partial<CarbonCredit>) => {
    setCredits(prev => prev.map(credit => 
      credit.id === creditId ? { ...credit, ...updates } : credit
    ));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/ledger" element={<LedgerPage credits={credits} />} />
          <Route 
            path="/dashboard" 
            element={<DashboardPage credits={credits} updateCredit={updateCredit} />} 
          />
          <Route 
            path="/credit/:id" 
            element={<CreditDetailPage credits={credits} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

function NavBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Projects', icon: '🌲' },
    { path: '/ledger', label: 'Blockchain Ledger', icon: '⛓️' },
    { path: '/dashboard', label: 'Company Dashboard', icon: '🏢' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-bold text-slate-800">Carbon Credit Platform</span>
            </div>
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-primary-500 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;


