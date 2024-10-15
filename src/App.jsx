import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import AboutUs from "./pages/about-us/AboutUs";
import ProductAdmin from "./pages/product-admin/ProductAdmin"
import Register from "./pages/register/Register"
import ProductDetail from "./pages/product-detail/ProductDetail";
import UserAdmin from "./pages/user-admin/UserAdmin";
import Layout from "./layout/Layout";
import AdminGuard from "./services/guard/AdminGuard";

export default function App() {
  
  return (
    <>
        
        <Routes>

          <Route path="/login" element={ <Login /> } />

          <Route path="/" element={ <Layout /> }>
          
            <Route index element={ <Home /> } />

            <Route path="contact" element={ <Contact /> } />

            <Route path="about-us" element={ <AboutUs /> } />

            <Route path="register" element={ <Register /> } />

            <Route path="product-detail/:id" element={ <ProductDetail /> } />

            <Route path="product-admin" element={ 
                <AdminGuard>
                  <ProductAdmin />
                </AdminGuard> 
              } />

            <Route path="user-admin" element={ 
              <AdminGuard>
                <UserAdmin />
              </AdminGuard> 
              } />

            <Route path="*" element={ <h1>Not found</h1>} />
          
          </Route>

        </Routes>

    </>
  )
}
