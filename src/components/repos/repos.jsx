import React, {useState, useEffect} from 'react'
import { FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';

function Repos({ repos }) {
  if (!repos || !Array.isArray(repos)) return null; // or show a loading state
  return (
    <div className="grid grid-cols-1 pt-2 sm:grid-cols-2 gap-8 bg-gray-800 pt-20">
      {repos.map(repo => (
        <div
          key={repo.id}
          className="bg-gradient-to-r from-black via-black to-purple-900 rounded-lg p-3 sm:p-4 shadow w-full max-w-xs mx-auto"
        >
          <h3 className="text-base sm:text-lg font-bold text-white truncate">{repo.name}</h3>
          <p className="text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm line-clamp-2">{repo.description}</p>
          <div className="flex items-center justify-between text-gray-400 text-[10px] sm:text-xs mt-2">
            <span className="flex items-center"><FaStar className="mr-1" />{repo.stargazers_count}</span>
            <span className="flex items-center"><FaExclamationCircle className="mr-1" />{repo.open_issues_count}</span>
            <span className="flex items-center"><FaCodeBranch className="mr-1" />{repo.forks_count}</span>
            <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repos