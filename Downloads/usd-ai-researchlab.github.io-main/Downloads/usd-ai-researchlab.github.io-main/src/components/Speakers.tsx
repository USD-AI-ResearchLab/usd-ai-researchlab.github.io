import React from "react";

const Speakers: React.FC = () => {
  const keynoteSpeekers = [
    {
      name: "Dr. George Awad",
      title: "Computer Scientist/Project Leader, NIST",
      topic: "NIST GenAI: Text-to-Text Evaluation",
      bio: "Dr. George Awad is a Computer Scientist and Project Leader at the National Institute of Standards and Technology (NIST), specializing in multimedia evaluation and AI systems.",
      day: "Day 1"
    },
    {
      name: "Dr. Douglas Lauffenburger",
      title: "Professor, MIT",
      topic: "Computational Systems Modeling of Host Immune Response to Pathogen Infection and Vaccines",
      bio: "Dr. Douglas Lauffenburger is a prominent researcher at MIT, focusing on computational systems biology and bioengineering.",
      day: "Day 2"
    }
  ];

  const blitzSpeakers = [
    {
      name: "Dr. Pete Doucette",
      title: "Director, EROS Center",
      topic: "AI: Now and Zen",
      affiliation: "USGS EROS Center"
    },
    {
      name: "Dr. Kaifu Chen",
      title: "Researcher",
      topic: "AI methods to uncover cell identity genes",
      affiliation: "Harvard Med School/Boston Children's Hospital"
    },
    {
      name: "Dr. Yinglong Miao",
      title: "Professor",
      topic: "Accelerated and AI-Boosted Molecular Simulations and Drug Discovery",
      affiliation: "UNC Chapel Hill"
    },
    {
      name: "Gopi Challagolla",
      title: "Microsoft Representative",
      topic: "AI in the Workplace: Productivity & Creativity – Navigating the New Era of Work with Artificial Intelligence",
      affiliation: "Microsoft"
    }
  ];

  const workshopSpeakers = [
    {
      names: ["Joseph J Schueder", "Joseph Engler", "Chris Reuter"],
      titles: ["Senior Technical Fellow", "Chief AI Scientist", "Sr. Principal AI Engineer"],
      topic: "Industry Workshop on AI Applications",
      affiliation: "Collins Aerospace"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Featured Speakers
      </h2>

      {/* Keynote Speakers */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#C53030' }}>Keynote Speakers</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {keynoteSpeekers.map((speaker, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-800">{speaker.name}</h4>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#f8f3f3', color: '#C53030' }}>
                  {speaker.day}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{speaker.title}</p>
              <p className="font-medium text-gray-800 mb-2">"{speaker.topic}"</p>
              <p className="text-sm text-gray-600">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blitz Talk Speakers */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#C53030' }}>Blitz Talk Speakers</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {blitzSpeakers.map((speaker, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-800">{speaker.name}</h4>
              <p className="text-sm text-gray-600 mb-1">{speaker.title}</p>
              <p className="text-sm text-blue-600 mb-2">{speaker.affiliation}</p>
              <p className="text-sm font-medium text-gray-800">"{speaker.topic}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Speakers */}
      <div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#C53030' }}>Workshop Speakers</h3>
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="font-bold text-gray-800 mb-2">Collins Aerospace Team</h4>
          <div className="mb-3">
            {workshopSpeakers[0].names.map((name, idx) => (
              <div key={idx} className="flex justify-between text-sm mb-1">
                <span className="font-medium">{name}</span>
                <span className="text-gray-600">{workshopSpeakers[0].titles[idx]}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-600 mb-2">{workshopSpeakers[0].affiliation}</p>
          <p className="text-sm font-medium text-gray-800">"{workshopSpeakers[0].topic}"</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Note:</span> Additional speakers may be announced. 
          Please check back for updates or contact the organizing committee for the latest information.
        </p>
      </div>
    </div>
  );
};

export default Speakers;
