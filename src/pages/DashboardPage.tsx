import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, CheckCircle2, Search, Building2, TrendingUp } from 'lucide-react';
import { CarbonCredit } from '../types';
import { mockCompanies } from '../data/mockData';

interface DashboardPageProps {
  credits: CarbonCredit[];
  updateCredit: (creditId: string, updates: Partial<CarbonCredit>) => void;
}

export default function DashboardPage({ credits, updateCredit }: DashboardPageProps) {
  const [selectedCompany, setSelectedCompany] = useState(mockCompanies[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const availableCredits = credits.filter(
    c => c.status === 'active' && c.verificationStatus === 'verified'
  );

  const filteredCredits = availableCredits.filter(credit =>
    credit.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    credit.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePurchase = (credit: CarbonCredit) => {
    const company = mockCompanies.find(c => c.id === selectedCompany);
    if (company && window.confirm(`Purchase ${credit.co2Reduced.toLocaleString()} tons of CO₂ credits from ${credit.projectName}?`)) {
      updateCredit(credit.id, {
        status: 'retired',
        retiredBy: company.name,
        retiredDate: new Date().toISOString().split('T')[0],
      });
      alert(`Credit ${credit.id} has been purchased and retired by ${company.name}!`);
    }
  };

  const totalAvailable = availableCredits.reduce((sum, c) => sum + c.co2Reduced, 0);
  const totalRetired = credits
    .filter(c => c.status === 'retired')
    .reduce((sum, c) => sum + c.co2Reduced, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Company Dashboard</h1>
        <p className="text-slate-600">
          Browse and purchase verified carbon credits to offset your emissions
        </p>
      </div>

      {/* Company Selector */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-slate-600" />
            <label className="text-sm font-semibold text-slate-700">Acting as:</label>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {mockCompanies.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-xs text-slate-600">Available Credits</p>
              <p className="text-lg font-bold text-primary-600">
                {totalAvailable.toLocaleString()} tons
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-600">Total Retired</p>
              <p className="text-lg font-bold text-slate-600">
                {totalRetired.toLocaleString()} tons
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by project name or credit ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Credits Grid */}
      {filteredCredits.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCredits.map((credit) => (
            <div
              key={credit.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary-200"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500">{credit.id}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {credit.projectName}
                </h3>
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-4 text-white">
                  <p className="text-sm opacity-90 mb-1">CO₂ Reduction</p>
                  <p className="text-2xl font-bold">
                    {credit.co2Reduced.toLocaleString()} tons
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Issue Date:</span>
                  <span className="font-medium text-slate-900">
                    {new Date(credit.issueDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Status:</span>
                  <span className="font-medium text-blue-600">Active</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/credit/${credit.id}`)}
                  className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
                >
                  View Details
                </button>
                <button
                  onClick={() => handlePurchase(credit)}
                  className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium flex items-center justify-center space-x-1"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Purchase</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <TrendingUp className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600">
            {searchTerm ? 'No credits found matching your search.' : 'No available credits at this time.'}
          </p>
        </div>
      )}
    </div>
  );
}


