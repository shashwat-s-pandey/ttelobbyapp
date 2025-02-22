"use client";
import React from 'react'
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { Button } from "@/components/ui/button";

const Nav = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="./cris_logo.png" alt="" width={120} height={50}/>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-black">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-black">About</a>
          </li>
          <li>
            <Button onClick={() => setIsLoginOpen(true)} className="text-gray-700 hover:text-black">
                Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}

export default Nav