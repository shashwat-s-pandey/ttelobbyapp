import React from 'react'

const Features = () => {
    const features = [
        { title: "Fast", description: "Optimized for speed and performance." },
        { title: "Responsive", description: "Works seamlessly across all devices." },
        { title: "SEO-Friendly", description: "Designed with best SEO practices." }
      ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 shadow-md border rounded-lg">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features