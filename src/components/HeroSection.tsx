import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-gray-200 text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to TTE Lobby</h1>
      <p className="mt-4 text-lg text-gray-600">An application where TTEs of originating / terminating / passing trains sign-on / sign-off.</p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </section>
  )
}

export default HeroSection