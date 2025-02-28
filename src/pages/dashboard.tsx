"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import "../app/globals.css";
import "./dashboard.css";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const router = useRouter();
  useAuth(); // Redirects if not logged in

  const [uid, setUsername] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

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

  const handleOverlayClick = () => {
    setIsDrawerOpen(false);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-50 shadow-md p-4">
        <div className="container mx-auto flex items-center">
          <button
            className="text-gray-700 text-2xl px-2 focus:outline-none"
            onClick={() => setIsDrawerOpen(true)}
          >
            <FaBars />
          </button>
          <a href="https://www.cris.org.in" className="ml-4">
            <img src="./cris_logo.png" alt="Logo" width={120} height={50} />
          </a>
          <ul className="flex space-x-6 text-xl ml-auto items-center">
            {uid && <li className="text-gray-700 font-semibold">Welcome, admin</li>}
            <li>
              <button onClick={handleLogout} className="text-gray-700 hover:text-black">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="mt-5 flex justify-center overflow-hidden">
          <h1 className="animate-marquee text-xl hover:text-bold">
            Welcome to Computerized TTE Lobby
          </h1>
        </div>
      </main>

      {/* Drawer & Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleOverlayClick}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="p-5">
          <button className="text-black text-2xl mb-4 focus:outline-none" onClick={() => setIsDrawerOpen(false)}>
            <FaTimes />
          </button>
          <button className="w-full py-2 px-4 mb-2 bg-blue-500 rounded hover:bg-blue-700">Dashboard</button>

          {/* Dropdown 1 */}
          <div className="mb-2">
            <button
              className="w-full flex justify-between items-center py-2 px-4 bg-green-500 rounded hover:bg-green-700"
              onClick={() => toggleDropdown(1)}
            >
              TTE Activity {openDropdown === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openDropdown === 1 && (
              <div className="bg-gray-700 mt-2 rounded">
                <a href="#" className="block py-2 px-4 border border-gray-600 hover:bg-gray-600">Daily Report</a>
                <a href="#" className="block py-2 px-4 border border-gray-600 hover:bg-gray-600">Monthly Report</a>
                <a href="#" className="block py-2 px-4 border border-gray-600 hover:bg-gray-600">Yearly Report</a>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="mb-2">
            <button
              className="w-full flex justify-between items-center py-2 px-4 bg-red-500 rounded hover:bg-red-700"
              onClick={() => toggleDropdown(2)}
            >
              Utilities {openDropdown === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openDropdown === 2 && (
              <div className="bg-gray-700 mt-2 rounded">
                <a href="#" className="block py-2 px-4 border border-gray-600 hover:bg-gray-600">Profile</a>
                <a href="#" className="block py-2 px-4 border border-gray-600 hover:bg-gray-600">Security</a>
                <a href="#" className="block py-2 px-4 border border-gray-600 hover:bg-gray-600">Preferences</a>
              </div>
            )}
          </div>

          <button className="w-full py-2 px-4 mb-2 bg-blue-500 rounded hover:bg-blue-700">MIS Reports</button>
          <button className="w-full py-2 px-4 mb-2 bg-blue-500 rounded hover:bg-blue-700">Allowance</button>
        </div>
      </div>

      {/* Footer (Fixed at Bottom) */}
      <footer className="bg-blue-600 flex items-center justify-between text-gray-200 text-center py-4 mt-auto">
        <a className="text-sm hover:text-white hover:text-bold ml-5" href="#">DISCLAIMER</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">REIS</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">RBS</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">ICMS</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">TMS</a>
        <p>&copy; 2024 CRIS. All rights reserved.</p>
        <a className="text-sm hover:text-white hover:text-bold" href="#">NGET</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">RCT</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">WECRS</a>
        <a className="text-sm hover:text-white hover:text-bold" href="#">FOIS</a>
        <a className="text-sm hover:text-white hover:text-bold mr-5" href="#">NDMA</a>
      </footer>
    </div>
  );
};

export default Dashboard;
