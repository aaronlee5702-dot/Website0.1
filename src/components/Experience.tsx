'use client';

import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through innovative engineering roles, leading teams and delivering impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md hidden md:block"></div>

                <div className="md:ml-12">
                  <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-0.5">{exp.position}</h3>
                          <div className="flex items-center text-blue-600 font-medium text-sm mb-1">
                            <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end space-y-0.5">
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="w-3.5 h-3.5 mr-1.5" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="w-3.5 h-3.5 mr-1.5" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Responsibilities & Achievements</h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 