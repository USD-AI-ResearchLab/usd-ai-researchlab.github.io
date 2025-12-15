import React from 'react';

interface PersonCardProps {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // Added to identify team members for LinkedIn images
  scholarUrl?: string; // Google Scholar profile
  dblpUrl?: string; // DBLP profile
  showAvatar?: boolean; // New prop to control avatar display
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, url, scholarUrl, dblpUrl }) => {

  const CardContent = () => (
    <div className="person-card bg-white rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center justify-between border-2 border-transparent hover:border-logo-red">
      <div className="flex flex-col items-center flex-1">        
        {/* Name - No avatar display at all */}
        <h3 className="text-lg font-semibold line-clamp-2 leading-tight mb-6" style={{ color: 'var(--logo-red, #C53030)' }}>{name}</h3>
      </div>
      
      {/* Role */}
      <div className="mt-auto">
        <p className="text-sm font-medium text-gray-800 line-clamp-3 leading-relaxed mb-3">
          {role}
        </p>
        
        {/* Academic Links - After Role */}
        {(scholarUrl || dblpUrl) && (
          <div className="flex gap-2 justify-center items-center text-sm">
            {scholarUrl && (
              <a 
                href={scholarUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Google Scholar
              </a>
            )}
            {scholarUrl && dblpUrl && (
              <span className="text-gray-400">|</span>
            )}
            {dblpUrl && (
              <a 
                href={dblpUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                DBLP
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // If URL is provided, wrap in link
  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block hover:scale-105 transition-transform duration-200"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default PersonCard;
