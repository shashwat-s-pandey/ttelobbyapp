import React from "react";
import Features from "./Features";

const HeroSection = () => {
  return (
    <section className="p-6 text-center flex flex-col items-center justify-center min-h-[40vh] bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 drop-shadow-lg">
        Welcome to the Computerised TTE Lobby System
      </h1>
      <p className="text-lg md:text-xl font-bold text-gray mt-3 max-w-2xl leading-relaxed">
        Manage TTE sign-on/off efficiently for originating, terminating, and passing trains with ease.
      </p>
      <Features />
    </section>
  );
};

export default HeroSection;
