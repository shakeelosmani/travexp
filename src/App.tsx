import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
