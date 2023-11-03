import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import ConfirmeBooking from './components/Booking/ConfirmeBooking';
import About from './components/About/About';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmeBooking" element={<ConfirmeBooking />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
