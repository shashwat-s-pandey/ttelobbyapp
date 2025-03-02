"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LoginModal } from "./LoginModal";
import { Menu } from "lucide-react";

const Nav = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-500 h-12 z-50 flex items-center px-4 shadow-md">
        {/* Sidebar Toggle Button */}
        <button
          className="text-white hover:scale-110 p-2 mr-4"
          onClick={onToggleSidebar}
        >
          <Menu className="w-7 h-7" />
        </button>

        <div className="h-full flex items-center">
          <ul className="flex text-lg h-full items-center justify-center">
            <Link href="/" className="bg-blue-600 h-full flex items-center justify-center">
              <button className="h-full text-white px-5">Home</button>
            </Link>
            <Link className="h-full" href="/login" onClick={(e) => { 
                e.preventDefault();  // Prevent default navigation
                setIsLoginOpen(true); 
              }}>
              <button className="h-full text-white transform hover:bg-blue-600 duration-300 px-5">Sign On (Duty)</button>
            </Link>
            <Link className="h-full" href="/login" onClick={(e) => { 
                e.preventDefault();  // Prevent default navigation
                setIsLoginOpen(true); 
              }}>
              <button className="h-full text-white transform hover:bg-blue-600 duration-300 px-5">Sign Off (Duty)</button>
            </Link>
          </ul>
        </div>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Nav;
