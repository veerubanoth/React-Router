import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

function App() {
  return (
    <BrowserRouter >
      <header className='header-nav'>
        <Link classsName="site-logo" to="/">#VanLife</Link>
        <nav className='nav-links'>
          <Link to={"/about"} className='single'>About</Link>
          <Link to={"/vans"} className='single'>vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />

      </Routes>

    </BrowserRouter>
  );
}
export default App;
