"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const text = "Welcome to Traveling Ticket Examiner Lobby";
  const [displayedText, setDisplayedText] = useState(""); // Initialize as empty string

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1)); // Slice method prevents "undefined" issues
        index++;
      } else {
        clearInterval(interval); // Stop when text is fully displayed
      }
    }, 50); // Adjust typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center text-center">
        {/* Left Logo */}
        <Image className="pl-2" src={"/irlogo.png"} alt="" width={90} height={90}></Image>
        {/* <img className="pl-2" src="./irlogo.png" alt="IR Logo" width={90} height={90} /> */}

        {/* Typing Effect Heading */}
        <motion.h1
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {displayedText}
        </motion.h1>

        {/* Right Logo */}
        <a className="pl-5" href="https://www.cris.org.in">
          <Image src={"/cris_logo.png"} alt="" width={150} height={100}></Image>
          {/* <img src="./cris_logo.png" alt="CRIS Logo" width={150} height={100} /> */}
        </a>
      </div>

      <title>Computerised TTE Lobby</title>
      <meta name="description" content="A Next.js website built with TypeScript." />
    </div>
  );
};

export default Header;
