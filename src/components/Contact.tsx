import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I&apos;m always interested in discussing new opportunities, innovative projects, 
                and potential collaborations. Whether you&apos;re looking for engineering expertise 
                or just want to connect with a fellow engineer, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 