import React from "react";
import { Star, Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="z-50 w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 py-3 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 p-1.5 rounded-md">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <p className="hidden sm:flex text-gray-800 font-semibold text-xl">
          Quick Banner
        </p>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/Shobhit-Nagpal/quick-banner"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium transition-all hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900"
        >
          <Star className="w-5 h-5" />
          <span>Star on GitHub</span>
        </a>
        <a
          href="https://github.com/Shobhit-Nagpal/quick-banner"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden flex items-center justify-center bg-white border border-gray-300 text-gray-700 p-2 rounded-md transition-all hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900"
        >
          <Star className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
