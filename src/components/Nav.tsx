"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LoginModal } from "./LoginModal";
import { Menu } from "lucide-react";

const Nav = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-200 h-12 z-50 flex items-center px-4">
        {/* Sidebar Toggle Button */}
        <button
          className="text-gray-700 hover:text-black p-2 mr-4"
          onClick={onToggleSidebar}
        >
          <Menu className="w-7 h-7" />
        </button>

        <div className="h-full flex items-center">
          <ul className="flex text-xl h-full items-center justify-center">
            <Link href="/" className="bg-blue-300 h-full flex items-center justify-center">
              <button className="h-full text-gray-700 hover:text-black px-5">Home</button>
            </Link>
            <Link href="/" className="h-full">
              <button className="h-full text-gray-700 hover:text-black hover:bg-blue-300 px-5">About</button>
            </Link>
            <Link className="h-full" href="/login" onClick={(e) => { 
                e.preventDefault();  // Prevent default navigation
                setIsLoginOpen(true); 
              }}>
              <button className="h-full text-gray-700 hover:text-black hover:bg-blue-300 px-5">Login</button>
            </Link>
          </ul>
        </div>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Nav;
