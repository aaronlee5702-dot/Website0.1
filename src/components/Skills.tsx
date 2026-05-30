'use client';

import { useState } from 'react';
import { Code, Wrench, BarChart3, Cog, Users, Target, FlaskConical, Calendar, Zap, ArrowRight } from 'lucide-react';
import { skills, projects } from '@/data/portfolio';
import { useRouter } from 'next/navigation';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeOverview, setActiveOverview] = useState(0);
  const router = useRouter();

  const categoryIcons = {
    'CAD/Design Software': <Cog className="w-6 h-6" />,
    'Analysis & Simulation': <BarChart3 className="w-6 h-6" />,
    'Programming & Automation': <Code className="w-6 h-6" />,
    'Manufacturing & Processes': <Wrench className="w-6 h-6" />,
    'Engineering Fundamentals': <Target className="w-6 h-6" />,
    'Project Management': <Users className="w-6 h-6" />,
  };

  const categoryColors = {
    'CAD/Design Software': 'from-blue-500 to-blue-600',
    'Analysis & Simulation': 'from-green-500 to-green-600',
    'Programming & Automation': 'from-purple-500 to-purple-600',
    'Manufacturing & Processes': 'from-green-700 to-green-800',
    'Engineering Fundamentals': 'from-blue-700 to-blue-800',
    'Project Management': 'from-indigo-500 to-indigo-600',
  };

  // Map each skill category to two closely related projects (by project id)
  const categoryProjects: Record<string, string[]> = {
    'CAD/Design Software': ['1', '6'],
    'Analysis & Simulation': ['4', '2'],
    'Programming & Automation': ['1', '5'],
    'Manufacturing & Processes': ['3', '6'],
    'Engineering Fundamentals': ['2', '4'],
  };

  const getProjectIcon = (category: string) => {
    const icons = {
      design: <Cog className="w-10 h-10" />,
      analysis: <BarChart3 className="w-10 h-10" />,
      manufacturing: <Wrench className="w-10 h-10" />,
      research: <FlaskConical className="w-10 h-10" />,
    };
    return icons[category as keyof typeof icons] || <Cog className="w-10 h-10" />;
  };

  const relatedProjects = (categoryProjects[skills[activeCategory].category] || [])
    .map((pid) => projects.find((p) => p.id === pid))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning design, analysis, programming, and project management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {skills.map((skillCategory, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    activeCategory === index
                      ? 'bg-white shadow-lg border-l-4 border-blue-600'
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${
                      categoryColors[skillCategory.category as keyof typeof categoryColors]
                    } text-white`}>
                      {categoryIcons[skillCategory.category as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        activeCategory === index ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {skillCategory.category}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {skillCategory.items.length} skills
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Related Projects Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${
                  categoryColors[skills[activeCategory].category as keyof typeof categoryColors]
                } text-white`}>
                  {categoryIcons[skills[activeCategory].category as keyof typeof categoryIcons]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {skills[activeCategory].category}
                  </h3>
                  <p className="text-gray-600">
                    Related projects showcasing these skills
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
                  >
                    {/* Aurora Header */}
                    <div className="relative h-24 aurora-bg overflow-hidden">
                      <div className="aurora-content h-full">
                        <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-lg">
                          {getProjectIcon(project.category)}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.duration}
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
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
                    </div>
                  </div>
                ))}
              </div>

              {/* Bonus Soldering section for Manufacturing & Processes */}
              {skills[activeCategory].category === 'Manufacturing & Processes' && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Bonus
                  </h4>
                  <div
                    onClick={() => router.push('/soldering-projects')}
                    className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          Soldering
                        </h5>
                        <p className="text-sm text-gray-600">
                          Explore my Bonus Soldering Projects
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Skills Overview</h3>
            <p className="text-center text-gray-600 mb-8">Click a category to view the skills</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveOverview(index)}
                  className={`text-center rounded-xl p-3 transition-all duration-200 ${
                    activeOverview === index
                      ? 'bg-gray-50 ring-2 ring-blue-500 shadow-md'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${
                    categoryColors[category.category as keyof typeof categoryColors]
                  } flex items-center justify-center text-white`}>
                    {categoryIcons[category.category as keyof typeof categoryIcons]}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {category.category.split(' ')[0]}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {category.items.length} skills
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Category Skills (names only) */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {skills[activeOverview].category}
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skills[activeOverview].items.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r ${
                      categoryColors[skills[activeOverview].category as keyof typeof categoryColors]
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Learning & Relevant Coursework */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Continuous Learning */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Biomedical Devices Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Advanced CFD Techniques (ANSYS) and FEA (SolidWorks)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Additive Manufacturing: Bambu H2D</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">IoT Applications and Circuit Analysis</span>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relevant Coursework</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">[MEc178] - Manufacturing and Designing for the Human Body</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Advanced Thermodynamics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Machine Design & Manufacturing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Control Systems Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 