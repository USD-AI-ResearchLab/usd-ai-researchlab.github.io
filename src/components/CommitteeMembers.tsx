import React, { useState } from "react";

const CommitteeMembers: React.FC = () => {
  const committeeData = {
    "Organizing Committee": [
      "KC Santosh, Chair & Professor, University of South Dakota (Founding Chair, AI Symposium & Co-Chair, SDBCC)",
      "William CW Chen, Assist. Professor, University of South Dakota (Chair, SDBCC)",
      "Jeffrey McGough, Head & Professor, South Dakota School of Mines (Co-Chair, SDBCC)",
      "Rodrigue Rizk, Assist. Professor/Grad Coord, University of South Dakota (Co-Chair, AI Symposium)",
      "Robert Burke, Conference Committee Chair, IEEE Region 4"
    ],
    "Symposium Secretary": [
      "Rodrigue Rizk, University of South Dakota, USA"
    ],
    "Publicity Committee": [
      "Isaiah Cohen, University of South Dakota, USA",
      "Rodrigue Rizk, University of South Dakota, USA",
      "Md Shahedul Amin Sheam, University of South Dakota, USA"
    ],
    "Technical Program Committee": [
      "KC Santosh, University of South Dakota, USA (Chair)",
      "Rodrigue Rizk, University of South Dakota, USA",
      "William CW Chen, University of South Dakota, USA",
      "Jeffrey McGough, South Dakota School of Mines, USA",
      "Nandita Yadav, University of South Dakota, USA",
      "Md. Alim Ul Gias, University of South Dakota, USA",
      "Srikanth Baride, University of South Dakota, USA",
      "Longwei Wang, University of South Dakota, USA"
    ],
    "Local Organizing Committee": [
      "KC Santosh, University of South Dakota, USA (Chair)",
      "Rodrigue Rizk, University of South Dakota, USA",
      "William CW Chen, University of South Dakota, USA",
      "Nandita Yadav, University of South Dakota, USA",
      "Md. Alim Ul Gias, University of South Dakota, USA",
      "Srikanth Baride, University of South Dakota, USA",
      "Longwei Wang, University of South Dakota, USA"
    ]
  };

  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Committee Members
      </h2>

      <div className="space-y-4">
        {Object.entries(committeeData).map(([section, members]) => (
          <div key={section} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleSection(section)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <h3 className="font-semibold text-gray-800">{section}</h3>
            </button>
            
            {expandedSections[section] && (
              <div className="p-4 border-t border-gray-200">
                <ul className="space-y-2">
                  {members.map((member, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="mr-2" style={{ color: '#C53030' }}>•</span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#f8f3f3' }}>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Note:</span> Committee member list is subject to updates. 
          For the most current information, please contact the organizing committee.
        </p>
      </div>
    </div>
  );
};

export default CommitteeMembers;
