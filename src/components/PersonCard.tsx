import React from 'react';
import LazyImage from './LazyImage';

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

const PersonCard: React.FC<PersonCardProps> = ({ name, role, photo, url, scholarUrl, dblpUrl, showAvatar = true }) => {
  // Get the image URL - only use provided photos
  const imageUrl = photo;

  const CardContent = () => (
    <div className="person-card p-3 sm:p-4 md:p-6 text-center h-full flex flex-col items-center justify-between">
      <div className="flex flex-col items-center flex-1">
        {/* Photo - Only show if showAvatar is true AND imageUrl exists (no placeholders) */}
        {showAvatar && imageUrl && (
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full overflow-hidden">
            <LazyImage
              src={imageUrl}
              alt={name}
              className="person-card-image w-full h-full object-cover rounded-full"
            />
          </div>
        )}
        
        {/* Name - Adjust spacing based on whether photo is shown */}
        <h3 className={`text-sm sm:text-base md:text-lg font-semibold line-clamp-2 leading-tight text-logo-red ${showAvatar && imageUrl ? 'mb-1 sm:mb-2 md:mb-3' : 'mb-3 sm:mb-4 md:mb-6'}`}>{name}</h3>
      </div>
      
      {/* Role */}
      <div className="mt-auto">
        <p className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-3 sm:line-clamp-4 leading-relaxed mb-2 sm:mb-3 text-center whitespace-pre-line">
          {role}
        </p>
        
        {/* Academic Links - After Role */}
        {(scholarUrl || dblpUrl) && (
          <div className="flex gap-1 sm:gap-2 justify-center items-center text-xs sm:text-sm flex-wrap">
            {scholarUrl && (
              <a 
                href={scholarUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="hidden sm:inline">Google Scholar</span>
                <span className="sm:hidden">Scholar</span>
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
        title={`View ${name}'s profile`}
        className="block hover:scale-105 transition-transform duration-200"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default PersonCard;
