'use client';

import { useState } from 'react';
import { ArrowLeft, Calendar, ExternalLink, Wrench, BarChart3, Cog, FlaskConical } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const router = useRouter();

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Wrench className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Cog className="w-4 h-4" /> },
    { id: 'analysis', name: 'Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Wrench className="w-4 h-4" /> },
    { id: 'research', name: 'Research', icon: <FlaskConical className="w-4 h-4" /> },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      design: 'bg-blue-100 text-blue-800',
      analysis: 'bg-green-100 text-green-800',
      manufacturing: 'bg-purple-100 text-purple-800',
      research: 'bg-orange-100 text-orange-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Link 
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Portfolio: Home page
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900 font-medium">All Projects</span>
          </div>
        </div>
      </div>

      {/* Header with Aurora Effect */}
      <div className="relative h-64 aurora-bg overflow-hidden">
        <div className="aurora-content h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">All Projects</h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
                Explore my complete portfolio of engineering projects across design, analysis, manufacturing, and research
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
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
                        {project.category === 'design' && <Cog />}
                        {project.category === 'analysis' && <BarChart3 />}
                        {project.category === 'manufacturing' && <Wrench />}
                        {project.category === 'research' && <FlaskConical />}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
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

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  <h4 className="font-semibold text-gray-900 text-xs">Key Achievements:</h4>
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-start text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

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
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

