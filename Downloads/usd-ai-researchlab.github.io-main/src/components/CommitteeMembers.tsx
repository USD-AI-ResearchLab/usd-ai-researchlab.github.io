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
      "Travis Loof, University of South Dakota, USA",
      "William Chen, University of South Dakota, USA",
      "Longwei Wang, University of South Dakota, USA",
      "Dipankar DasGupta, University of Memphis, USA",
      "Yaoi-Chiang, University of Minnesota, USA",
      "Aobo Li, UC San Diego, USA",
      "Kurtis Van Gent, Google, USA",
      "Naveen Rokkam, Mygo Consulting Inc, USA",
      "Hubert Cecotti, California State University, USA",
      "Vishnu Pendyala, San Jose State University, USA",
      "Yashbir Singh, Mayo Clinic – Rochester, USA",
      "Szilard Vajda, Central Washington University, USA",
      "Alice Othmani, Universite de Paris-Est, France",
      "Laurent Wendling, University of Paris, France",
      "Mickael Coustaty, University of La Rochelle, France",
      "Aaisha Makkar, University of Derby, UK",
      "Anas Aboud El Kalam, Cadi Ayyad University, Morocco",
      "AbdelKrim Haqiq, Hassan First University of Settat, Morocco",
      "Jitendra Kumar, NIT Tiruchirappalli, India",
      "Satish K Singh, IIIT Allahabad, India",
      "Surbhi Vijh, Amity University, India",
      "Ravindra Hegadi, Central University of Karnataka, India",
      "Deepika Koundal, UPES, India",
      "D S Guru, University of Mysore, India",
      "Marzieh Khakifirooz, Tecno de Monterrey, Mexico",
      "Md-Rafik Bouguelia, Hamlstad University, Sweden",
      "Antoine Vacavant, Univ Clermont Auvergne, France",
      "Djamila Auoada, University of Luxembourg, Luxembourg",
      "ChakChai So-In, Khon Kaen University, Thailand",
      "Xi-Zhao Wang, ShenZhen University, China",
      "Sunil Aryal, Deakin University, AUS",
      "Ameni Boumaiza, Hamad Bin Khalifa University, Qatar",
      "Debasmita Ghosh Roy, Banasthali Vidyapith, India",
      "Priti Rai, University of Delhi, India"
    ],
    "Logistics & Operations": [
      "Ryan Oines, Chief Operating Officer, USD Discovery District",
      "Marc-Antoine Niamba, Biotech Development, USD Discovery District",
      "Laura Wiemers, Management Analyst, University of South Dakota",
      "Cassie Stolpe, Administrative Assistant, University of South Dakota",
      "Kirby Fuglsby, Technology Transfer Officer, University of South Dakota",
      "Hanna DeLange, Public Relations & Content Strategist, University of South Dakota",
      "Alissa Matt, Assist VP for Marketing & University Relations, University of South Dakota"
    ],
    "Advisory Board Members": [
      "Sheila Gestring, President, University of South Dakota",
      "Jay Perry, Vice President, University of South Dakota – Sioux Falls",
      "Dan Engebretson, Vice President, Research & Sponsored Programs, University of South Dakota",
      "Kurt Hackemer, Vice President for Academic Affairs & Provost, University of South Dakota",
      "John Dudley, Dean, College of Arts & Science, University of South Dakota",
      "Tim Ridgway, Vice President of Health Affairs and Dean of the Sanford School of Medicine, University of South Dakota",
      "William Mayhan, Dean, Biomedical Sciences, University of South Dakota"
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg> Committee Members
      </h2>

      <div className="space-y-4">
        {Object.entries(committeeData).map(([section, members]) => (
          <div key={section} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleSection(section)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <h3 className="font-semibold text-gray-800">{section}</h3>
              <span style={{ color: '#C53030' }}>
                {expandedSections[section] ? "▲" : "▼"}
              </span>
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
