import React from 'react';

interface PersonCardProps {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  memberKey?: string; // Added to identify team members for LinkedIn images
  scholarUrl?: string; // Google Scholar profile
  dblpUrl?: string; // DBLP profile
}

const PersonCard: React.FC<PersonCardProps> = ({ name, role, photo, url, scholarUrl, dblpUrl }) => {
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Get the best available image URL - prioritize local images, skip LinkedIn for students without photos
  const imageUrl = photo; // Only use provided photos, don't fetch LinkedIn images for new students

  const CardContent = () => (
    <div className="person-card bg-white rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center justify-between border-2 border-transparent hover:border-red-100">
      <div className="flex flex-col items-center flex-1">
        {/* Photo or Initials Circle */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg bg-white">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="person-card-image w-full h-full object-cover"
              style={{
                filter: 'contrast(1.02) brightness(1.01) saturate(1.05)',
                objectPosition: 'center 25%'
              }}
              onLoad={() => {
                console.log(`✅ Image loaded successfully for ${name}:`, imageUrl);
              }}
              onError={(e) => {
                console.error(`❌ Image failed to load for ${name}:`, imageUrl);
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center text-white font-bold text-2xl" style="background: linear-gradient(135deg, var(--logo-red, #C53030), var(--logo-red-light, #E53E3E))">
                      ${initials}
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center text-white font-bold text-2xl"
              style={{ background: 'linear-gradient(135deg, var(--logo-red, #C53030), var(--logo-red-light, #E53E3E))' }}
            >
              {initials}
            </div>
          )}
        </div>
        
        {/* Name */}
        <h3 className="text-lg font-semibold mb-3 line-clamp-2 leading-tight" style={{ color: 'var(--logo-red, #C53030)' }}>{name}</h3>
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
