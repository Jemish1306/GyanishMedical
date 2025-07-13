import { Outlet } from 'react-router-dom';

import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

export default function MainLayout() {
  return (
    <>
      {/* Fixed top navbar */}
      <Navbar />

      {/* Main content with top padding to offset fixed navbar */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer at bottom */}
  <Footer />
    </>
  );
}
