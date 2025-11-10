import React, { useState } from "react";

const ChevronDown = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

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
  ],
  "Technical Program Committee": [
    "KC Santosh, University of South Dakota, USA",
    "William CW Chen, University of South Dakota, USA",
    "Jeffrey McGough, South Dakota School of Mines, USA",
    "Rodrigue Rizk, University of South Dakota, USA",
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

const CommitteeMembers: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Committee Members</h2>
        {isOpen ? (
          <ChevronUp />
        ) : (
          <ChevronDown />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 border-t pt-4 space-y-6">
          {Object.entries(committeeData).map(([title, members], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-red-600 mb-2">{title}</h3>
              <ul className="space-y-1 pl-4 list-disc text-gray-700 text-sm">
                {members.map((member, memberIdx) => (
                  <li key={memberIdx}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommitteeMembers;
