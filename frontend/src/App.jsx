import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./components/Navbar"; 
import Steps from "./components/Steps";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword"
import Header from "./components/Header";
import Order from "./pages/Order";
import Services from "./pages/Services"
import WashAndIron from "./pages/WashAndIron";// Only for the Home page
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";


function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 animate-fade">
        {/* Global Toast Notifications */}
        <ToastContainer />
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
          <Route path="/dashboard" element ={<PrivateRoute/>}>
              <Route path="user" element={<Dashboard/>}/>
              <Route path="user/orders" element={<Orders />} />
              <Route path="user/profile" element={<Profile />} />

          </Route>
          <Route path="/dashboard" element ={<AdminRoute/>}>
              <Route path="admin" element={<AdminDashboard/>}/>
              <Route path="admin/create-category" element={<CreateCategory />} />
              <Route path="admin/create-product" element={<CreateProduct />} />
              <Route path="admin/users" element={<Users />} />

          </Route>
          
          {/* Routes for SignIn and SignUp pages */}

          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
