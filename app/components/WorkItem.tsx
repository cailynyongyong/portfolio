"use client";

import { useState } from "react";

interface WorkItemProps {
  company: string;
  role: string;
  description?: string;
  icon?: string;
  isActive?: boolean;
}

export default function WorkItem({
  company,
  role,
  description,
  icon = "⚫",
  isActive = false,
}: WorkItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <div className="flex items-center gap-2">
            {isActive && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
            <div>
              <span className="font-semibold text-black">{company}</span>
              <span className="text-gray-500 text-sm ml-2">{role}</span>
            </div>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && description && (
        <div className="mt-4 ml-14 text-gray-700 leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}
