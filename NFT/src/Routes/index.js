import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Header/Header";
import About from "../Pages/About/index";
import Home from "../Pages/Home";
import Browse from "../Pages/Browse";
import Shop from "../Pages/Shop/index";
import Details from "../Pages/Details/index";
import Blog from "../Pages/Blog/Blog";
import Creator from "../Pages/User/Creator";
import Wallet from "../Pages/Wallet";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/browse/details" element={<Details />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default Routers;
