import React, { useState, useEffect } from "react";

const StatusPage = ({ status, handleClose }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === 1) {
      setMessage("Submitting your enquiry...");
    } else if (status === 2) {
      setMessage("Your enquiry has been submitted successfully.");
    } else if (status === 3) {
      setMessage(
        "There was an error submitting your enquiry. Please try again."
      );
    }
  }, [status]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-500">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        {status === 1 ? (
          <div className="flex items-center justify-center mb-8">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-700"></div>
          </div>
        ) : status === 2 ? (
          <>
            <svg
              className="w-16 h-16 mx-auto mb-4 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
            <p className="text-gray-600 mb-4">{message}</p>
          </>
        ) : (
          <>
            <svg
              className="w-16 h-16 mx-auto mb-4 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <h2 className="text-2xl font-bold text-red-800 mb-2">Error!</h2>
            <p className="text-red-600 mb-4">{message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
