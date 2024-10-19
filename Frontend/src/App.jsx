import HomePage from "./pages/home/HomePage"
import About from "./pages/about/About"
import Support from "./pages/support/SupportPage.jsx"
import {Routes,Route} from "react-router-dom"
import Navbar from "./pages/Navbar.jsx"
import Footer from "./pages/Footer.jsx"
import NotFound from "./pages/NotFound.jsx"
import PricingPage from "./pages/pricing/PricingPage.jsx"
import ProductPage from "./pages/products/ProductPage.jsx"
import SignUpPage from "./pages/signup/SignUpPage.jsx"

import LoginPage from "./pages/login/LoginPage.jsx";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/pricing/*" element={<PricingPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
