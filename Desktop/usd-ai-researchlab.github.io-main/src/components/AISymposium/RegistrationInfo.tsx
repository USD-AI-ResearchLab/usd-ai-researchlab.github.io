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

const RegistrationInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Registration Link
        </h2>
        {isOpen ? (
          <ChevronUp />
        ) : (
          <ChevronDown />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 border-t pt-4 text-gray-700 text-base">
          <p className="mb-4">
            This event is <strong>free</strong>, but registration is required to attend.
          </p>
          <p className="mb-4">
            Registration link:{" "}
            <a
              href="https://events.vtools.ieee.org/event/register/487885"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-red underline hover:text-logo-red"
            >
              https://events.vtools.ieee.org/event/register/487885
            </a>
          </p>
          <p className="mb-4">
            <strong>Sign up, attend, and receive a certificate of participation immediately after the event!</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default RegistrationInfo;
