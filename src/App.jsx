// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
// import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layout/MainLayout';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      // optional: anchorPlacement: 'top-center',
    });
  }, []);

  return (
   
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
   
  );
}
