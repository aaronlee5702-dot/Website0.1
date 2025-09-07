'use client';

import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function About() {
  const certificates = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Berkeley Certificate in Design Innovation",
      description: "Interdisciplinary program focusing on human-centered design and innovation methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about solving complex engineering challenges through innovative design and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Story */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                With over 6 years of CAD and design experience, I specialize in designing and developing 
                innovative solutions for complex engineering challenges. My journey began with a fascination for 
                how things work and has evolved into a career focused on robotics, medical technologies, and advanced 
                manufacturing processes.
              </p>
              <p>
                I believe in the power of interdisciplinary collaboration and have successfully led teams to deliver 
                projects that not only meet technical requirements but also drive advancement. My approach combines 
                rigorous engineering principles with creative problem-solving to develop solutions that are both 
                innovative and practical.
              </p>
              <p>
                When I&apos;m not designing new projects, you can find me mentoring young engineers on CAD and circuit analysis. I also like to spend my off time playing tennis and hiking.
              </p>
            </div>

            {/* Certificates */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certificates</h3>
              {certificates.map((certificate, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 text-blue-600">
                    {certificate.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{certificate.title}</h4>
                    <p className="text-gray-600">{certificate.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                {education.filter(edu => edu.degree === 'Bachelor of Science').map((edu) => (
                  <div key={edu.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">B.S. Mechanical Engineering</h4>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">2023 - Present</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beyond Engineering</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    3D Printing & Maker Projects
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Mentoring Students
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Open Source Contributions
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Technical Writing
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Photography
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 