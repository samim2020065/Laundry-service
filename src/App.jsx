import React from "react";
import Header from "./components/Header";
import Steps from "./components/Steps";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

function App() {
  return (<>
<div className="font-sans text-gray-800">
  <Header />
  <Steps />
  <Packages />
  <Footer />
</div>
  </>
    
  );
}

export default App;