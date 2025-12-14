import { CheckCircle2, Circle, Wifi, Satellite, UserCheck } from 'lucide-react';
import { VerificationStep } from '../types';

interface VerificationStepsProps {
  steps: VerificationStep[];
}

export default function VerificationSteps({ steps }: VerificationStepsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'iot':
        return <Wifi className="w-5 h-5" />;
      case 'satellite':
        return <Satellite className="w-5 h-5" />;
      case 'auditor':
        return <UserCheck className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'iot':
        return 'IoT Sensors';
      case 'satellite':
        return 'Satellite';
      case 'auditor':
        return 'Auditor';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-700 mb-3">Verification Steps</h4>
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
            step.completed
              ? 'bg-green-50 border border-green-200'
              : 'bg-slate-50 border border-slate-200'
          }`}
        >
          <div className={`flex-shrink-0 ${step.completed ? 'text-green-600' : 'text-slate-400'}`}>
            {step.completed ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <Circle className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <div className={`${step.completed ? 'text-green-600' : 'text-slate-400'}`}>
                {getIcon(step.type)}
              </div>
              <span className={`text-sm font-medium ${
                step.completed ? 'text-slate-800' : 'text-slate-500'
              }`}>
                {getLabel(step.type)}
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1">{step.name}</p>
            {step.completedDate && (
              <p className="text-xs text-slate-500 mt-1">
                Completed: {new Date(step.completedDate).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


