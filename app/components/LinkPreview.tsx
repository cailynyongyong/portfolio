"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  preview?: {
    title?: string;
    description?: string;
    image?: string;
    video?: string;
  };
}

export default function LinkPreview({
  href,
  children,
  className = "",
  preview,
}: LinkPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 8,
    });
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  // Extract domain from URL for default preview
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  return (
    <>
      <a
        href={href}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>

      {mounted &&
        showPreview &&
        createPortal(
          <div
            className="fixed z-50 transition-opacity duration-200"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80">
              {preview?.video ? (
                <video
                  src={preview.video}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              ) : preview?.image ? (
                <img
                  src={preview.image}
                  alt=""
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              ) : null}
              <div className="space-y-2">
                <div className="font-semibold text-sm text-black">
                  {preview?.title || getDomain(href)}
                </div>
                {preview?.description && (
                  <div className="text-xs text-gray-600 line-clamp-2">
                    {preview.description}
                  </div>
                )}
                <div className="text-xs text-gray-400">{getDomain(href)}</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
