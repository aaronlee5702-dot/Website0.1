'use client';

import { useState } from 'react';
import { ExternalLink, Calendar, Wrench, BarChart3, Cog, FlaskConical } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useRouter } from 'next/navigation';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const router = useRouter();

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Wrench className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Cog className="w-4 h-4" /> },
    { id: 'analysis', name: 'Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Wrench className="w-4 h-4" /> },
    { id: 'research', name: 'Research', icon: <FlaskConical className="w-4 h-4" /> },
  ];

  // Show only first 4 projects on home page
  const featuredProjects = projects.slice(0, 4);
  
  const filteredProjects = activeFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            A showcase of innovative engineering solutions across design, analysis, manufacturing, and research
          </p>
          
          {/* All Projects Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => router.push('/all-projects')}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              <span>All Projects</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Action Buttons */}
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
      </div>
    </section>
  );
} 