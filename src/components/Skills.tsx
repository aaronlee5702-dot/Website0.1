'use client';

import { useState } from 'react';
import { Code, Wrench, BarChart3, Cog, Users, Target } from 'lucide-react';
import { skills } from '@/data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

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

          {/* Skills Display */}
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
                    Professional proficiency in industry-standard tools
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills[activeCategory].items.map((skill, skillIndex) => {
                  const level = skill.level || 75;
                  return (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${
                            categoryColors[skills[activeCategory].category as keyof typeof categoryColors]
                          } transition-all duration-1000 ease-out`}
                          style={{ width: `${level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((category, index) => (
                <div key={index} className="text-center">
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
                </div>
              ))}
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