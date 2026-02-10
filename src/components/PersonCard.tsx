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
    <div className="person-card p-6 text-center h-full flex flex-col items-center justify-between">
      <div className="flex flex-col items-center flex-1">
        {/* Photo - Only show if showAvatar is true AND imageUrl exists (no placeholders) */}
        {showAvatar && imageUrl && (
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <LazyImage
              src={imageUrl}
              alt={name}
              className="person-card-image w-full h-full object-cover rounded-full"
              onLoad={() => {
                console.log(`✅ Image loaded successfully for ${name}:`, imageUrl);
              }}
            />
          </div>
        )}
        
        {/* Name - Adjust spacing based on whether photo is shown */}
        <h3 className={`text-lg font-semibold line-clamp-2 leading-tight text-logo-red ${showAvatar && imageUrl ? 'mb-3' : 'mb-6'}`}>{name}</h3>
      </div>
      
      {/* Role */}
      <div className="mt-auto">
        <p className="text-sm font-medium text-gray-800 line-clamp-4 leading-relaxed mb-3 text-center whitespace-pre-line">
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
