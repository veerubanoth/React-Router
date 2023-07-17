import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Vans from './Vans';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link classsName="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to={"/about"} >About</Link>
          <Link to={"/vans"} >vans</Link>
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
