import AboutHeader from '@/components/AboutHeader'
import React, { useEffect, useRef, useState } from 'react'
import "../app/globals.css";
import AboutNav from '@/components/AboutNav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from "framer-motion";

const WEB_INTEGRATION_ID = process.env.NEXT_PUBLIC_QLIK_WEB_INTEGRATION_ID;
const QLIK_URL = "https://osivamh5v2wvbf2.in.qlikcloud.com";
const QLIK_SHEET_ID = "dGSNjcJ"; 
const QLIK_APP_ID = "a972b12d-666a-46ec-8a49-7dd39c6afb01";

const About = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticateQlik = async () => {
      try {
        const response = await fetch(`${QLIK_URL}/api/v1/items`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "qlik-web-integration-id": WEB_INTEGRATION_ID as string,
          },
          credentials: "include",
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          console.error("Authentication failed");
        }
      } catch (error) {
        console.error("Error authenticating Qlik:", error);
      }
    };

    authenticateQlik();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <AboutHeader />
      <AboutNav />

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

      {isAuthenticated ? (
        <iframe
          ref={iframeRef}
          src={`${QLIK_URL}/single/?appid=${QLIK_APP_ID}&sheet=${QLIK_SHEET_ID}&theme=horizon&opt=ctxmenu,currsel`}
          style={{ border: "none", width: "100%", height: "100vh" }}
        ></iframe>
      ) : (
        <p className="text-center mt-20 text-xl text-red-500">Loading Qlik Dashboard...</p>
      )}

      <Footer />
    </div>
  );
};

export default About;
