import { RichTextSegment } from "@/lib/notion";

interface RichTextProps {
  segments: RichTextSegment[];
}

export default function RichText({ segments }: RichTextProps) {
  return (
    <>
      {segments.map((segment, index) => {
        let className = "";
        const styles: React.CSSProperties = {};

        // Build className based on formatting
        if (segment.bold) className += " font-bold";
        if (segment.italic) className += " italic";
        if (segment.underline) className += " underline";
        if (segment.strikethrough) className += " line-through";
        if (segment.code)
          className += " bg-gray-100 px-1 py-0.5 rounded text-xs font-mono";

        // Handle colors
        if (segment.color && segment.color !== "default") {
          const colorMap: { [key: string]: string } = {
            gray: "text-gray-600",
            brown: "text-amber-700",
            orange: "text-orange-600",
            yellow: "text-yellow-600",
            green: "text-green-600",
            blue: "text-blue-600",
            purple: "text-purple-600",
            pink: "text-pink-600",
            red: "text-red-600",
            gray_background: "bg-gray-100 px-1 rounded",
            brown_background: "bg-amber-100 px-1 rounded",
            orange_background: "bg-orange-100 px-1 rounded",
            yellow_background: "bg-yellow-100 px-1 rounded",
            green_background: "bg-green-100 px-1 rounded",
            blue_background: "bg-blue-100 px-1 rounded",
            purple_background: "bg-purple-100 px-1 rounded",
            pink_background: "bg-pink-100 px-1 rounded",
            red_background: "bg-red-100 px-1 rounded",
          };

          if (colorMap[segment.color]) {
            className += ` ${colorMap[segment.color]}`;
          }
        }

        // Render with link if href exists
        if (segment.href) {
          return (
            <a
              key={index}
              href={segment.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline hover:text-gray-600${className}`}
              style={styles}
            >
              {segment.text}
            </a>
          );
        }

        return (
          <span key={index} className={className} style={styles}>
            {segment.text}
          </span>
        );
      })}
    </>
  );
}
