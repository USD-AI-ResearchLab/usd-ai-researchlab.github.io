import React, { useState, useEffect } from 'react';
import { linkedInImageManager } from '../utils/linkedInImageManager';

interface ImageStatus {
  name: string;
  fileName: string;
  exists: boolean;
  linkedinUrl: string;
  lastChecked: Date;
}

const ImageManager: React.FC = () => {
  const [imageStatuses, setImageStatuses] = useState<ImageStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const checkAllImages = async () => {
    setIsChecking(true);
    const teamMembers = linkedInImageManager.getTeamMembers();
    const statuses: ImageStatus[] = [];

    for (const member of teamMembers) {
      const exists = await linkedInImageManager.checkImageExists(member.imageFileName);
      statuses.push({
        name: member.name,
        fileName: member.imageFileName,
        exists,
        linkedinUrl: member.linkedinUrl,
        lastChecked: new Date()
      });
    }

    setImageStatuses(statuses);
    setLastUpdate(new Date());
    setIsChecking(false);
  };

  const openLinkedInProfile = (url: string) => {
    window.open(url, '_blank');
  };

  const copyDownloadInstructions = () => {
    const instructions = linkedInImageManager.generateDownloadInstructions();
    navigator.clipboard.writeText(instructions);
    alert('Download instructions copied to clipboard!');
  };

  useEffect(() => {
    checkAllImages();
  }, []);

  const missingCount = imageStatuses.filter(status => !status.exists).length;
  const totalCount = imageStatuses.length;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">LinkedIn Profile Image Manager</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">{totalCount - missingCount}</div>
            <div className="text-sm text-green-700">Images Available</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">{missingCount}</div>
            <div className="text-sm text-red-700">Missing Images</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">{totalCount}</div>
            <div className="text-sm text-blue-700">Total Members</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={checkAllImages}
            disabled={isChecking}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isChecking ? 'Checking...' : 'Refresh Status'}
          </button>
          
          <button
            onClick={copyDownloadInstructions}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Copy Download Instructions
          </button>

          <div className="text-sm text-gray-500 flex items-center">
            {lastUpdate && `Last updated: ${lastUpdate.toLocaleTimeString()}`}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {imageStatuses.map((status) => (
          <div
            key={status.fileName}
            className={`p-4 rounded-lg border-2 ${
              status.exists 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{status.name}</h3>
                <p className="text-sm text-gray-600">{status.fileName}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  status.exists 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {status.exists ? 'Available' : 'Missing'}
                </span>
                
                <button
                  onClick={() => openLinkedInProfile(status.linkedinUrl)}
                  className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                >
                  Open LinkedIn
                </button>
              </div>
            </div>

            {!status.exists && (
              <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
                <strong>To add this image:</strong>
                <ol className="mt-1 ml-4 list-decimal text-xs">
                  <li>Click "Open LinkedIn" above</li>
                  <li>Right-click their profile picture → "Open image in new tab"</li>
                  <li>Right-click opened image → "Save image as..."</li>
                  <li>Save as: <code className="bg-gray-100 px-1">{status.fileName}</code></li>
                  <li>Place in: <code className="bg-gray-100 px-1">/public/images/team/</code></li>
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Automation Options:</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p>• <strong>Manual:</strong> Use the download instructions above</p>
          <p>• <strong>Semi-automated:</strong> Run <code className="bg-gray-100 px-1">node linkedin-image-fetcher.js</code></p>
          <p>• <strong>Scheduled:</strong> Set up a cron job to check monthly</p>
        </div>
      </div>
    </div>
  );
};

export default ImageManager;
