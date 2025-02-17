import React from "react";
import { Clock } from "lucide-react";

export const ArticlePreview = ({ title, description, readTime, date, category, link }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
      <a href={link} className="block h-full">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
            <span>•</span>
            <time>{date}</time>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticlePreview;
