import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Tenants from "./Components/Tenants/Tenants";
import Landlord from "./Components/Landlord/Landlord";
import NotFound from "./Components/NotFound/NotFound";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
