import React from 'react';

// Updated footer with LinkedIn only and correct email - CACHE BUST v2
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              AI Research Lab
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The Coyote's AI powerhouse on Sustainable innovation from the heart of Rushmore State.
            </p>
          </div>

          {/* Contact and Social */}
          <div className="space-y-6">
            {/* Content Text */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                Follow us on LinkedIn. For general inquiries, reach us by email. For technical assistance or questions, please contact{' '}
                <a 
                  href="mailto:usd.airesearch.lab@gmail.com"
                  className="text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  usd.airesearch.lab@gmail.com
                </a>.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kc-ai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © UC Regents 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
