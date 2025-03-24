import React, { useEffect, useState } from "react";
import AboutHeader from "@/components/AboutHeader";
import AboutNav from "@/components/AboutNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const about = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetch(
          "https://osivamh5v2wvbf2.in.qlikcloud.com/api/v1/items",
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Qlik-Web-Integration-ID":
                process.env.NEXT_PUBLIC_QLIK_WEB_INTEGRATION_ID || "",
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          console.error("Qlik Authentication Failed");
        }
      } catch (error) {
        console.error("Error authenticating with Qlik:", error);
      }
    };

    authenticate();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
          src="https://osivamh5v2wvbf2.in.qlikcloud.com/single/?appid=a972b12d-666a-46ec-8a49-7dd39c6afb01&sheet=dGSNjcJ&theme=horizon&opt=ctxmenu,currsel"
          style={{ border: "none", width: "100%", height: "100vh" }}
        />
      ) : (
        <p className="text-center mt-10">Authentication Failed. Please log in to view the dashboard.</p>
      )}
      
      <Footer />
    </div>
  );
};

export default about;
