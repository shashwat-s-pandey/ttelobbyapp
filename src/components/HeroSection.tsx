import React from 'react'
import Features from './Features'

const HeroSection = () => {
  return (
    <section className="p-2 text-center">
      <p className="text-lg">An application where TTEs of originating / terminating / passing trains sign-on / sign-off.</p>
      {/* <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button> */}
      <Features/>
    </section>
  )
}

export default HeroSection