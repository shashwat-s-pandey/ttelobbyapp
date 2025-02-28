import React from "react";

const Features = () => {
  const features = [
    { title: "1", description: "Drawing out of TTE links." },
    { title: "2", description: "Accountal of duty hours." },
    { title: "3", description: "Preparation of TA/night duty allowance bills." },
  ];

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto text-center">
        {/* No extra horizontal gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-4 items-center">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white transform hover:scale-110 ease-out duration-500 p-2 h-40 shadow-md border rounded-lg 
                        flex justify-center items-center"
            >
              <button className="text-lg font-semibold text-center px-4">
                {feature.description}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
