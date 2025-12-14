import { useState } from 'react';
import { TreePine, Sun, Wind, MapPin, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Project } from '../types';
import { mockProjects } from '../data/mockData';
import VerificationSteps from '../components/VerificationSteps';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'forest':
        return <TreePine className="w-8 h-8 text-green-600" />;
      case 'solar':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'wind':
        return <Wind className="w-8 h-8 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-slate-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'pending':
        return 'bg-slate-100 text-slate-600 border-slate-300';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Carbon Reduction Projects</h1>
        <p className="text-slate-600">
          Explore verified and pending carbon reduction projects around the world
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects List */}
        <div className="lg:col-span-2 space-y-4">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all hover:shadow-lg border-2 ${
                selectedProject?.id === project.id
                  ? 'border-primary-500'
                  : 'border-transparent hover:border-primary-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    {getProjectIcon(project.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-slate-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-50 rounded-lg px-3 py-1.5">
                        <span className="text-xs text-slate-600">CO₂ Reduction</span>
                        <p className="text-lg font-bold text-primary-700">
                          {project.co2Reduction.toLocaleString()} tons
                        </p>
                      </div>
                      <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${getStatusColor(project.verificationStatus)}`}>
                        {getStatusIcon(project.verificationStatus)}
                        <span className="text-sm font-medium capitalize">
                          {project.verificationStatus.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Panel */}
        <div className="lg:col-span-1">
          {selectedProject ? (
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  {getProjectIcon(selectedProject.type)}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {selectedProject.name}
                    </h2>
                    <p className="text-sm text-slate-600">{selectedProject.location}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-4 text-white mb-4">
                  <p className="text-sm opacity-90">Total CO₂ Reduction</p>
                  <p className="text-3xl font-bold">
                    {selectedProject.co2Reduction.toLocaleString()} tons
                  </p>
                </div>
              </div>
              <VerificationSteps steps={selectedProject.verificationSteps} />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6 border-2 border-dashed border-slate-300">
              <p className="text-center text-slate-500">
                Select a project to view verification details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


