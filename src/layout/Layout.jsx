import { Outlet } from "react-router-dom";
import OrderDialog from "../components/order-dialog/OrderDialog";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout() {
    return (
    <> 

    <OrderDialog />

    <ScrollToTop /> {/* Este componente ejecutará el scroll hacia arriba */}
    
    <Header />

    <main className="main-container">

        <Outlet />

    </main>
    
    <Footer />
    </>
    )
}
