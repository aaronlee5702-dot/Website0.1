'use client';

import { Calendar, ExternalLink, Zap } from 'lucide-react';
import { solderingProjects } from '@/data/portfolio';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SolderingProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Portfolio: Home page
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/all-projects" className="hover:text-blue-600 transition-colors">
              All Projects
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900 font-medium">Bonus Soldering Projects</span>
          </div>
        </div>
      </div>

      {/* Header with Aurora Effect */}
      <div className="relative h-64 aurora-bg overflow-hidden">
        <div className="aurora-content h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                Bonus Soldering Projects
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
                A collection of soldering and electronics projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solderingProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Project Image with Aurora Effect */}
              <div className="relative h-32 aurora-bg overflow-hidden">
                <div className="aurora-content h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl drop-shadow-lg">
                        <Zap />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.duration}
                  </div>
                </div>

                <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                  {project.description}
                </p>

                {/* Action Button */}
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1 border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors duration-200 text-xs font-medium">
                    <ExternalLink className="w-3 h-3" />
                    <span>View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {solderingProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white">
              <Zap className="w-8 h-8" />
            </div>
            <p className="text-gray-500 text-lg">Soldering projects coming soon. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}
