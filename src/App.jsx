import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import ProductAdmin from "./pages/product-admin/ProductAdmin"
import Register from "./pages/register/Register"

export default function App() {
  return (
    <>

      <Header />

      <main className="main-container">
        <Routes>

          <Route path="/" element={ <Home /> } />

          <Route path="/contact" element={ <Contact /> } />

          <Route path="/login" element={ <Login /> } />

          <Route path="/about-us" element={ <AboutUs /> } />

          <Route path="/product-admin" element={ <ProductAdmin /> } />

          <Route path="/register" element={ <Register /> } />

        </Routes>
      </main>
      
      <Footer />
    </>
  )
}
