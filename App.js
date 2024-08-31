import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Crops from './Components/Crops';
import About from './Components/About';
import Contact from './Components/Contact';
import RegisterForm from './Components/RegisterForm';
import GetStarted from './Components/GetStarted';
import AgriExperts from './Components/AgriExperts';
import Fertilizer from './Components/Fertilizer';
import SchemesPage from './Components/Schemes';
import Login from './Components/Login';
import { AuthProvider } from './AuthContext'; // Import the Auth provider
import Mission from './Components/Mission';
import Soil from './Components/Soil';
import SeedProduct from './Components/SeedProducts';
import CartPage from './Components/CartPage';
import FertilizerProducts from './Components/FertilizerProducts';

function ConditionalNavbar() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }
  return <Navbar />;
}



function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <ConditionalNavbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/agri" element={<AgriExperts />} />
              <Route path="/soil" element={<Soil/>} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/fertilizer" element={<Fertilizer />} />
              <Route path="/mission" element={<Mission/>} />
              <Route path="/seeds" element={<SeedProduct/>} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/fertilizers" element={<FertilizerProducts />} />
            </Routes>
          </main>
          
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
