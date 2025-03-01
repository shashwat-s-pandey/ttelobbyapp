"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Info, LayoutDashboard, Train, ClipboardList, Bell, Settings } from "lucide-react";
import { LoginModal } from "./LoginModal";

const Sidebar = ({ onLogin, isOpen }: { onLogin: () => void; isOpen: boolean }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <aside
        className={`h-screen bg-white/40 backdrop-blur-lg shadow-xl border-gray-200 absolute left-0 flex flex-col transition-all duration-300 ${
          isOpen ? "w-[187px] px-4" : "w-[77px] px-2"
        }`}
      >
        <ul className="mt-6 space-y-4">

          {/* Dashboard - Opens Login Modal */}
          <li>
            <button
              onClick={() => {
                onLogin(); // Call parent login function
                setIsLoginOpen(true); // Open the modal
              }}
              className="w-full flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all"
            >
              <LayoutDashboard className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Dashboard
              </span>
            </button>
          </li>

          {/* Train Schedules */}
          <li>
            <Link href="/schedules" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Train className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Schedules
              </span>
            </Link>
          </li>

          {/* Duty Logs */}
          <li>
            <Link href="/duty-logs" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <ClipboardList className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Duty Logs
              </span>
            </Link>
          </li>

          {/* Notifications */}
          <li>
            <Link href="/notifications" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Bell className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Notifications
              </span>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link href="/about" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Info className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                About
              </span>
            </Link>
          </li>

          {/* Settings */}
          <li>
            <Link href="/settings" className="flex items-center text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Settings className="w-[28px] h-[28px] shrink-0" />
              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0"}`}>
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
