import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Steps from "./components/Steps";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Order from "./pages/Order";
import Services from "./pages/Services"
import WashAndIron from "./pages/WashAndIron";// Only for the Home page

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 animate-fade">
        {/* Navbar is always visible */}
        
        
        <Routes>
          {/* Main Route with Header (Home page), Steps, Packages, and Footer */}
          <Route
            path="/"
            element={
              <>
                <Header /> {/* Home page has the full Header with hero section */}
                <Steps />
                <Packages />
                <Footer />
              </>
            }
          />
          {/* Routes for order pages */}
          <Route path="/order" element={<Order />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<WashAndIron />} />
          {/* Routes for SignIn and SignUp pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
