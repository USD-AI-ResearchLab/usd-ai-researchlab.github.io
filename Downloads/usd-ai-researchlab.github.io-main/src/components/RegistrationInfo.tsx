import React, { useState } from "react";

const RegistrationInfo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Registration link
        </h2>
        {isOpen ? (
          <span className="h-6 w-6 text-gray-600">▲</span>
        ) : (
          <span className="h-6 w-6 text-gray-600">▼</span>
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
              className="underline"
              style={{ color: '#C53030' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#A02727'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#C53030'}
            >
              https://events.vtools.ieee.org/event/register/487885
            </a>
          </p>
          <p className="mb-4">
            <strong>🎓 Sign up, attend, and receive a certificate of participation immediately after the event! </strong> 
          </p> 
        </div>
      )}
    </div>
  );
};

export default RegistrationInfo;
