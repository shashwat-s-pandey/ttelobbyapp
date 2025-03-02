"use client";
import React, { useState } from "react";
import Link from "next/link";
// import { LoginModal } from "./LoginModal";
import { Menu } from "lucide-react";

const AboutNav = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-500 h-12 z-50 flex items-center px-4 shadow-md">
        {/* Sidebar Toggle Button */}
        <button
            className="text-white hover:scale-110 p-2 mr-4"
        >
            <Menu className="w-7 h-7" />
        </button>

        <div className="h-full flex items-center">
          <ul className="flex text-lg h-full items-center justify-center">
            <Link href="/" className="hover:bg-blue-600 duration-300 h-full flex items-center justify-center">
              <button className="h-full text-white px-5">Home</button>
            </Link>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default AboutNav;
