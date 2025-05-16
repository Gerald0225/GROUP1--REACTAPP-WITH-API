import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Join from './Components/Join/Join';
import Hotel from './Components/Hotel/Hotel';
import Offer from './Components/Offers/Offers';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import HotelListing from './Components/HotelApi/HotelApi';
import Vlogs from './Components/Blog/Blog';
import Reservation from './Components/Reservation/Reservation';
import HotelDashboard from './Components/Dashboard/HotelDashboard';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import About from './Components/About/about';
import FAQ from './Components/FAQ/FAQ';

function AppRoutes() {
  const location = useLocation();
  const hideFooterRoutes = ['/reservation', '/dashboard', '/register', '/login'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Join />
              <Hotel />
              <Offer />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route path="/top-hotels" element={<HotelListing />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/mission-vision" element={<About />} />
        <Route path="/blogs" element={<Vlogs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/dashboard" element={<HotelDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
