import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Surya Prakash Mishra</h3>
            <p className="text-slate-400">Computer Science Student</p>
          </div>
          <div className="flex items-center">
            <span className="text-slate-300">Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span className="text-slate-300">using React & Tailwind</span>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};