import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/useCartContext.jsx";

export default function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}
