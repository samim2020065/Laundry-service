import React from "react";
import WomanThinkingImg from "../assets/woman-thinking.png";


const packages = [
  {
    title: "SINGLE SIZE",
    subtitle: "Perfect for people who live alone",
    features: ["2 loads per week", "up to 10 lbs per load"],
    price: "10",
    color: "white",
  },
  {
    title: "COUPLES SIZE",
    subtitle: "Perfect for couples size 3–6",
    features: ["4 loads per week", "up to 12 lbs per load", "Special garments", "Pickup & drop off"],
    price: "20",
    color: "blue-50",
  },
  {
    title: "FAMILY SIZE",
    subtitle: "Perfect for families size 4–6",
    features: ["6 loads per week", "up to 15 lbs per load", "Special garments", "Pickup & drop off", "Free detergent samples"],
    price: "30",
    color: "white",
  },
];

export default function Packages() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-blue-600 text-sm font-semibold">SERVICES</h2>
      <h3 className="text-3xl font-bold my-4">Services & Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-${pkg.color} rounded-xl p-6 shadow-md flex flex-col justify-between`}
          >
            <div>
              <h4 className="text-blue-600 font-bold text-lg mb-1">{pkg.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{pkg.subtitle}</p>
              <ul className="text-left mb-4">
                {pkg.features.map((f, i) => (
                  <li key={i} className="mb-1 flex items-center">
                    <span className="mr-2 text-blue-500">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">{pkg.price} dollars /per month</p>
              <button className="bg-blue-100 hover:bg-blue-200 px-6 py-2 rounded-full font-semibold">
                Choose
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-blue-100 rounded-xl p-8 mt-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <img
          src={WomanThinkingImg} 
          alt="Woman Thinking"
          className="h-32 mb-4 md:mb-0"
        />
        <div>
          <h4 className="text-2xl font-bold mb-2">Hard time deciding what’s best for you?</h4>
          <button className="bg-white hover:bg-gray-100 px-6 py-2 rounded-full font-semibold">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}