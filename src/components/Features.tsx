import React, { useState } from "react";
import { LoginModal } from "./LoginModal";

const Features = () => {
  const features = [
    { title: "1", description: "Drawing out of TTE links." },
    { title: "2", description: "Accountal of duty hours." },
    { title: "3", description: "Preparation of TA/night duty allowance bills." },
  ];

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <section className="bg-transparent py-10 bg-white">
      <div className="container mx-auto text-center">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 items-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/80 transform hover:scale-105 ease-out duration-500 p-2 
                        shadow-md border rounded-lg flex justify-center items-center 
                        h-[80px] md:h-[100px] w-[200px] md:w-auto text-sm md:text-lg"
            >
              <button className="text-center md:text-[14px] font-semibold px-4">
                {feature.description}
              </button>
            </div>
          ))}
        </div>
        {/* Login Button */}
        <button 
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
                     transition-transform duration-300 transform hover:scale-105 shadow-lg"
          onClick={(e) => { 
            e.preventDefault();  
            setIsLoginOpen(true); 
          }}
        >
          Login
        </button>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
};

export default Features;
