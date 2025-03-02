import React from "react";
import Features from "./Features";

const HeroSection = () => {
  return (
    <section className="bg-transparent p-6 text-center flex flex-col items-center justify-center min-h-[40vh]">
      <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-bold text-blue-700">
        Welcome to the Computerised TTE Lobby System
      </h1>
      <p className="text-md md:text-lg sm:text-md font-bold text-gray mt-3 max-w-4xl leading-relaxed">
        Manage TTE sign-on/off efficiently for originating, terminating, and passing trains with ease.
      </p>
      <Features />
    </section>
  );
};

export default HeroSection;
