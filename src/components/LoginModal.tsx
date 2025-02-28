"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [uid, setuid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to generate a random CAPTCHA string
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Avoid confusing characters
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaText(captcha);
    setUserCaptchaInput(""); // Reset input
    setCaptchaVerified(false);
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Verify CAPTCHA input
  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCaptchaInput(e.target.value);
    setCaptchaVerified(e.target.value.toUpperCase() === captchaText);
  };

  const handleLogin = async () => {
    if (!captchaVerified) {
      setError("CAPTCHA is incorrect!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("uid", data.uid); // Store uid
        router.push("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error: ${err.message}`);
      } else {
        setError("Something went wrong. Try again.");
      }
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Login</h2>

            <input 
              type="uid" 
              placeholder="User ID" 
              className="w-full border p-2 rounded mb-2" 
              value={uid}
              onChange={(e) => setuid(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border p-2 rounded mb-4" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Custom CAPTCHA */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div className="bg-gray-200 px-4 py-2 rounded font-mono text-lg tracking-widest">
                  {captchaText}
                </div>
                <button 
                  className="ml-2 text-sm text-blue-600 underline"
                  onClick={generateCaptcha}
                >
                  Refresh
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Enter CAPTCHA" 
                className="w-full border p-2 rounded mt-2" 
                value={userCaptchaInput}
                onChange={handleCaptchaChange}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <div className="flex items-center justify-center">
              <button 
                className={`w-full p-2 mb-2 ${captchaVerified ? "bg-blue-500 ease-out transform hover:scale-105 transition duration-200 text-white" : "bg-gray-400 cursor-not-allowed"}`} 
                disabled={!captchaVerified || loading}
                onClick={handleLogin}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <a className="w-full p-2 mb-2 text-red-500 hover:font-semibold text-center" href="">Forgot Password?</a>
            </div>

            <button className="w-full ease-out transform hover:scale-105 transition duration-200 text-white bg-red-500 p-2" onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
