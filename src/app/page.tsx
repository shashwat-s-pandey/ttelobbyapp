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
import "./home.css"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Nav onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar onLogin={() => console.log("Login clicked")} isOpen={isSidebarOpen} />
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="railway absolute w-full h-[calc(100vh-125px)] md:h-[calc(100vh-125px)] lg:h-[calc(100vh-125px)] top-[125px]"
      >
        <Image 
          src="/cbvndb.jpeg" 
          alt="Background" 
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur" 
          blurDataURL="/cbvndb.jpeg" 
        />
      </motion.div>
      <main className="ml-44 flex-grow pt-4">
        <HeroSection />
      </main>
      <Footer/>
    </div>
  );
}
