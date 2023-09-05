import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
