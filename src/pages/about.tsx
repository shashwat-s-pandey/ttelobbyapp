import AboutHeader from '@/components/AboutHeader'
import React from 'react'
import "../app/globals.css";
import AboutNav from '@/components/AboutNav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from "framer-motion";

const about = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <AboutHeader/>
        <AboutNav/>
        <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute w-full h-[calc(100vh-130px)] top-[130px]"
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
        <Footer/>
    </div>
  )
}

export default about