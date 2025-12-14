import { Project, CarbonCredit, Company } from '../types';

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    name: 'Amazon Rainforest Conservation',
    type: 'forest',
    location: 'Brazil, Amazon Basin',
    co2Reduction: 50000,
    verificationStatus: 'verified',
    verificationSteps: [
      {
        id: 'step-1',
        name: 'IoT Sensor Deployment',
        type: 'iot',
        completed: true,
        completedDate: '2024-01-15',
      },
      {
        id: 'step-2',
        name: 'Satellite Monitoring',
        type: 'satellite',
        completed: true,
        completedDate: '2024-01-20',
      },
      {
        id: 'step-3',
        name: 'Accredited Auditor Review',
        type: 'auditor',
        completed: true,
        completedDate: '2024-01-25',
      },
    ],
  },
  {
    id: 'proj-2',
    name: 'Sahara Solar Farm',
    type: 'solar',
    location: 'Morocco, Sahara Desert',
    co2Reduction: 75000,
    verificationStatus: 'in-progress',
    verificationSteps: [
      {
        id: 'step-1',
        name: 'IoT Sensor Deployment',
        type: 'iot',
        completed: true,
        completedDate: '2024-02-01',
      },
      {
        id: 'step-2',
        name: 'Satellite Monitoring',
        type: 'satellite',
        completed: true,
        completedDate: '2024-02-05',
      },
      {
        id: 'step-3',
        name: 'Accredited Auditor Review',
        type: 'auditor',
        completed: false,
      },
    ],
  },
  {
    id: 'proj-3',
    name: 'North Sea Wind Farm',
    type: 'wind',
    location: 'United Kingdom, North Sea',
    co2Reduction: 100000,
    verificationStatus: 'pending',
    verificationSteps: [
      {
        id: 'step-1',
        name: 'IoT Sensor Deployment',
        type: 'iot',
        completed: true,
        completedDate: '2024-02-10',
      },
      {
        id: 'step-2',
        name: 'Satellite Monitoring',
        type: 'satellite',
        completed: false,
      },
      {
        id: 'step-3',
        name: 'Accredited Auditor Review',
        type: 'auditor',
        completed: false,
      },
    ],
  },
  {
    id: 'proj-4',
    name: 'Costa Rican Reforestation',
    type: 'forest',
    location: 'Costa Rica, Central Valley',
    co2Reduction: 30000,
    verificationStatus: 'verified',
    verificationSteps: [
      {
        id: 'step-1',
        name: 'IoT Sensor Deployment',
        type: 'iot',
        completed: true,
        completedDate: '2023-12-01',
      },
      {
        id: 'step-2',
        name: 'Satellite Monitoring',
        type: 'satellite',
        completed: true,
        completedDate: '2023-12-10',
      },
      {
        id: 'step-3',
        name: 'Accredited Auditor Review',
        type: 'auditor',
        completed: true,
        completedDate: '2023-12-20',
      },
    ],
  },
];

export const mockCredits: CarbonCredit[] = [
  {
    id: 'credit-001',
    projectId: 'proj-1',
    projectName: 'Amazon Rainforest Conservation',
    co2Reduced: 50000,
    verificationStatus: 'verified',
    issueDate: '2024-01-26',
    status: 'active',
  },
  {
    id: 'credit-002',
    projectId: 'proj-1',
    projectName: 'Amazon Rainforest Conservation',
    co2Reduced: 25000,
    verificationStatus: 'verified',
    issueDate: '2024-01-26',
    status: 'retired',
    retiredBy: 'TechCorp Inc.',
    retiredDate: '2024-02-15',
  },
  {
    id: 'credit-003',
    projectId: 'proj-4',
    projectName: 'Costa Rican Reforestation',
    co2Reduced: 30000,
    verificationStatus: 'verified',
    issueDate: '2023-12-21',
    status: 'active',
  },
  {
    id: 'credit-004',
    projectId: 'proj-4',
    projectName: 'Costa Rican Reforestation',
    co2Reduced: 15000,
    verificationStatus: 'verified',
    issueDate: '2023-12-21',
    status: 'retired',
    retiredBy: 'GreenEnergy Ltd.',
    retiredDate: '2024-01-10',
  },
];

export const mockCompanies: Company[] = [
  { id: 'comp-1', name: 'TechCorp Inc.' },
  { id: 'comp-2', name: 'GreenEnergy Ltd.' },
  { id: 'comp-3', name: 'EcoSolutions Co.' },
];


