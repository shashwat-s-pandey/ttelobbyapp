"use client"
// import Carousel from "@/components/Carousel";
// import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <Header/>
      <Nav onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute w-full h-[80%]"
      >
        <Image 
          src="/cbvndb.jpeg" 
          alt="Background" 
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur" // ✅ Adds a low-res placeholder
          blurDataURL="/cbvndb.jpeg" // ✅ Uses the same image for instant appearance
        />
      </motion.div>


      <Sidebar onLogin={() => console.log("Login clicked")} isOpen={isSidebarOpen} />
      <main className="ml-44">
        <HeroSection/>
        {/* <Carousel /> */}
      </main>
      <Footer/>
    </div>
  );
}
