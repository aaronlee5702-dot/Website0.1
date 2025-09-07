'use client';

import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center aurora-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 aurora-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I&apos;m{' '}
                <span className="text-cyan-300">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-200 font-medium">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-300" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-300" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-300" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-cyan-300 text-cyan-300 px-8 py-3 rounded-lg hover:bg-cyan-300 hover:text-gray-900 transition-colors duration-200 font-medium text-lg backdrop-blur-sm bg-white/10"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-8 overflow-hidden">
              {/* Subtle gradient overlay for better content visibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-cyan-500/10 rounded-2xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <span className="text-4xl font-bold text-white">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">{personalInfo.name}</h3>
                  <p className="text-gray-200 drop-shadow-md">{personalInfo.title}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-sm border border-cyan-300/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cyan-300 drop-shadow-lg">4+</div>
                    <div className="text-sm text-gray-200 drop-shadow-md">Years CAD Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-300/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-300 drop-shadow-lg">10+</div>
                    <div className="text-sm text-gray-200 drop-shadow-md">Projects Completed</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm border border-purple-300/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-300 drop-shadow-lg">15+</div>
                    <div className="text-sm text-gray-200 drop-shadow-md">Technologies</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-300/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-300 drop-shadow-lg">2</div>
                    <div className="text-sm text-gray-200 drop-shadow-md">Research Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced background decoration with better integration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-purple-600/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-full blur-2xl -z-20"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-300" />
        </div>
      </div>
    </section>
  );
} 