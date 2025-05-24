import React, {useEffect,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import WashIronImg from "../assets/wash-iron.png";
import WashFoldImg from "../assets/wash-fold.png";
import IronFoldImg from "../assets/iron-fold.png";
import DryCleaningImg from "../assets/dry-cleaning.png";
import EmergencyServiceImg from "../assets/emergency-service.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const packages = [
  {
    slug: "washAndIron",
    title: "Wash And Iron Service",
    description:
      "All your regular wear garments will be washed, steam ironed and neatly packed for delivery.",
    img: WashIronImg,
  },
  {
    slug: "washAndFold",
    title: "Wash And Fold Service",
    description:
      "Just in case you choose not to use our steam ironing services we will wash and fold them for you.",
    img: WashFoldImg,
  },
  {
    slug: "ironAndFold",
    title: "Iron And Fold Service",
    description:
      "Get back your dirty clothes. Your clothes will be ironed and pressed to look the best for you.",
    img: IronFoldImg,
  },
  {
    slug: "dryCleaning",
    title: "Dry Cleaning Service",
    description:
      "All your sensitive and special garments will be individually treated for any stains and dry cleaned.",
    img: DryCleaningImg,
  },
  {
    slug: "emergencyService",
    title: "Emergency Service",
    description:
      "You can use our emergency service to receive services easily and quickly in our machines using very safe.",
    img: EmergencyServiceImg,
  },
];

export default function WashAndIron() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [menOpen, setMenOpen] = useState(false);
  const [womenOpen, setWomenOpen] = useState(false);
  const [householdOpen, setHouseholdOpen] = useState(false);
  const handleAddToCart = (item) => {
  setCart((prevCart) => {
    const existing = prevCart.find((i) => i.name === item.name);
    if (existing) {
      return prevCart.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });
};
  const handleIncrement = (index) => {
  setCart((prevCart) =>
    prevCart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const handleDecrement = (index) => {
  setCart((prevCart) =>
    prevCart.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const service = packages.find((pkg) => pkg.slug === slug);


  if (!service) {
    return <div className="text-center mt-10 text-red-500">Service Not Found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">{service.title}</h2>
        <div className="relative inline-block text-left mb-6">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center justify-between gap-2"
            >
              Select Service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute mt-2 w-56 bg-white shadow-lg rounded z-10 text-left">
                {packages.map((pkg) => (
                  <button
                    key={pkg.slug}
                    onClick={() => {
                      navigate(`/services/${pkg.slug}`); // updates URL
                      setDropdownOpen(false); // closes dropdown
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left"
                  >
                    {pkg.title}
                  </button>
                ))}
              </div>
            )}
          </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Categories */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="border rounded-md p-4 shadow">
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => setMenOpen(!menOpen)}
  >
    <h4 className="font-semibold text-lg">👔 Men's Wear</h4>
    <span className={`transform transition-transform ${menOpen ? 'rotate-180' : ''}`}>
      ▼
    </span>
  </div>
  {menOpen && (
    <ul className="mt-4 space-y-2">
  <li className="flex justify-between border-b pb-2">
    <span>Top Wear (Shirt / T-shirt / Trouser / Pajama) — <strong>৳40</strong></span>
    <button
      onClick={() => handleAddToCart({ name: "Top Wear", price: 40 })}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to bag
    </button>
  </li>
  <li className="flex justify-between border-b pb-2">
    <span>Suit (2 Pcs) — <strong>৳300</strong></span>
    <button
      onClick={() => handleAddToCart({ name: "Suit (2 Pcs)", price: 300 })}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to bag
    </button>
  </li>
  <li className="flex justify-between border-b pb-2">
    <span>Suit (3 Pcs) — <strong>৳350</strong></span>
    <button
      onClick={() => handleAddToCart({ name: "Suit (3 Pcs)", price: 350 })}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to bag
    </button>
  </li>
  <li className="flex justify-between border-b pb-2">
    <span>Jacket / Coat — <strong>৳200</strong></span>
    <button
      onClick={() => handleAddToCart({ name: "Jacket / Coat", price: 200 })}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to bag
    </button>
  </li>
  <li className="flex justify-between">
    <span>Sherwani — <strong>৳350</strong></span>
    <button
      onClick={() => handleAddToCart({ name: "Sherwani", price: 350 })}
      className="bg-blue-600 text-white px-2 py-1 rounded"
    >
      Add to bag
    </button>
  </li>
</ul>

  )}
</div>

          <div className="border rounded-md p-4 shadow">
            <h4 className="font-semibold text-lg mb-2">👗 Women's Wear</h4>
          </div>
          <div className="border rounded-md p-4 shadow">
            <h4 className="font-semibold text-lg mb-2">🧺 Household & Accessories</h4>
          </div>
        </div>

        {/* Right: Cart Summary */}
        <div className="w-full md:w-1/2 border rounded-md shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
  {cart.length === 0 ? (
    <tr>
      <td className="p-4 text-center text-gray-500" colSpan="5">
        Your Cart is Empty.
      </td>
    </tr>
  ) : (
    <>
      {cart.map((item, index) => (
        <tr key={index}>
          <td className="p-2 border">{item.name}</td>
          <td className="p-2 border">৳ {item.price}</td>
          <td className="p-2 border">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(index)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleIncrement(index)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </td>
          <td className="p-2 border">৳ {item.price * item.quantity}</td>
          <td className="p-2 border">
            <button
              className="text-red-500 text-sm hover:underline"
              onClick={() => setCart(cart.filter((_, i) => i !== index))}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}

      {/* Total Row */}
      <tr className="font-semibold bg-gray-200">
        <td className="p-2 border" colSpan="3">Total</td>
        <td className="p-2 border">
          ৳ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </td>
        <td className="p-2 border"></td>
      </tr>
    </>
  )}
</tbody>


          </table>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
