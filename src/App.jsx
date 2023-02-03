import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Tenants from "./Components/Tenants/Tenants";
import Landlord from "./Components/Landlord/Landlord";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
        <Home />
        <Tenants />
        <Landlord />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
