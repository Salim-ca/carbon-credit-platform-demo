import { CheckCircle2, XCircle, Hash, Calendar, Building2 } from 'lucide-react';
import { CarbonCredit } from '../types';

interface LedgerPageProps {
  credits: CarbonCredit[];
}

export default function LedgerPage({ credits }: LedgerPageProps) {
  const activeCredits = credits.filter(c => c.status === 'active');
  const retiredCredits = credits.filter(c => c.status === 'retired');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Blockchain Ledger</h1>
        <p className="text-slate-600">
          Immutable record of all carbon credits issued, verified, and retired
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hash className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">Carbon Credit Registry</h2>
            </div>
            <div className="flex items-center space-x-6 text-white">
              <div>
                <span className="text-sm opacity-80">Total Credits:</span>
                <span className="ml-2 font-bold">{credits.length}</span>
              </div>
              <div>
                <span className="text-sm opacity-80">Active:</span>
                <span className="ml-2 font-bold text-green-400">{activeCredits.length}</span>
              </div>
              <div>
                <span className="text-sm opacity-80">Retired:</span>
                <span className="ml-2 font-bold text-slate-400">{retiredCredits.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Credit ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  CO₂ Reduced
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Verification
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Issue Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Retired By
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {credits.map((credit) => (
                <tr
                  key={credit.id}
                  className={`hover:bg-slate-50 transition-colors ${
                    credit.status === 'retired' ? 'opacity-75' : ''
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-mono text-slate-900">{credit.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-900">{credit.projectName}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-900">
                      {credit.co2Reduced.toLocaleString()} tons
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {credit.verificationStatus === 'verified' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(credit.issueDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {credit.status === 'active' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        <XCircle className="w-3 h-3 mr-1" />
                        Retired
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {credit.retiredBy ? (
                      <div className="flex items-center text-sm text-slate-600">
                        <Building2 className="w-4 h-4 mr-1" />
                        {credit.retiredBy}
                      </div>
                    ) : (
                      <span className="text-sm text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Hash className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-1">
              Blockchain Technology
            </h3>
            <p className="text-sm text-blue-800">
              All carbon credits are recorded on an immutable blockchain ledger. 
              Each credit has a unique ID and cannot be duplicated or tampered with. 
              Once retired, credits are permanently marked and cannot be reused.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


