"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import "../app/globals.css";
import "./dashboard.css";
import { Menu } from "lucide-react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar"; // Import Sidebar
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

const Dashboard = () => {
  const router = useRouter();
  useAuth(); // Redirects if not logged in

  const [uid, setUsername] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  useEffect(() => {
    const storedUser = localStorage.getItem("uid");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen">

      <Header/>

      {/* Navbar */}
      <nav className="bg-blue-500 h-12 z-50 flex items-center justify-between px-4 shadow-md top-0 left-0 w-full">
        {/* Sidebar Toggle Button */}
        <button className="text-white hover:scale-110 p-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="w-7 h-7" />
        </button>

        <h1 className="animate-marquee text-gray-100 text-xl hover:text-bold">
              Welcome to Computerized TTE Lobby
        </h1>

        <div className="h-full flex items-center">
          <ul className="flex text-sm lg:text-lg md:text-lg h-full items-center justify-center">
            {uid && <li className="text-gray-100 font-semibold">Welcome, admin</li>}
            <li>
              <button onClick={handleLogout} className="text-gray-100 ml-10 hover:text-black">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative ml-[172px] w-[calc(100vw-170px)] h-[calc(100vh-125px)]"
      >
        <Image 
          src="/dashboard2.png" 
          alt="Background" 
          layout="fill"
          objectFit=""  // Ensures image covers the whole area properly
          priority 
          placeholder="blur" 
          blurDataURL="/dashboard2.png" 
        />
      </motion.div>

      {/* Sidebar and Main Content Wrapper */}
      <div className="">
        {/* Sidebar below navbar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content */}
        {/* <main className="flex-1 p-4">
          <div className="flex justify-center overflow-hidden">
            <h1 className="animate-marquee text-xl hover:text-bold">
              Welcome to Computerized TTE Lobby
            </h1>
          </div>
        </main> */}
      </div>

      {/* Footer (Fixed at Bottom) */}
      <Footer />
    </div>
  );
};

export default Dashboard;
