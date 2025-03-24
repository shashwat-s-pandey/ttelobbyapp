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
      <iframe src="https://osivamh5v2wvbf2.in.qlikcloud.com/single/?appid=a972b12d-666a-46ec-8a49-7dd39c6afb01&sheet=dGSNjcJ&theme=horizon&opt=ctxmenu,currsel" style={{ border: "none", width: "100%", height: "100vh" }}></iframe>
        <Footer/>
    </div>
  )
}

export default about