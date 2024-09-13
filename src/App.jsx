import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import ProductAdmin from "./pages/product-admin/ProductAdmin"
import Register from "./pages/register/Register"
import ProductDetail from "./pages/product-detail/ProductDetail";
import UserAdmin from "./pages/user-admin/UserAdmin";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import OrderDialog from "./components/order-dialog/OrderDialog";
import { useState } from "react";

export default function App() {
  
  return (
    <>
      
      <OrderDialog />

      <Header />

      <main className="main-container">

        <ScrollToTop /> {/* Este componente ejecutará el scroll hacia arriba */}
        
        <Routes>

          <Route path="/" element={ <Home /> } />

          <Route path="/contact" element={ <Contact /> } />

          <Route path="/login" element={ <Login /> } />

          <Route path="/about-us" element={ <AboutUs /> } />

          <Route path="/product-admin" element={ <ProductAdmin /> } />

          <Route path="/user-admin" element={ <UserAdmin /> } />

          <Route path="/register" element={ <Register /> } />

          <Route path="/product-detail/:id" element={ <ProductDetail /> } />

        </Routes>
      </main>
      
      <Footer />
    </>
  )
}
