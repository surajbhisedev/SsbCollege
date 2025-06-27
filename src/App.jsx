import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Academics from './components/Academics/Academics';
import Admission from './components/Admission/Admission';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Committees from './components/Committee/Committee';
import Notices from './components/Notices/Notices';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/Notices' element={<Notices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
