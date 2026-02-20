import React, { useState } from "react";

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
      { time: "2:45 PM - 3:30 PM", title: "Blitz Talk", details: "TBD" },
      { time: "3:30 PM - 3:45 PM", title: "Break / Networking" },
      { time: "3:45 PM - 4:30 PM", title: "Blitz Talk", details: "TBD" },
      { time: "4:30 PM - 5:00 PM", title: "Day 1 Closing Remarks" },
    ],
    day2: [
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
        details: "Moderator: KC Santosh (USD), Panelists: Douglas Lauffenburger (MIT), Kaifu Chen (Harvard Med School), Yinglong Miao (UNC Chapel Hill), George Awad (NIST)",
      },
      { time: "4:00 PM - 4:15 PM", title: "Break / Networking" },
      { time: "4:15 PM - 5:00 PM", title: "Closing Remarks & Future Directions" },
    ],
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Conference Schedule
        </h2>
        <button
          onClick={() => setIsScheduleOpen(!isScheduleOpen)}
          className="font-medium schedule-toggle-btn"
        >
          {isScheduleOpen ? "Hide Schedule" : "Show Schedule"}
        </button>
      </div>

      {isScheduleOpen && (
        <div>
          {/* Day Tabs */}
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 font-medium ${
                activeDay === "day1"
                  ? "day-tab-active"
                  : "text-gray-600 day-tab-inactive"
              }`}
              onClick={() => setActiveDay("day1")}
            >
              Day 1: {dates.day1}
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeDay === "day2"
                  ? "day-tab-active"
                  : "text-gray-600 day-tab-inactive"
              }`}
              onClick={() => setActiveDay("day2")}
            >
              Day 2: {dates.day2}
            </button>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 font-semibold border border-gray-300">Time</th>
                  <th className="px-4 py-2 font-semibold border border-gray-300">Session</th>
                  <th className="px-4 py-2 font-semibold border border-gray-300">Details</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-4 py-2 align-top whitespace-nowrap border border-gray-300">{item.time}</td>
                    <td className="px-4 py-2 align-top border border-gray-300">{item.title}</td>
                    <td className="px-4 py-2 align-top border border-gray-300">{item.details || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/resources/AI_Symposium_Agenda_Final.pdf"
              className="underline font-medium schedule-download-link"
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
