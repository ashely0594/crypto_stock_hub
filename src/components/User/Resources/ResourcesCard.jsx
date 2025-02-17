import React from "react";
import { ExternalLink } from "lucide-react";

const ResourceCard = ({ title, description, link, difficulty }) => {
  return (
    <article className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm"
          >
            Visit Resource <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        {difficulty && (
          <div>
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                difficulty === "Beginner"
                  ? "bg-green-100 text-green-800"
                  : difficulty === "Intermediate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {difficulty}
            </span>
          </div>
        )}
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      </div>
    </article>
  );
};

export default ResourceCard;

