"use client";
import React, { useState } from "react";
import { LoginModal } from "./LoginModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Info, LogIn } from "lucide-react"; // Import icons

const Nav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-200 h-14 shadow-md flex items-center px-6">
        <h1 className="text-xl font-bold text-gray-800">TTE Lobby</h1>
      </nav>

      {/* Sidebar (Always Visible) */}
      <aside className="w-64 h-screen bg-white/30 backdrop-blur-lg shadow-xl border-r border-gray-200 fixed top-14 left-0 flex flex-col">
        <ul className="mt-6 space-y-4 px-4">
          {/* Home Link */}
          <li>
            <Link href="/" className="flex items-center gap-3 text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </li>

          {/* About Link */}
          <li>
            <a href="#" className="flex items-center gap-3 text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <Info className="w-5 h-5" />
              <span>About</span>
            </a>
          </li>

          {/* Login Button */}
          <li>
            <button onClick={() => setIsLoginOpen(true)} className="w-full flex items-center gap-3 text-gray-700 hover:bg-blue-500 hover:text-white p-3 rounded-lg transition-all">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Nav;
