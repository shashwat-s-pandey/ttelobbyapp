"use client";
import React from "react";
import Link from "next/link";
import { Home, Info, LogIn } from "lucide-react";

const Sidebar = ({ onLogin, isOpen }: { onLogin: () => void; isOpen: boolean }) => {
  return (
    <aside
      className={`h-[81%] bg-white/50 backdrop-blur-lg shadow-xl border-gray-200 absolute left-0 flex flex-col transition-all duration-300 ${
        isOpen ? "w-44 px-4" : "w-[77px] px-2"
      }`}
    >
      <ul className="mt-6 space-y-4">
        <li>
          <Link href="/" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
            <Home className="w-[28px] h-[28px] shrink-0" />  
            <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
              Home
            </span>
          </Link>
        </li>
        <li>
          <a href="#" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
            <Info className="w-[28px] h-[28px] shrink-0" />
            <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
              About
            </span>
          </a>
        </li>
        <li>
          <button
            onClick={onLogin}
            className="w-full flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all"
          >
            <LogIn className="w-[28px] h-[28px] shrink-0" />
            <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
              Login
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
