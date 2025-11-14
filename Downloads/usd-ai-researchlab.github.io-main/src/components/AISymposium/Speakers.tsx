import React from "react";

const Speakers: React.FC = () => {
  const speakerList = [
    "George Awad, Computer Scientist/Project Leader, National Institute of Standards and Technology (NIST)",
    "Pete Doucette, Director, EROS Center",
    "Joseph J. Schueder, Senior Technical Fellow, Collins Aerospace",
    "Joseph Engler, Chief AI Scientist, Collins Aerospace",
    "Chris Reuter, Sr. Principal AI Engineer, Collins Aerospace",
    "Gopi Challagolla, Software Engineer, Microsoft",
    "Kinchel C. Doerner, Director, SD EPSCoR",
    "Carson Merkwan, Director of Business Development, Direct Companies",
    "Eric Freer, Representative, Sterling",
    "Dan Klosterman, Representative, Edge Team",
    "Rajesh Kavasseri, South Dakota State University (SDSU)",
    "David Zeng, Dakota State University (DSU)",
    "Douglas Lauffenburger, Full Professor and Founding Chair, Dept of Biological Engineering, MIT",
    "Kaifu Chen, Associate Professor, Harvard Med School / Boston Children's Hospital",
    "Yinglong Miao, Associate Professor, University of North Carolina Chapel Hill",
    "Kara McCormick, Executive Director, South Dakota Biotech",
    "Sujit Sakpal, Avera",
    "KC Santosh, University of South Dakota / SDBCC",
    "William Chen, University of South Dakota / SDBCC",
    "Jeffrey S. McGough, South Dakota School of Mines and Technology / SDBCC"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        <svg 
          className="inline-block mr-2 h-6 w-6" 
          style={{ color: '#C53030' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
          />
        </svg> Speakers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {speakerList.map((speaker, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">{speaker}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-600 text-lg">... more coming soon.</p>
      </div>
    </div>
  );
};

export default Speakers;
