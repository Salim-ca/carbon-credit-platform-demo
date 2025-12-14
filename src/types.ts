export type ProjectType = 'forest' | 'solar' | 'wind';

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  location: string;
  co2Reduction: number; // in tons
  verificationStatus: 'pending' | 'in-progress' | 'verified';
  verificationSteps: VerificationStep[];
}

export interface VerificationStep {
  id: string;
  name: string;
  type: 'iot' | 'satellite' | 'auditor';
  completed: boolean;
  completedDate?: string;
}

export interface CarbonCredit {
  id: string;
  projectId: string;
  projectName: string;
  co2Reduced: number;
  verificationStatus: 'verified' | 'pending';
  issueDate: string;
  status: 'active' | 'retired';
  retiredBy?: string;
  retiredDate?: string;
}

export interface Company {
  id: string;
  name: string;
}


