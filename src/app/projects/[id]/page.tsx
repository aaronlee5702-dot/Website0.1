'use client';

import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Wrench, BarChart3, Cog, FlaskConical } from 'lucide-react';
import { projects } from '@/data/portfolio';
import Link from 'next/link';
import { use } from 'react';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      design: 'bg-blue-100 text-blue-800',
      analysis: 'bg-green-100 text-green-800',
      manufacturing: 'bg-purple-100 text-purple-800',
      research: 'bg-orange-100 text-orange-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      design: <Cog className="w-8 h-8" />,
      analysis: <BarChart3 className="w-8 h-8" />,
      manufacturing: <Wrench className="w-8 h-8" />,
      research: <FlaskConical className="w-8 h-8" />,
    };
    return icons[category as keyof typeof icons] || <Cog className="w-8 h-8" />;
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
            <Link 
              href="/all-projects"
              className="hover:text-blue-600 transition-colors"
            >
              All Projects
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 aurora-bg overflow-hidden">
        <div className="aurora-content h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">
                {getCategoryIcon(project.category)}
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-medium">{project.duration}</span>
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p>{project.detailedDescription}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <div className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Images & Videos */}
          {((project.images && project.images.length > 0) || (project.videos && project.videos.length > 0) || (project.pdfs && project.pdfs.length > 0)) && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
              <div className={`grid gap-4 ${
                (project.images?.length || 0) + (project.videos?.length || 0) + (project.pdfs?.length || 0) === 1 
                  ? 'grid-cols-1' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {/* Images */}
                {project.images?.map((image, index) => {
                  const totalItems = (project.images?.length || 0) + (project.videos?.length || 0) + (project.pdfs?.length || 0);
                  const isSingleItem = totalItems === 1;
                  
                  return (
                    <div
                      key={`image-${index}`}
                      className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100 ${
                        isSingleItem ? 'aspect-[4/3]' : 'aspect-square'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  );
                })}
                {/* Videos */}
                {project.videos?.map((video, index) => (
                  <div
                    key={`video-${index}`}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-900"
                  >
                    <video
                      src={video}
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
                {/* PDFs */}
                {project.pdfs?.map((pdf, index) => (
                  <div
                    key={`pdf-${index}`}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50"
                  >
                    <iframe
                      src={pdf}
                      className="w-full h-full"
                      title={`${project.title} - Document ${index + 1}`}
                    />
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                    >
                      Open PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            <Link
              href="/all-projects"
              className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 