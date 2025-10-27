import React from 'react';

// Updated footer with thin fonts and LinkedIn + email content
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Contact and Social */}
        <div className="space-y-6">
          {/* Content Text */}
          <div className="space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed font-thin text-center">
              Follow us on{' '}
              <a 
                href="https://www.linkedin.com/company/kc-ai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="font-thin transition-colors duration-200"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                LinkedIn
              </a>. For general inquiries, reach us by{' '}
              <a 
                href="mailto:usd.airesearch.lab@gmail.com"
                className="font-thin transition-colors duration-200"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                email
              </a>. For technical assistance or questions, please contact{' '}
              <a 
                href="mailto:usd.airesearch.lab@gmail.com"
                className="font-thin transition-colors duration-200"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                usd.airesearch.lab@gmail.com
              </a>.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-4 text-center">
          <p className="text-gray-500 text-lg font-thin">
            © UC Regents 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
