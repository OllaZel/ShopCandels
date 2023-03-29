import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Home from './Home';


function App() {
  return <Router>
    <nav className='menu'>
      <Link className='link' to="/home">ГЛАВНАЯ</Link>
      <Link className='link' to="/about">О НАС</Link>
      <Link className='link' to="/products">ПРОДУКЦИЯ</Link>
      <Link className='link' to="/contacts">КОНТАКТЫ</Link>
    </nav>

    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contacts" element={<Contact/>}/>
    </Routes>
  </Router>;

  <h>HYGGE</h>
}

export default App;
