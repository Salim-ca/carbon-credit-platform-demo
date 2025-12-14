import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Hash, Calendar, MapPin, Shield, Lock } from 'lucide-react';
import { CarbonCredit } from '../types';
import { mockProjects } from '../data/mockData';

interface CreditDetailPageProps {
  credits: CarbonCredit[];
}

export default function CreditDetailPage({ credits }: CreditDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const credit = credits.find(c => c.id === id);

  if (!credit) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <XCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Credit Not Found</h2>
          <p className="text-slate-600 mb-6">The credit ID you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const project = mockProjects.find(p => p.id === credit.projectId);
  const isRetired = credit.status === 'retired';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </button>

      {/* Credit Status Banner */}
      {isRetired && (
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl shadow-lg p-6 mb-6 text-white">
          <div className="flex items-center space-x-3">
            <Lock className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-bold mb-1">Credit Retired</h2>
              <p className="text-slate-200">
                This credit has been permanently retired and cannot be reused or transferred.
              </p>
              {credit.retiredBy && credit.retiredDate && (
                <p className="text-sm text-slate-300 mt-2">
                  Retired by {credit.retiredBy} on {new Date(credit.retiredDate).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Hash className="w-5 h-5" />
                <span className="font-mono text-sm opacity-90">{credit.id}</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{credit.projectName}</h1>
              <p className="text-primary-100">Carbon Credit Verification Details</p>
            </div>
            {credit.verificationStatus === 'verified' && (
              <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Verified</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* CO₂ Reduction */}
          <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total CO₂ Reduction</p>
                <p className="text-4xl font-bold text-primary-700">
                  {credit.co2Reduced.toLocaleString()} tons
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600 mb-1">Status</p>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  isRetired
                    ? 'bg-slate-200 text-slate-700'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {isRetired ? (
                    <>
                      <XCircle className="w-4 h-4 mr-1" />
                      Retired
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Active
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Project Information */}
          {project && (
            <div className="border border-slate-200 rounded-lg p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-slate-600" />
                Project Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Project Type</p>
                  <p className="font-medium text-slate-900 capitalize">{project.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Location</p>
                  <p className="font-medium text-slate-900">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Total Project Reduction</p>
                  <p className="font-medium text-slate-900">
                    {project.co2Reduction.toLocaleString()} tons
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Verification Status</p>
                  <p className="font-medium text-slate-900 capitalize">
                    {project.verificationStatus.replace('-', ' ')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Credit Details */}
          <div className="border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-slate-600" />
              Credit Details
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Credit ID</span>
                <span className="font-mono text-slate-900">{credit.id}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Issue Date</span>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-900">
                    {new Date(credit.issueDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Verification Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Verified
                </span>
              </div>
              {isRetired && credit.retiredBy && (
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-600">Retired By</span>
                  <span className="font-medium text-slate-900">{credit.retiredBy}</span>
                </div>
              )}
            </div>
          </div>

          {/* Blockchain Verification */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Hash className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Blockchain Verification
                </h3>
                <p className="text-sm text-blue-800 mb-3">
                  This credit is recorded on an immutable blockchain ledger. The transaction history,
                  verification status, and ownership are permanently recorded and cannot be altered.
                </p>
                <div className="bg-white rounded p-3 font-mono text-xs text-blue-900 break-all">
                  Block Hash: 0x{credit.id.split('-').join('').padEnd(64, '0').substring(0, 64)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


