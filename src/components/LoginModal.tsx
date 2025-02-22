"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value); // Verify if captcha is completed
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
          onClick={onClose} // Close when clicking the background
        >
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-xl font-semibold mb-4">Login</h2>

            <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-2" />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-4" />

            {/* reCAPTCHA */}
            <div className="mb-4 flex justify-center">
              <ReCAPTCHA 
                sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
                onChange={handleCaptchaChange}
              />
            </div>

            <div className="flex">
              <button 
                className={`w-full p-2 mb-2 ${captchaVerified ? "bg-blue-500 text-white" : "bg-gray-400 cursor-not-allowed"}`} 
                disabled={!captchaVerified}
              >
                Login
              </button>

              <button className="w-full bg-red-300 p-2 mb-2">Forgot Password?</button>
            </div>

            <button className="w-full bg-blue-300 p-2" onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
