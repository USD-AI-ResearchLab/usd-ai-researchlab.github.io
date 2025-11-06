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

const ConferenceSchedule: React.FC = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(true);
  const [activeDay, setActiveDay] = useState("day1");

  const dates = {
    day1: "Thu 26/06",
    day2: "Fri 27/06",
  };

  const scheduleData = {
    day1: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast" },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Speakers: President (USD), Vice-President (Academic Affairs), Vice-President (Office of Research), Dean (College of Arts & Sciences), Chair (Department of Computer Science)" },
      { time: "9:30 AM - 10:30 AM", title: "Keynote Address", details: "NIST GenAI: Text-to-Text Evaluation - Dr. George Awad, Computer Scientist/Project Leader, NIST" },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking" },
      { time: "10:45 AM - 11:30 AM", title: "Blitz Talk", details: "AI: Now and Zen - Dr. Pete Doucette, Director, EROS Center" },
      { time: "11:30 AM - 12:15 PM", title: "Workshop", details: "Speakers: Joseph J Schueder (Senior Technical Fellow), Joseph Engler (Chief AI Scientist), Chris Reuter (Sr. Principal AI Engineer), Collins Aerospace" },
      { time: "12:15 PM - 2:00 PM", title: "Lunch", details: "Buffet + Networking Lounge" },
      { time: "2:00 PM – 2:45 PM", title: "Workshop", details: "AI in the Workplace: Productivity & Creativity – Navigating the New Era of Work with Artificial Intelligence - Gopi Challagolla, Microsoft" },
      {
        time: "2:45 PM - 4:00 PM",
        title: "Panel: AI and Workforce Development in South Dakota",
        details:
          "Panelists: Kinchel C. Doerner (SD EPSCoR), Carson Merkwan (Direct Companies), Joseph Engler (Collins Aerospace), Eric Freer (Sterling), Dan Klosterman (Edge Team), Rajesh Kavasseri (SDSU), David Zeng (DSU); Moderator: Jose Lira (Vermillion Unplugged)",
      },
      { time: "4:00 PM - 5:00 PM", title: "Evening Reception", details: "Light hors d'oeuvres, social hour, and sponsor booths" },
    ],
    day2: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast" },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Welcome session with Senator Round's Office, USD and SDBCC leadership, and SDBCC program overview" },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Keynote Address",
        details: "Computational Systems Modeling of Host Immune Response to Pathogen Infection and Vaccines - Dr. Douglas Lauffenburger, MIT",
      },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking" },
      { time: "10:45 AM - 11:15 AM", title: "Blitz Talk I", details: "AI methods to uncover cell identity genes - Dr. Kaifu Chen, Harvard Med School/Boston Children's Hospital" },
      { time: "11:15 AM - 11:45 AM", title: "Blitz Talk II", details: "Accelerated and AI-Boosted Molecular Simulations and Drug Discovery - Dr. Yinglong Miao, UNC Chapel Hill" },
      { time: "11:45 AM - 12:15 PM", title: "Blitz Talk III", details: "TRECVID: Video Understanding Evaluation at NIST - Dr. George Awad, NIST" },
      { time: "12:15 PM - 2:00 PM", title: "Roundtable Lunch Discussion", details: "With Speakers" },
      {
        time: "2:00 PM - 4:00 PM",
        title: "Panel Discussion: Biomedical Computation and AI",
        details:
          "Panelists: Kara McCormick (SD BioTech), Sujit Sakpal (Avera), KC Santosh (USD/SDBCC), William Chen (USD/SDBCC), Jeffrey S McGough (SDSMT/SDBCC), Gregory Bertsch (University of South Dakota); Moderator: Jose Lira (Vermillion Unplugged)",
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsScheduleOpen(!isScheduleOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Conference Schedule</h2>
        {!isScheduleOpen ? (
          <ChevronDown className="h-6 w-6 text-gray-600" />
        ) : (
          <ChevronUp className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isScheduleOpen && (
        <div className="mt-4 border-t pt-4">
          {/* Day Navigation */}
          <div className="flex border-b mb-6">
            {Object.entries(dates).map(([key, date]) => (
              <button
                key={key}
                className={`py-2 px-4 font-medium ${
                  activeDay === key
                    ? "border-b-2 border-red-500 text-red-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveDay(key)}
              >
                {date}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-4 py-2 font-semibold">Time</th>
                <th className="px-4 py-2 font-semibold">Session</th>
                <th className="px-4 py-2 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 align-top whitespace-nowrap">{item.time}</td>
                  <td className="px-4 py-2 align-top">{item.title}</td>
                  <td className="px-4 py-2 align-top">{item.details || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-center">
            <a
              href="/resources/AI Symposium Agenda _ Final.pdf"
              className="text-red-600 underline font-medium"
              download
            >
              📥 Download Full Schedule (PDF)
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConferenceSchedule;
